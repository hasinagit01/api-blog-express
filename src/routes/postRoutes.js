import express from 'express'
import { createUploadMiddleware } from '../middlewares/uploadMiddleware.js'
import { validateMiddleware } from '../middlewares/validateMiddleware.js'
import { validateCreatePost, validateUpdatePost } from '../validators/postValidators.js'
import { postController } from '../controllers/indexController.js'
import { mimeTypes } from '../constants/mimeTypes.js'
import { maxSize as defaultMaxSize } from '../constants/fileSizes.js'
import { postPermissions } from '../middlewares/postPermissionsMiddleware.js'
import  { verifyToken } from '../middlewares/authMiddleware.js'

const router = express.Router()

// Configuration de l'upload pour les posts
const postImageUpload = createUploadMiddleware({
    type: 'posts',
    maxSize: defaultMaxSize,
    allowedTypes: mimeTypes,
})

// Toutes les routes nécessitent une authentification
router.use(verifyToken)

// Routes avec les permissions
// Création - seuls les admins et les auteurs peuvent créer
router.post('/', 
    postPermissions.canCreate, 
    postImageUpload, 
    validateCreatePost, validateMiddleware, 
    postController.create
)

// Lecture - tout le monde peut lire
router.get('/', 
    postPermissions.canRead, 
    postController.getAll
)

router.get('/:id', 
    postPermissions.canRead, 
    postController.get
)

// Mise à jour - seul l'auteur peut modifier (si pas de commentaires) ou admin
router.put('/:id', 
    postPermissions.canEdit, 
    postImageUpload, 
    validateUpdatePost, validateMiddleware, 
    postController.update
)

// Suppression - seul l'auteur ou admin peut supprimer
router.delete('/:id', 
    postPermissions.canDelete, 
    postController.delete
)

export default router
