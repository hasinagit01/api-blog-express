import { getAllPosts, getPostById, createPost, updatePost, deletePostAndRelations } from '../services/postService.js'
import { postResource, postCollection } from '../resources/posts/postResource.js'
import { ApiError } from '../utils/errors.js'
import { uploadService } from '../services/uploadService.js'
import path from 'path'

export default {
    /**
     * Retrieves all posts from the database
     * @async
     * @param {import('express').Request} _req - Express request object (unused)
     * @param {import('express').Response} res - Express response object
     * @returns {Promise<void>} - Returns a promise that resolves when posts are retrieved
     * @throws {Error} - If there's an error retrieving posts or if no posts are found
     */
    async getAll(req, res) {
        const posts = await getAllPosts()
        // Session data is available on req.session
        console.log('Session data on post:', req.session)
        if (!posts.length) {
            throw new ApiError(404, 'No posts found')
        }

        res.status(200).json(postCollection(posts))
    },

    /**
     * Retrieves a single post by ID
     * @async
     * @param {import('express').Request} req - Express request object with post ID in params
     * @param {import('express').Response} res - Express response object
     * @returns {Promise<void>} - Returns a promise that resolves when post is retrieved
     * @throws {Error} - If there's an error retrieving the post or if post is not found
     */
    async get(req, res) {
        const { id } = req.params
        const post = await getPostById(id)

        if (!post) {
            throw new ApiError(404, 'Post not found')
        }

        res.status(200).json(postResource(post))
    },

    /**
     * Creates a new post
     * @async
     * @param {import('express').Request} req - Express request object with post data in body
     * @param {import('express').Response} res - Express response object
     * @returns {Promise<void>} - Returns a promise that resolves when post is created
     * @throws {Error} - If there's an error creating the post
     */
    async create(req, res) {
        const { title, content, description, status, userId, categoryId } = req.body
        console.log('Controller received file:', req.file)

        // Handle file upload
        let imageUrl = null
        if (req.file) {
            console.log('Processing image...')
            console.log('File path:', req.file.path)
            const processedImage = await uploadService.processImage(req.file)
            imageUrl = `/uploads/posts/${path.basename(processedImage)}`
            console.log('Generated imageUrl:', imageUrl)
        }

        const newPost = await createPost({
            title,
            content,
            description,
            imageUrl,
            status: status || 'DRAFT',
            userId: parseInt(userId),
            categoryId: categoryId ? parseInt(categoryId) : null,
            views: 0,
        }).catch(async (error) => {
            // Cleanup uploaded file if post creation fails
            if (imageUrl) {
                await uploadService.deleteFile(req.file.processedPath)
            }
            throw error
        })

        res.status(201).json({
            message: 'Post created successfully',
            data: postResource(newPost),
        })
    },

    /**
     * Updates an existing post
     * @async
     * @param {import('express').Request} req - Express request object with post ID in params and updated data in body
     * @param {import('express').Response} res - Express response object
     * @returns {Promise<void>} - Returns a promise that resolves when post is updated
     * @throws {Error} - If there's an error updating the post or if post is not found
     */
    async update(req, res) {
        const { id } = req.params
        const { title, content, description, imageUrl, status, categoryId } = req.body

        const updatedPost = await updatePost(id, {
            title,
            content,
            description,
            imageUrl,
            status,
            categoryId: categoryId ? parseInt(categoryId) : null,
        })

        if (!updatedPost) {
            throw new ApiError(404, 'Post not found')
        }

        res.status(200).json({
            message: 'Post updated successfully',
            data: postResource(updatedPost),
        })
    },

    /**
     * Deletes a post and its associated comments and likes
     * @async
     * @param {import('express').Request} req - Express request object with post ID in params
     * @param {import('express').Response} res - Express response object
     * @returns {Promise<void>} - Returns a promise that resolves when post and its relations are deleted
     * @throws {Error} - If there's an error deleting the post or if post is not found
     */
    async delete(req, res) {
        const { id } = req.params
        const result = await deletePostAndRelations(id)

        if (!result) {
            throw new ApiError(404, 'Post not found')
        }

        // If the post had an image, delete it
        if (result.imageUrl) {
            try {
                const imagePath = result.imageUrl.replace('/uploads/', '')
                await uploadService.deleteFile(`uploads/${imagePath}`)
            } catch (error) {
                console.error('Error deleting image:', error)
            }
        }

        res.status(200).json({
            message: 'Post deleted successfully',
        })
    },
}
