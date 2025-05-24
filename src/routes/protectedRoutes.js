import express from 'express'
import { verifyToken } from '../middlewares/authMiddleware.js'
import { createUploadMiddleware } from '../middlewares/uploadMiddleware.js'
import { validateMiddleware, validateUpdate } from '../middlewares/validateMiddleware.js'
import { validateCreatePost, validateUpdatePost } from '../validators/postValidators.js'
import {  createUpdateUserValidator } from '../validators/userValidators.js'
import { postController, userController } from '../controllers/indexController.js'
import { postPermissions } from '../middlewares/postPermissionsMiddleware.js'
import { mimeTypes } from '../constants/mimeTypes.js'
import { maxSize as defaultMaxSize } from '../constants/fileSizes.js'

const router = express.Router()

// Middleware d'authentification pour toutes les routes protégées
router.use(verifyToken)

// Configuration de l'upload pour les posts
const postImageUpload = createUploadMiddleware({
    type: 'posts',
    fieldName: 'postImage', 
    maxSize: defaultMaxSize,
    allowedTypes: mimeTypes,
})

// Post routes - create, update, delete (protégées)
router.post(
    '/post',
    postPermissions.canCreate,
    postImageUpload,
    validateCreatePost,
    validateMiddleware,
    postController.create
)

router.put(
    '/post/:id',
    postPermissions.canEdit,
    postImageUpload,
    validateUpdatePost,
    validateMiddleware,
    postController.update
)

router.delete('/post/:id', postPermissions.canDelete, postController.delete)

// User routes (except creation which is public)
router.get('/user', userController.getAll)
router.get('/user/:id', userController.get)
router.put('/user/:id', validateUpdate(createUpdateUserValidator), validateMiddleware, userController.update)
router.delete('/user/:id', userController.remove)

export default router
