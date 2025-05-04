import { getAllUsers, getUserById, createUser, updateUser, deleteUserAndPosts } from '../services/userService.js'
import { userResource, userCollection } from '../resources/users/userResource.js'
import { ApiError } from '../utils/errors.js'
import { sessionService } from '../services/sessionService.js'

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 * @typedef {import('@prisma/client').User} User
 *
 * @typedef {Object} PaginationQuery
 * @property {string} [page='1']
 * @property {string} [limit='10']
 * @property {string} [sortBy='id']
 * @property {string} [sortOrder='desc']
 * @property {string} [search='']
 *
 * @typedef {Object} UserCreateInput
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} email
 * @property {string} password
 * @property {string} [role]
 */

/**
 * Retrieves all users from the database
 * @async
 * @param {Request & { query: PaginationQuery }} req
 * @param {Response} res
 * @returns {Promise<void>}
 * @throws {ApiError}
 */
export async function getAll(req, res) {
    const { page = 1, limit = 10, sortBy = 'id', sortOrder = 'desc', search = '' } = req.query
    const { users, total } = await getAllUsers(parseInt(page), parseInt(limit), sortBy, sortOrder, search)
    const totalPages = Math.ceil(total / limit)
    console.log('Session data redis >>:', req.session)
    if (!users.length) {
        throw new ApiError(404, 'No users found')
    }

    res.status(200).json({
        data: userCollection(users),
        meta: {
            currentPage: parseInt(page),
            totalPages,
            totalItems: total,
            itemsPerPage: parseInt(limit),
            sortBy,
            sortOrder,
            search: search || null,
        },
    })
}

/**
 * Retrieves a single user by ID
 * @async
 * @param {Request & { params: { id: string } }} req
 * @param {Response} res
 * @returns {Promise<void>}
 * @throws {ApiError}
 */
export async function get(req, res) {
    const { id } = req.params
    console.log('Session data redis >>:', req.session)
    const user = await getUserById(id)

    if (!user) {
        throw new ApiError(404, 'User not found')
    }

    res.status(200).json(userResource(user))
}

/**
 * Creates a new user
 * @async
 * @param {Request & { body: UserCreateInput }} req
 * @param {Response} res
 * @returns {Promise<void>}
 * @throws {ApiError}
 */
export async function create(req, res) {
    const { firstname, lastname, email, password, role } = req.body
    const newUser = await createUser({
        firstname,
        lastname,
        email,
        password,
        role: role || 'READER',
    })

    res.status(201).json({
        message: 'User created successfully',
        data: userResource(newUser),
    })
}

/**
 * Updates an existing user
 * @async
 * @param {Request & { params: { id: string }, body: Partial<UserCreateInput> }} req
 * @param {Response} res
 * @returns {Promise<void>}
 * @throws {ApiError}
 */
export async function update(req, res, next) {
    try {
        const { id } = req.params
        const { firstname, lastname, email, password, role } = req.body
        // check if user connected was updated his profile
        const isOwnProfile = req.session?.id.toString() === id

        const updatedUser = await updateUser(id, {
            firstname,
            lastname,
            email,
            password,
            role,
        })

        if (!updatedUser) {
            throw new ApiError(404, 'User not found')
        }

        if (isOwnProfile) {
            const refreshToken = req.cookies?.refreshToken
            if (refreshToken) {
                await sessionService.updateSession(refreshToken, updatedUser)
            }
        }

        res.status(200).json({
            message: 'User updated successfully',
            data: userResource(updatedUser),
        })
    } catch (error) {
        console.error('Update user error:', error)
        next(error instanceof ApiError ? error : new ApiError(500, 'Update failed'))
    }
}

/**
 * Deletes a user and their associated posts
 * @async
 * @param {Request & { params: { id: string } }} req
 * @param {Response} res
 * @returns {Promise<void>}
 * @throws {ApiError}
 */
export async function remove(req, res) {
    const { id } = req.params
    const result = await deleteUserAndPosts(id)

    if (!result) {
        throw new ApiError(404, 'User not found')
    }

    res.status(200).json({
        message: 'User deleted successfully',
    })
}
