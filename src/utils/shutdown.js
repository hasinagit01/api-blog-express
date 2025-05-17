export const gracefulShutdown = (server, { redis, emailWorker, timeout = 10000 } = {}) => {
    return async (signal) => {
        console.log(`\n${signal || 'Shutdown'} signal received. Starting graceful shutdown...`)

        // Set a timeout for the shutdown process
        // eslint-disable-next-line no-undef
        const forceExit = setTimeout(() => {
            console.error('Forcing exit after timeout')
            process.exit(1)
        }, timeout)

        try {
            // Close server first to stop accepting new connections
            if (server) {
                console.log('→ Closing HTTP server...')
                await new Promise((resolve) => server.close(resolve))
                console.log('✓ HTTP server closed')
            }

            // Close Bull queue worker if provided
            if (emailWorker) {
                console.log('→ Closing email worker...')
                await emailWorker.close()
                console.log('✓ Email worker closed')
            }

            // Close Redis connections if provided
            if (redis) {
                console.log('→ Closing Redis connection...')
                await redis.quit()
                console.log('✓ Redis connection closed')
            }

            console.log('Graceful shutdown completed')
            // eslint-disable-next-line no-undef
            clearTimeout(forceExit)
            process.exit(0)
        } catch (error) {
            console.error('Error during shutdown:', error)
            // eslint-disable-next-line no-undef
            clearTimeout(forceExit)
            process.exit(1)
        }
    }
}