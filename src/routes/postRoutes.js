import express from 'express'
import { createUploadMiddleware } from '../middlewares/uploadMiddleware.js'
import { validateMiddleware } from '../middlewares/validateMiddleware.js'
import { validateCreatePost, validateUpdatePost } from '../validators/postValidators.js'
import { postController } from '../controllers/indexController.js'
import { mimeTypes } from '../constants/mimeTypes.js'
import { maxSize as defaultMaxSize } from '../constants/fileSizes.js'

const router = express.Router()

// Configuration de l'upload pour les posts
const postImageUpload = createUploadMiddleware({
    type: 'posts',
    maxSize: defaultMaxSize,
    allowedTypes: mimeTypes,
})

router.post('/', postImageUpload, validateCreatePost, validateMiddleware, postController.create)

router.get('/', postController.getAll)
router.get('/:id', postController.get)
router.put('/:id', postImageUpload, validateUpdatePost, validateMiddleware, postController.update)
router.delete('/:id', postController.delete)

export default router
