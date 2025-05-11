import multer from 'multer'
import sharp from 'sharp'
import { v4 as uuidv4 } from 'uuid'
import path from 'path'
import fs from 'fs/promises'
import { ApiError } from '../utils/errors.js'
import { existsSync, mkdirSync } from 'fs'
import { mimeTypes } from '../constants/mimeTypes.js'
import { maxSize as defaultMaxSize } from '../constants/fileSizes.js'

const UPLOAD_DIRS = {
    posts: 'uploads/posts',
    default: 'uploads/images',
}

/**
 * Configure storage options for different upload types
 * @param {Object} options - Configuration options
 * @param {string} options.type - Type of upload (posts, avatars, etc.)
 * @param {Object} options.allowedTypes - Allowed MIME types
 * @param {number} options.maxSize - Max file size in bytes
 * @returns {Object} Multer storage configuration
 */
const createStorage = (options = {}) => {
    const { type = 'default', allowedTypes = mimeTypes, maxSize = defaultMaxSize } = options

    const destination = UPLOAD_DIRS[type] || UPLOAD_DIRS.default

    // Ensure upload directory exists
    if (!existsSync(destination)) {
        mkdirSync(destination, { recursive: true })
    }

    return multer({
        storage: multer.diskStorage({
            destination: (_req, _file, cb) => {
                cb(null, destination)
            },
            filename: (_req, file, cb) => {
                const extension = allowedTypes[file.mimetype]
                cb(null, `${uuidv4()}.${extension}`)
            },
        }),
        fileFilter: (_req, file, cb) => {
            if (allowedTypes[file.mimetype]) {
                cb(null, true)
            } else {
                cb(new ApiError(400, 'Extension format not supported'))
            }
        },
        limits: {
            fileSize: maxSize,
        },
    })
}

/**
 * Process uploaded image
 * @param {Object} options - Image processing options
 */
const processImage = async (file, options = {}) => {
    const { width = 800, height = 800, quality = 80, format = 'webp' } = options

    const originalPath = file.path
    const filename = path.parse(file.filename).name
    const outputPath = path.join(path.dirname(file.path), `${filename}.${format}`)

    try {
        await sharp(originalPath)
            .resize(width, height, {
                fit: 'inside',
                withoutEnlargement: true,
            })
            .toFormat(format, { quality })
            .toFile(outputPath)

        // Supprimer le fichier original si le format a changé
        if (outputPath !== originalPath) {
            await fs.unlink(originalPath)
        }

        return outputPath
        // eslint-disable-next-line no-unused-vars
    } catch (error) {
        throw new ApiError(500, 'Treatment image on error')
    }
}

/**
 * Delete file
 * @param {string} filePath - Path to file to delete
 */
const deleteFile = async (filePath) => {
    try {
        await fs.unlink(filePath)
    } catch (error) {
        console.error(`Error deleting file ${filePath}:`, error)
    }
}

export const uploadService = {
    createStorage,
    processImage,
    deleteFile,
}
