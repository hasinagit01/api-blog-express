import prisma from '../config/database.js'

const { post: Post, comment: Comment, like: Like, postTag: PostTag } = prisma

/**
 * @description Get all posts from database
 * @returns {Promise<Array>} List of posts
 */
export const getAllPosts = async () => {
    return Post.findMany({
        include: {
            user: true,
            comments: true,
            likes: true,
            category: true,
            postTags: {
                include: {
                    tag: true,
                },
            },
        },
    })
}

/**
 * @description Get post by Id
 * @param {number} id - Post ID
 * @returns {Promise<Object>} post
 */
export const getPostById = (id) => {
    return Post.findUnique({
        where: { id: parseInt(id) },
        include: {
            user: true,
            comments: true,
            likes: true,
            category: true,
            postTags: {
                include: {
                    tag: true,
                },
            },
        },
    })
}

/**
 * @description Create a new post
 * @param {object} data - Post data
 * @returns {Promise<Object>} Created post
 */
export const createPost = async (data) => {
    return Post.create({
        data: {
            ...data,
            status: data.status || 'DRAFT',
        },
        include: {
            user: true,
            category: true,
            postTags: {
                include: {
                    tag: true,
                },
            },
        },
    })
}

/**
 * @description Update post by ID
 * @param {number} id - Post ID
 * @param {Object} data - Update data
 */
export const updatePost = async (id, data) => {
    return Post.update({
        where: { id: parseInt(id) },
        data,
        include: {
            user: true,
            comments: true,
            likes: true,
            category: true,
            postTags: {
                include: {
                    tag: true,
                },
            },
        },
    })
}

/**
 * @description Delete post and associated comments and likes
 * @param {number} id - Post ID
 */
export const deletePostAndRelations = async (id) => {
    const postId = parseInt(id)

    // Get post to check for image
    const post = await Post.findUnique({
        where: { id: postId },
        select: { imageUrl: true },
    })
    if (!post) {
        return null
    }
    // Delete related records first
    await Like.deleteMany({ where: { postId } })
    await Comment.deleteMany({ where: { postId } })
    await PostTag.deleteMany({ where: { postId } })

    const deletePost = await Post.delete({
        where: { id: postId },
    })
    return {
        post: deletePost,
        imageUrl: post.imageUrl,
    }
}
