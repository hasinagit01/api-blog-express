import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import prisma from '../config/database.js'
import { ApiError } from '../utils/errors.js'
import { sessionService } from './sessionService.js'
import emailQueueService from './emailQueueService.js'
import authConfig from '../config/authConfig.js'

export const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id }, authConfig.secret, { expiresIn: authConfig.expiresIn || '24h' })
}

/**
 * Authenticates a user with their email and password
 * @param {string} email - The user's email address
 * @param {string} password - The user's password
 * @returns {Promise<Object>} Object containing authentication token and user details
 * @throws {ApiError} 401 if user not found or invalid password
 */
export const login = async (email, password) => {
    if (!email || !password) {
        throw new ApiError(400, 'Email and password are required')
    }

    const timeout = new Promise((_, reject) =>
        // eslint-disable-next-line no-undef
        setTimeout(() => reject(new ApiError(408, 'Login request timeout')), 5000)
    )

    try {
        const loginPromise = (async () => {
            const user = await prisma.user.findUnique({
                where: { email },
                select: {
                    id: true,
                    email: true,
                    password: true,
                    firstname: true,
                    lastname: true,
                    role: true,
                    isEmailVerified: true,
                },
            })

            if (!user) {
                throw new ApiError(401, 'Invalid credentials')
            }

            // Check if email is verified
            if (!user.isEmailVerified) {
                throw new ApiError(403, 'Please verify your email before logging in')
            }

            const validPassword = await bcrypt.compare(password, user.password)
            if (!validPassword) {
                throw new ApiError(401, 'Invalid password')
            }

            const accessToken = generateAccessToken(user)
            const refreshToken = await sessionService.createSession({
                id: user.id,
                email: user.email,
                firstname: user.firstname,
                lastname: user.lastname,
                role: user.role,
            })

            return {
                accessToken,
                refreshToken,
                user: {
                    id: user.id,
                    email: user.email,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    role: user.role,
                },
            }
        })()

        return await Promise.race([loginPromise, timeout])
    } catch (error) {
        console.error('Login failed:', error)
        throw error instanceof ApiError ? error : new ApiError(500, 'Login failed')
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

    // Generate tokens after user creation
    /*  const accessToken = generateAccessToken(user)
    const refreshToken = await sessionService.createSession({
        id: user.id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        role: user.role,
    }) */

    return {
        //accessToken,
        //refreshToken,
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

    return { message: 'Email successfully verified. You can now log in.' }
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
        throw new ApiError(401, 'Refresh token required')
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
    if (!refreshToken) {
        return
    }
    await sessionService.deleteSession(refreshToken)
}
