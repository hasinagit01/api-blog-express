import express from 'express'
import authRoutes from './authRoutes.js'
import homeController from '../controllers/homeController.js'
import { postController, userController } from '../controllers/indexController.js'

const router = express.Router()

// Home route
router.get('/', homeController.getHomePage)

// Auth routes - public
router.use('/auth', authRoutes)

// Public Post routes - only read operations
router.get('/post', postController.getAll)
router.get('/post/:id', postController.get)

// User registration is public
router.post('/user', (req, res, next) => {
    // Rediriger vers la route de création d'utilisateur
    router.post('/user', userController.create)
    return router.handle(req, res, next)
})

export default router
