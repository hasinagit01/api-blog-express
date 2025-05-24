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
        // Send only the access token and user data
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
 * Handles new user registration with email verification
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

        // Register user wtih email verification
        const newUser = await authService.register({
            firstname,
            lastname,
            email,
            password,
            role: role || 'READER',
        })

        // Send response
        res.status(201).json({
            message: 'Registration successful! Please check your email to verify your account.',
            //accessToken,
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

export const logout = async (req, res, _next) => {
    try {
        // Récupérer le refreshToken soit du cookie, soit du corps de la requête
        const refreshToken = req.cookies.refreshToken || req.body.refreshToken

        // Si aucun refreshToken n'est trouvé, log et continue (au lieu de générer une erreur)
        if (!refreshToken) {
            console.log('No refresh token found during logout. Continuing with local logout.')

            // Blacklister le token d'accès s'il est disponible
            const authHeader = req.headers['authorization']
            if (authHeader) {
                const accessToken = authHeader.split(' ')[1]
                if (accessToken && req.user && req.user.id) {
                    try {
                        await sessionService.blacklistToken(accessToken, req.user.id)
                        console.log('Access token blacklisted during logout')
                    } catch (blacklistError) {
                        console.error('Error blacklisting token:', blacklistError)
                    }
                }
            }

            // Effacer le cookie quand même
            res.clearCookie('refreshToken')
            return res.status(200).json({ message: 'Logged out successfully (no refresh token)' })
        }

        // S'il y a un refreshToken, procéder avec la logique existante
        await authService.logout(refreshToken)

        // Blacklister le token d'accès s'il est disponible
        const authHeader = req.headers['authorization']
        if (authHeader) {
            const accessToken = authHeader.split(' ')[1]
            if (accessToken && req.user && req.user.id) {
                await sessionService.blacklistToken(accessToken, req.user.id)
                console.log('Access token blacklisted during logout')
            }
        }

        res.clearCookie('refreshToken')
        res.status(200).json({ message: 'Logged out successfully' })
    } catch (error) {
        console.error('Logout error:', error)
        // Même en cas d'erreur, essayer de nettoyer le cookie
        res.clearCookie('refreshToken')
        // Retourner un succès partiel au lieu d'une erreur
        res.status(200).json({ message: 'Partial logout successful (error occurred)' })
    }
}

/**
 * Verifies a user's email address
 * @async
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next middleware function
 */
export const verifyEmail = async (req, res, next) => {
    try {
        const { token } = req.params
        const result = await authService.verifyEmail(token)

        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

/**
 * Requests a password reset email
 * @async
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next middleware function
 */
export const requestPasswordReset = async (req, res, next) => {
    try {
        const { email } = req.body
        const result = await authService.requestPasswordReset(email)

        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

/**
 * Resets a user's password using a token
 * @async
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next middleware function
 */
export const resetPassword = async (req, res, next) => {
    try {
        const { token, newPassword } = req.body
        const result = await authService.resetPassword(token, newPassword)

        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}
