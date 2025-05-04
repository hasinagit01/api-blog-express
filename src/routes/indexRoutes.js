import { Router } from 'express'
import userRoutes from './userRoutes.js'
import postRoutes from './postRoutes.js'
import authRoutes from './authRoutes.js'
import { requestLogger } from '../middlewares/requestLogger.js'
import { ApiError } from '../utils/errors.js'

const router = Router()

// Add request logging
router.use(requestLogger)

// Base routes
router.use('/user', userRoutes)
router.use('/post', postRoutes)
router.use('/auth', authRoutes)

// 404 handler
router.use((req, res, next) => {
    next(new ApiError(404, `Route ${req.method} ${req.url} not found`))
})

// Error handler
router.use((err, req, res) => {
    console.error('Route error:', err)
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
        path: req.url,
        timestamp: new Date().toISOString(),
    })
})

export default router
