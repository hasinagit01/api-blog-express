import jwt from 'jsonwebtoken'
import { ApiError } from '../utils/errors.js'
import authConfig from '../config/authConfig.js'
import { getSessionData } from '../utils/sessionUtils.js'

export const verifyToken = async (req, _res, next) => {
    try {
        console.log('\n=== Auth Verification ===')
        
        // Check Authorization header
        const authHeader = req.headers['authorization']
        const token = authHeader?.split(' ')[1]
        if (!token) {
            throw new ApiError(401, 'No access token provided')
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
        next(error instanceof ApiError ? error : new ApiError(401, 'Authentication failed'))
    }
}

// Add this new middleware
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

/* 
export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new ApiError(403, 'Unauthorized access')
        }
        next()
    }
} */
