import bcrypt from 'bcrypt'
import prisma from '../config/database.js'
const { user: User, post: Post, like: Like, comment: Comment } = prisma

/**
 * @description Get all users from database with pagination
 * @param {number} [page=1] - Page number for pagination
 * @param {number} [limit=10] - Number of items per page
 * @returns {Promise<Object>} Object containing users array and total count
 * @returns {Array} .users - Array of user objects with their posts, comments and likes
 * @returns {number} .total - Total number of users in database
 */
export const getAllUsers = async (page = 1, limit = 10, sortBy = 'id', sortOrder = 'desc', search = '') => {
    const skip = (page - 1) * limit
    // construct object for sorting
    const orderBy = { [sortBy]: sortOrder.toLowerCase() }
    // construct object for searching
    const where = search
        ? {
            OR: [
                { firstname: { contains: search.toLowerCase() } },
                { lastname: { contains: search.toLowerCase() } },
                { email: { contains: search.toLowerCase() } },
            ],
        }
        : {}
    const users = await User.findMany({
        include: {
            posts: true,
            comments: true,
            likes: true,
        },
        orderBy,
        skip,
        take: limit,
        where,
    })
    const total = await User.count({ where })
    return { users, total }
}

/**
 * @description Get user by Id from database
 * @returns {Promise<Array>} user
 */
export const getUserById = (id) => {
    return User.findUnique({
        where: { id: parseInt(id) },
        include: {
            posts: true,
            comments: true,
            likes: true,
        },
    })
}

/**
 * @description Create a new user
 * @param {object} data - User data
 * @returns {Promise<Object>} Created user
 */
export const createUser = async (data) => {
    // Hash password avec un salt de 10 rounds
    const hashedPassword = await bcrypt.hash(data.password, 10)
    return User.create({
        data: {
            ...data,
            password: hashedPassword,
        },
    })
}

/**
 * @description Update user by ID
 * @param {number} id - User ID
 * @param {Object} data Update data
 */
export const updateUser = async (id, data) => {
    const updateData = { ...data }
    if (data.password) {
        updateData.password = await bcrypt.hash(data.password, 10)
    }
    return User.update({
        where: { id: parseInt(id) },
        data: updateData,
    })
}

/**
 * @description Delete user and associated posts
 * @param {number} id - User ID
 */
export const deleteUserAndPosts = async (id) => {
    const userId = parseInt(id)
    // Delete related records first
    await Like.deleteMany({ where: { userId } })
    await Comment.deleteMany({ where: { userId } })
    await Post.deleteMany({ where: { userId } })

    return User.delete({
        where: { id: userId },
    })
}
