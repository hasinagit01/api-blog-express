import dotenv from 'dotenv'

// Initialize dotenv
dotenv.config()

/**
 * Application configuration
 * @type {Object}
 */
export const config = {
    port: process.env.SERVER_PORT || 9999,
    env: process.env.NODE_ENV || 'development',
    cors: {
        origin: process.env.CORS_ORIGIN || '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Added OPTIONS for preflight
        headers: ['Origin', 'X-Requested-With', 'Content', 'Accept', 'Content-Type', 'Authorization'],
    },
}
