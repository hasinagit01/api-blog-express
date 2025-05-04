import multer from 'multer'
import { uploadService } from '../services/uploadService.js'
import { ApiError } from '../utils/errors.js'

/**
 * Create upload middleware with specific configuration
 * @param {Object} options - Upload configuration options
 */
export const createUploadMiddleware = (options = {}) => {
    const upload = uploadService.createStorage(options)

    return (req, res, next) => {
        // Pre-upload debugging
        console.log('Request details:', {
            method: req.method,
            contentType: req.headers['content-type'],
            hasBody: !!req.body,
            formFields: req.body,
        })

        upload.single('image')(req, res, async (err) => {
            // Post-upload debugging
            console.log('Upload attempt details:', {
                hasFile: !!req.file,
                fileDetails: req.file
                    ? {
                        fieldname: req.file.fieldname,
                        originalname: req.file.originalname,
                        mimetype: req.file.mimetype,
                        size: req.file.size,
                        path: req.file.path,
                    }
                    : null,
                error: err?.message || 'No error',
            })

            if (err instanceof multer.MulterError) {
                return next(new ApiError(400, `Upload error: ${err.message}`))
            }

            if (err) {
                return next(new ApiError(400, `Upload error: ${err.message}`))
            }

            if (!req.file) {
                return next()
            }

            next()
        })
    }
}
