import { Router } from 'express'
import publicRoutes from './publicRoutes.js'
import protectedRoutes from './protectedRoutes.js'
import adminRoutes from './adminRoutes.js'
import { requestLogger } from '../middlewares/requestLogger.js'
import { ApiError } from '../utils/errors.js'

const router = Router()

// Add request logging
router.use(requestLogger)

// Organize routes by access level
router.use('/', publicRoutes) // Routes publiques
router.use('/', protectedRoutes) // Routes protégées (nécessite authentification)
router.use('/admin', adminRoutes) // Routes admin (nécessite authentification + rôle admin)

// 404 handler
router.use((req, _res, next) => {
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
