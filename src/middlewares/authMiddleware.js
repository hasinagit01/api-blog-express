import jwt from 'jsonwebtoken'
import { ApiError } from '../utils/errors.js'
import authConfig from '../config/authConfig.js'
import { getSessionData } from '../utils/sessionUtils.js'
import { sessionService } from '../services/sessionService.js'

/**
 * Verify JWT token and session
 * @description This middleware verifies the JWT token provided in the Authorization header.
 * It checks if the token is valid and if the session associated with it is still active.
 * If the token is valid and the session is active, it attaches the user data to the request object.
 * If the token is invalid or the session is inactive, it throws an error.
 * @example
 * // Middleware usage
 * app.get('/protected', verifyToken, (req, res) => {
 *    // Access protected route
 *    res.status(200).json({ message: 'Protected route accessed' })
 * })
 * @param {Object} req - The request object
 * @param {Object} _res - The response object
 * @param {Function} next - The next middleware function
 * @returns {Function} - The next middleware function
 */
export const verifyToken = async (req, _res, next) => {
    try {
        console.log('\n=== Auth Verification ===')

        // Check Authorization header
        const authHeader = req.headers['authorization']
        const token = authHeader?.split(' ')[1]
        if (!token) {
            throw new ApiError(401, 'No access token provided')
        }
        // Vérifier si le token est dans la liste noire
        const isBlacklisted = await sessionService.isTokenBlacklisted(token)
        if (isBlacklisted) {
            throw new ApiError(401, 'Token has been revoked')
        }
        // Check refresh token and session
        const sessionData = await getSessionData(req)
        if (!sessionData) {
            throw new ApiError(401, 'Session expired or invalid')
        }

        // Verify JWT
        const decoded = jwt.verify(token, authConfig.secret)

        // Verify session match
        if (decoded.id !== sessionData.id) {
            throw new ApiError(401, 'Session mismatch')
        }

        // Attach data to request
        req.session = sessionData
        req.user = decoded

        next()
    } catch (error) {
        console.error('Auth error:', error)
        next(error instanceof ApiError ? error : new ApiError(401, 'Session expired or invalid'))
    }
}

/**
 * Verify logout request
 * @description This middleware checks for the presence of a refresh token in the request cookies.
 * If the refresh token is present, it retrieves the session data without verifying the JWT.
 * This is useful for logout operations where we want to invalidate the session without needing
 * to verify the JWT.
 * @example
 * // Middleware usage
 * app.post('/logout', verifyLogout, (req, res) => {
 *     // Perform logout operation
 *     res.clearCookie('refreshToken')
 *     res.status(200).json({ message: 'Logged out successfully' })
 * })
 * @param {Object} req - The request object
 * @param {Object} _res - The response object
 * @param {Function} next - The next middleware function
 * @returns {Function} - The next middleware function
 *
 */
export const verifyLogout = async (req, _res, next) => {
    try {
        // Only check for refresh token presence
        const refreshToken = req.cookies?.refreshToken
        if (!refreshToken) {
            throw new ApiError(401, 'No refresh token provided')
        }

        // Get session data without JWT verification
        const sessionData = await getSessionData(req)
        if (!sessionData) {
            throw new ApiError(401, 'Invalid session')
        }

        // Attach session data to request
        req.session = sessionData
        next()
    } catch (error) {
        console.error('Logout verification error:', error)
        next(error)
    }
}

/**
 * Authorize user roles
 * @description This middleware checks if the user's role is included in the allowed roles.
 * If the user's role is not included, it throws an error.
 * This is useful for protecting routes that require specific user roles.
 * @example
 * // Middleware usage
 * app.get('/admin', verifyToken, authorizeRoles('admin'), (req, res) => {
 *     // Access admin route
 *     res.status(200).json({ message: 'Admin route accessed' })
 * })
 * @param {Object}
 * @param {Object} req - The request object
 * @param {Object} _res - The response object
 * @param {Function} next - The next middleware function
 * @returns
 */
export const authorizeRoles = (...roles) => {
    return (req, _res, next) => {
        try {
            if (!req.user) {
                throw new ApiError(401, 'Authentication required')
            }

            if (!roles.includes(req.user.role)) {
                throw new ApiError(403, 'You do not have permission to access this resource')
            }

            next()
        } catch (error) {
            next(error)
        }
    }
}
