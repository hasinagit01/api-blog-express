import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import prisma from '../config/database.js'
import { ApiError } from '../utils/errors.js'
import { sessionService } from './sessionService.js'
import emailQueueService from './emailQueueService.js'
import authConfig from '../config/authConfig.js'
import { v4 as uuidv4 } from 'uuid'

/**
 * Verify if a plain password matches a hashed password
 * @param {string} plainPassword - The plain text password to check
 * @param {string} hashedPassword - The hashed password from database
 * @returns {Promise<boolean>} - True if password matches
 * @private
 */
const verifyPassword = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword)
}

/**
 * Generates an access token for a user
 * @description This function generates a JWT access token for the user.
 * The token includes the user's ID, email, role, and a unique identifier (jti).
 * The token is signed with a secret key and has an expiration time.
 * @param {*} user 
 * @returns 
 */
export const generateAccessToken = (user) => {
    const jti = uuidv4() // Generate a unique token ID
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role,
            jti, // Include the unique ID in the token
        },
        authConfig.secret,
        { expiresIn: authConfig.expiresIn || '15m' }
    )
}

/**
 * Authenticates a user with their email and password
 * @param {string} email - The user's email address
 * @param {string} password - The user's password
 * @returns {Promise<Object>} Object containing authentication token and user details
 * @throws {ApiError} 401 if user not found or invalid password
 */
export const login = async (email, password) => {
    try {
        // Trouver l'utilisateur par email
        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (!user) {
            throw new ApiError(401, 'Invalid email or password')
        }

        // Vérifier que le compte est actif
        if (!user.isEmailVerified) {
            throw new ApiError(403, 'Account is not active. Please verify your email')
        }

        // Vérifier le mot de passe
        const passwordValid = await verifyPassword(password, user.password)
        if (!passwordValid) {
            throw new ApiError(401, 'Invalid email or password')
        }

        // Générer un token d'accès avec un ID unique (jti)
        const jti = uuidv4() // Identifiant unique pour ce token
        const accessToken = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.role,
                jti, // Inclure l'identifiant unique
            },
            authConfig.secret,
            { expiresIn: authConfig.expiresIn || '15m' }
        )

        // Créer une session et obtenir un refresh token
        const userData = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
        }
        const refreshToken = await sessionService.createSession(userData)

        console.log('userconneted', user)
        // Incrémenter le compteur de connexions
        await prisma.user.update({
            where: { id: user.id },
            data: {
                loginCount: { increment: 1 },
                lastLogin: new Date(),
            },
        })

        console.log(`User ${user.id} (${user.email}) logged in successfully`)

        return {
            accessToken,
            refreshToken,
            user: userData,
        }
    } catch (error) {
        console.error('Login failed:', error)
        if (error instanceof ApiError) {
            throw error
        }
        throw new ApiError(500, 'Authentication failed')
    }
}

/**
 * Creates a new user account
 * @param {Object} userData - The user data for registration
 * @param {string} userData.email - User's email address
 * @param {string} userData.password - User's password
 * @param {string} userData.firstname - User's first name
 * @param {string} userData.lastname - User's last name
 * @returns {Promise<Object>} Created user object without password
 * @throws {Error} If there's an error during user creation
 */
export const register = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10)
    const verificationToken = emailQueueService.generateVerificationToken()

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
        where: { email: userData.email },
    })

    if (existingUser) {
        throw new ApiError(400, 'Email already registered')
    }

    const user = await prisma.user.create({
        data: {
            ...userData,
            password: hashedPassword,
            verificationToken,
            isEmailVerified: false,
        },
    })

    try {
        // Queue verification email
        await emailQueueService.queueVerificationEmail(user, verificationToken)
    } catch (emailError) {
        console.error('Failed to queue verification email:', emailError)
        // Continuer malgré l'erreur d'email pour ne pas bloquer l'inscription
    }

    return {
        user: {
            id: user.id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            role: user.role,
            isEmailVerified: user.isEmailVerified,
        },
    }
}
/**
 * Verifies a user's email with the verification token
 */
export const verifyEmail = async (token) => {
    if (!token) {
        throw new ApiError(400, 'Verification token is required')
    }

    const user = await prisma.user.findFirst({
        where: { verificationToken: token },
    })

    if (!user) {
        throw new ApiError(400, 'Invalid verification token')
    }

    await prisma.user.update({
        where: { id: user.id },
        data: {
            isEmailVerified: true,
            verificationToken: null,
        },
    })

    return {
        message: 'Email successfully verified. You can now log in.',
        verified: true,
    }
}

/**
 * Requests a password reset email
 */
export const requestPasswordReset = async (email) => {
    if (!email) {
        throw new ApiError(400, 'Email is required')
    }

    const user = await prisma.user.findUnique({
        where: { email },
    })

    if (!user) {
        // For security, don't reveal that the user doesn't exist
        return { message: 'If your email exists in our system, you will receive a password reset link' }
    }

    const resetToken = emailQueueService.generateVerificationToken()
    const resetExpires = new Date(Date.now() + 3600000) // 1 hour from now

    await prisma.user.update({
        where: { id: user.id },
        data: {
            resetPasswordToken: resetToken,
            resetPasswordExpires: resetExpires,
        },
    })

    // Queue password reset email
    await emailQueueService.queuePasswordResetEmail(user, resetToken)

    return { message: 'If your email exists in our system, you will receive a password reset link' }
}

/**
 * Resets a user's password with the given token
 */
export const resetPassword = async (token, newPassword) => {
    if (!token || !newPassword) {
        throw new ApiError(400, 'Token and new password are required')
    }

    const user = await prisma.user.findFirst({
        where: {
            resetPasswordToken: token,
            resetPasswordExpires: {
                gt: new Date(),
            },
        },
    })

    if (!user) {
        throw new ApiError(400, 'Invalid or expired token')
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10)

    await prisma.user.update({
        where: { id: user.id },
        data: {
            password: hashedPassword,
            resetPasswordToken: null,
            resetPasswordExpires: null,
        },
    })

    return { message: 'Password has been reset successfully. You can now log in with your new password.' }
}

/**
 * Refreshes the access token using the refresh token
 * @param {string} refreshToken - The refresh token
 * @returns {Promise<Object>} Object containing new access token
 * @throws {ApiError} 401 if refresh token is invalid or missing
 */
export const refresh = async (refreshToken) => {
    if (!refreshToken) {
        throw new ApiError(401, 'Invalid account')
    }

    const session = await sessionService.getSession(refreshToken)
    if (!session) {
        throw new ApiError(401, 'Invalid refresh token')
    }

    const accessToken = generateAccessToken(session)
    return { accessToken }
}

/**
 * Logs out the user by deleting the refresh token
 * @param {string} refreshToken - The refresh token
 * @returns {Promise<void>}
 */
export const logout = async (refreshToken) => {
    try {
        if (!refreshToken) {
            throw new ApiError(400, 'Refresh token is required')
        }
        
        // Récupérer les données de session pour obtenir l'ID utilisateur
        const sessionData = await sessionService.getSession(refreshToken)
        if (!sessionData) {
            throw new ApiError(401, 'Invalid session')
        }
        
        // Supprimer la session
        await sessionService.deleteSession(refreshToken)
        
        console.log(`User ${sessionData.id} logged out successfully`)
        
        return true
    } catch (error) {
        console.error('Logout failed:', error)
        throw error instanceof ApiError ? error : new ApiError(500, 'Logout failed')
    }
}
