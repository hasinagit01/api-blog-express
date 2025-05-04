import { config } from '../config/env.js'

/**
 * CORS middleware configuration
 * @param {import('express').Request} _req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next function
 */
export const corsMiddleware = (_req, res, next) => {
    try {
        // Set CORS headers
        res.setHeader('Access-Control-Allow-Origin', config.cors.origin)
        res.setHeader('Access-Control-Allow-Methods', config.cors.methods.join(', '))
        res.setHeader('Access-Control-Allow-Headers', config.cors.headers.join(', ')) // Fixed separator
        res.setHeader('Access-Control-Max-Age', '86400') // 24 hours caching for preflight

        next()
    } catch (error) {
        next(error)
    }
}
