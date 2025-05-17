import { Router } from 'express'
import * as authController from '../controllers/authController.js'
import { verifyLogout } from '../middlewares/authMiddleware.js'
import { validateCreateUser } from '../validators/userValidators.js'
import { validateMiddleware } from '../middlewares/validateMiddleware.js'
//import { requestLogger } from '../middlewares/requestLogger.js'

const router = Router()

// Add debug middleware
router.use((req, _res, next) => {
    console.log('Auth route hit:', {
        path: req.path,
        method: req.method,
        body: req.body,
    })
    next()
})

//router.use(requestLogger)
router.post('/login', authController.login)
router.post('/register', validateCreateUser, validateMiddleware, authController.register)
router.post('/refresh', authController.refresh)
router.post('/logout', verifyLogout, authController.logout)

router.get('/verify-email/:token', authController.verifyEmail)
router.post('/request-password-reset', authController.requestPasswordReset)
router.post('/reset-password', authController.resetPassword)

export default router
