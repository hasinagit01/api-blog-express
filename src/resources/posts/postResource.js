/**
 * Transforms post data by formatting associated data
 * @param {Object} post - The post object containing post information and relations
 * @returns {Object} Formatted post data object
 */
export function postResource(post) {
    return {
        id: post.id,
        title: post.title,
        content: post.content,
        description: post.description,
        imageUrl: post.imageUrl,
        status: post.status,
        views: post.views,
        userId: post.userId,
        categoryId: post.categoryId,
        user: post.user
            ? {
                id: post.user.id,
                firstname: post.user.firstname,
                lastname: post.user.lastname,
                email: post.user.email,
                role: post.user.role,
            }
            : null,
        category: post.category
            ? {
                id: post.category.id,
                name: post.category.name,
            }
            : null,
        commentsCount: post.comments?.length || 0,
        comments:
            post.comments?.map((comment) => ({
                id: comment.id,
                content: comment.content,
                userId: comment.userId,
                createdAt: comment.createdAt,
            })) || [],
        likesCount: post.likes?.length || 0,
        likes:
            post.likes?.map((like) => ({
                id: like.id,
                userId: like.userId,
                createdAt: like.createdAt,
            })) || [],
        tags:
            post.postTags?.map((postTag) => ({
                id: postTag.tag.id,
                name: postTag.tag.name,
            })) || [],
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
    }
}

/**
 * Maps an array of posts through the postResource function
 * @param {Array} posts - Array of post objects to be processed
 * @returns {Object} Object containing transformed array of post objects
 */
export function postCollection(posts) {
    return {
        data: posts.map((post) => postResource(post)),
    }
}
