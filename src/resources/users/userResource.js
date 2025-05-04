/**
 * Transforms user data by removing sensitive information and formatting associated posts
 * @param {Object} user - The user object containing user information and posts
 * @param {string} user.password - The user's password (will be excluded from output)
 * @param {Array<Object>} [user.posts] - Array of posts associated with the user
 * @param {number} user.posts[].id - The ID of each post
 * @param {string} user.posts[].title - The title of each post
 * @param {string} user.posts[].content - The content of each post
 * @returns {Object} Sanitized user data object with formatted posts array
 */
export function userResource(user) {
    const { password: _, ...userData } = user
    return {
        ...userData,
        postsCount: user.posts?.length || 0,
        posts:
            user.posts?.map((post) => ({
                id: post.id,
                title: post.title,
                content: post.content,
                status: post.status,
                createdAt: post.createdAt,
            })) || [],
        commentsCount: user.comments?.length || 0,
        comments:
            user.comments?.map((comment) => ({
                id: comment.id,
                content: comment.content,
                createdAt: comment.createdAt,
                postId: comment.postId,
            })) || [],
        likesCount: user.likes?.length || 0,
        likes:
            user.likes?.map((like) => ({
                id: like.id,
                postId: like.postId,
                createdAt: like.createdAt,
            })) || [],
    }
}

/**
 * Maps an array of users through the userResource function
 * @param {Array} users - Array of user objects to be processed
 * @returns {Array} Transformed array of user objects after applying userResource
 */
export function userCollection(users) {
    console.log('users from userCollection:', users)
    return users.map(userResource)
}
