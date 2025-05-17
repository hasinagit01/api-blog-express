import { ApiError } from '../utils/errors.js'
import  prisma  from '../config/database.js'

/**
 * Generic middleware to check if the user is the owner of a resource
 * @param {string} resourceType - Type of resource (post, comment, etc.)
 * @param {string} idParam - Name of the route parameter containing the resource ID (default: 'id')
 * @returns {function} Middleware function
 */
export const isResourceOwner = (resourceType, idParam = 'id') => {
    return async (req, res, next) => {
        try {
            const resourceId = parseInt(req.params[idParam])
            const userId = req.user?.id

            if (!resourceId || !userId) {
                throw new ApiError(403, 'Unauthorized access')
            }

            let resource

            switch (resourceType) {
            case 'post':
                resource = await prisma.post.findUnique({
                    where: { id: resourceId },
                })
                break
            case 'comment':
                resource = await prisma.comment.findUnique({
                    where: { id: resourceId },
                })
                break
            // Add other resource types as needed
            default:
                throw new ApiError(500, `Invalid resource type: ${resourceType}`)
            }

            if (!resource) {
                throw new ApiError(404, `${resourceType} not found`)
            }

            if (resource.userId !== userId) {
                throw new ApiError(403, `You can only modify your own ${resourceType}`)
            }

            // Attached resource to the request to avoid a second query
            req[resourceType] = resource
            next()
        } catch (error) {
            next(error)
        }
    }
}
