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
    // Configuration Redis pour BullMQ
    redis: {
        url: process.env.REDIS_URL || 'redis://redis:6379',
        host: process.env.REDIS_HOST || 'redis',
        port: parseInt(process.env.REDIS_PORT || '6379'),
        sessionTtl: parseInt(process.env.REDIS_SESSION_TTL || '604800'),
    },
    // Configuration Email
    email: {
        host: process.env.SMTP_HOST || 'smtp.mailtrap.io',
        port: parseInt(process.env.SMTP_PORT || '2525'),
        secure: process.env.SMTP_SECURE === 'true',
        user: process.env.SMTP_USER || '',
        password: process.env.SMTP_PASS || '',
        from: process.env.EMAIL_FROM || 'no-reply@yourapp.com',
        queueName: process.env.EMAIL_QUEUE_NAME || 'email',
    },
    // URL du frontend pour les liens dans les emails
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3636',
    // API URL
    apiUrl: process.env.API_URL || 'http://localhost:9999/api',
    // API prefix
    apiPrefix: process.env.API_PREFIX || '/api',
}
