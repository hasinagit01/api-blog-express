import { config } from './config/env.js'
import { createApp } from './config/expressConfig.js'
import { gracefulShutdown } from './utils/shutdown.js'
import redisClient from './config/redisConfig.js'

const startServer = async () => {
    let httpServer = null

    try {
        // Ensure Redis is connected before starting server
        if (!redisClient.isReady) {
            await redisClient.connect()
        }

        // Test Redis connection
        await redisClient.ping()
        console.log('✅ Redis connection verified')

        const app = await createApp()

        app.listen(config.port, () => {
            console.log(`
                    🚀 Server running:
                    - Port: ${config.port}
                    - Mode: ${config.env}
                    - Redis: Connected
            `)
        })

        // Enhanced shutdown handling
        const shutdown = gracefulShutdown(httpServer, {
            redis: redisClient,
            timeout: 10000, // 10 seconds timeout
        })

        // Handle process signals
        process.on('SIGTERM', shutdown)
        process.on('SIGINT', shutdown)
        process.on('uncaughtException', (error) => {
            console.error('Uncaught Exception:', error)
            shutdown()
        })
    } catch (error) {
        console.error('Fatal error during startup:', error)
        if (httpServer) httpServer.close()
        await redisClient.quit()
        process.exit(1)
    }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason)
    // Let the process exit naturally to allow cleanup
})

startServer()
