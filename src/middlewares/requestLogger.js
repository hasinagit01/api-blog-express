export const requestLogger = (req, res, next) => {
    const start = Date.now()
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} started`)

    res.on('finish', () => {
        const duration = Date.now() - start
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} completed in ${duration}ms`)
    })

    next()
}
