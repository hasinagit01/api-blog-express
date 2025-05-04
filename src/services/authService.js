import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import prisma from '../config/database.js'
import { ApiError } from '../utils/errors.js'
import { sessionService } from './sessionService.js'

const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_ACCESS_EXPIRES })
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
                },
            })

            if (!user) {
                throw new ApiError(401, 'Invalid credentials')
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

            return { accessToken, refreshToken, user }
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

    const user = await prisma.user.create({
        data: {
            ...userData,
            password: hashedPassword,
        },
    })

    return {
        id: user.id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        role: user.role,
    }
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
