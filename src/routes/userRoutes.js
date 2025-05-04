import express from 'express'
import { validateMiddleware, validateUpdate } from '../middlewares/validateMiddleware.js'
import { verifyToken } from '../middlewares/authMiddleware.js'
import { validateCreateUser, createUpdateUserValidator } from '../validators/userValidators.js'
import { userController } from '../controllers/indexController.js'

const router = express.Router()

// Routes public
router.post('/', validateCreateUser, validateMiddleware, userController.create)

// Routes protected
router.use(verifyToken) // Middleware of authentication for all these routes
router.get('/', userController.getAll)
router.get('/:id', userController.get)
router.put('/:id', validateUpdate(createUpdateUserValidator), validateMiddleware, userController.update)
router.delete('/:id', userController.remove)

export default router
