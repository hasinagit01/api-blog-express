import * as authService from '../services/authService.js'
import { userResource } from '../resources/users/userResource.js'
import { sessionService } from '../services/sessionService.js'

/**
 * Handles user login authentication
 * @async
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next middleware function
 * @returns {Promise<void>} Promise that resolves when login is processed
 * @throws {Error} Forwards any authentication errors to error handling middleware
 */
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const authData = await authService.login(email, password)

        // Set refresh token in httpOnly cookie
        res.cookie('refreshToken', authData.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 jours
        })

        console.log('Sending response...')
        // Envoyer uniquement accessToken et user data
        res.status(200).json({
            message: 'Login successful',
            accessToken: authData.accessToken,
            user: authData.user,
        })
    } catch (error) {
        console.error('Login error:', error)
        next(error)
    }
}

/**
 * Handles new user registration
 * @async
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next middleware function
 * @returns {Promise<void>} Promise that resolves when registration is complete
 * @throws {Error} Forwards any registration errors to error handling middleware
 */
export const register = async (req, res, next) => {
    try {
        const { firstname, lastname, email, password, role } = req.body

        // Register user
        const newUser = await authService.register({
            firstname,
            lastname,
            email,
            password,
            role: role || 'READER',
        })

        // Generate tokens
        const accessToken = authService.generateAccessToken(newUser)
        const refreshToken = await sessionService.createSession({
            id: newUser.id,
            email: newUser.email,
            role: newUser.role,
        })

        // Set refresh token in httpOnly cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })

        // Send response
        res.status(201).json({
            message: 'User registered successfully',
            accessToken,
            user: userResource(newUser),
        })
    } catch (error) {
        next(error)
    }
}
export const refresh = async (req, res, next) => {
    try {
        const refreshToken = req.cookies.refreshToken
        const { accessToken } = await authService.refresh(refreshToken)

        res.json({ accessToken })
    } catch (error) {
        next(error)
    }
}

export const logout = async (req, res, next) => {
    try {
        const refreshToken = req.cookies.refreshToken
        await authService.logout(refreshToken)

        res.clearCookie('refreshToken')
        res.json({ message: 'Logged out successfully' })
    } catch (error) {
        next(error)
    }
}
