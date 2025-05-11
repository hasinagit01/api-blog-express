import redisClient from '../config/redisConfig.js'

export const healthCheck = async (req, res) => {
    try {
        // Check Redis connection
        const redisStatus = redisClient.isReady ? 'connected' : 'disconnected'

        // Basic health response
        res.json({
            status: 'ok',
            timestamp: new Date().toISOString(),
            services: {
                redis: redisStatus,
            },
        })
    } catch (error) {
        console.error('Health check failed:', error)
        res.status(503).json({
            status: 'error',
            error: error.message,
        })
    }
}
