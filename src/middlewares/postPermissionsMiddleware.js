import { ApiError } from '../utils/errors.js'
import  prisma  from '../config/database.js'
import { authorizeRoles } from '../middlewares/authMiddleware.js'

/**
 * Check if user can edit a post (must be author and post must have no comments)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Next middleware function
 */
export const canEditPost = async (req, _res, next) => {
    try {
        // Si c'est un admin, autoriser sans vérification supplémentaire
        if (req.user?.role === 'ADMIN') {
            return next()
        }

        const postId = parseInt(req.params.id)

        // Vérifier que le post existe et récupérer le nombre de commentaires
        const post = await prisma.post.findUnique({
            where: { id: postId },
            include: {
                _count: {
                    select: { comments: true },
                },
            },
        })

        if (!post) {
            throw new ApiError(404, 'Post not found')
        }

        // Vérifier que l'utilisateur est l'auteur
        if (post.userId !== req.user.id) {
            throw new ApiError(403, 'You can only edit your own posts')
        }

        // Vérifier qu'il n'y a pas de commentaires
        if (post._count.comments > 0) {
            throw new ApiError(403, 'Cannot edit a post with comments')
        }

        // Stocker le post dans la requête pour éviter une seconde requête
        req.post = post
        next()
    } catch (error) {
        next(error)
    }
}

/**
 * Check if user can delete a post (must be author or admin)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Next middleware function
 */
export const canDeletePost = async (req, res, next) => {
    try {
        // Si c'est un admin, autoriser sans vérification supplémentaire
        if (req.user?.role === 'ADMIN') {
            return next()
        }

        const postId = parseInt(req.params.id)

        // Vérifier que le post existe
        const post = await prisma.post.findUnique({
            where: { id: postId },
        })

        if (!post) {
            throw new ApiError(404, 'Post not found')
        }

        // Vérifier que l'utilisateur est l'auteur
        if (post.userId !== req.user.id) {
            throw new ApiError(403, 'You can only delete your own posts')
        }

        // Stocker le post dans la requête pour éviter une seconde requête
        req.post = post
        next()
    } catch (error) {
        next(error)
    }
}

/**
 * Collection of post permission middlewares
 */
export const postPermissions = {
    canCreate: authorizeRoles('ADMIN', 'AUTHOR'),
    canRead: (_req, _res, next) => next(), // Tout le monde peut lire
    canEdit: canEditPost,
    canDelete: canDeletePost,
}
