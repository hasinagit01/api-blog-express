export const gracefulShutdown = (server) => {
    return () => {
        console.log('Shutting down gracefully...')
        server.close(() => {
            console.log('Server closed')
            process.exit(0)
        })

        // eslint-disable-next-line no-undef
        setTimeout(() => {
            console.error('Force shutdown after timeout')
            process.exit(1)
        }, 5000)
    }
}
