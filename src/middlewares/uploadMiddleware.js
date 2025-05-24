import multer from 'multer'
import { uploadService } from '../services/uploadService.js'
import { ApiError } from '../utils/errors.js'

/**
 * Create upload middleware with specific configuration
 * @param {Object} options - Upload configuration options
 */
export const createUploadMiddleware = (options = {}) => {
    const { fieldName = 'image', ...otherOptions } = options
    const upload = uploadService.createStorage(otherOptions)

    return (req, res, next) => {
        // Skip si ce n'est pas une requête multipart
        if (!req.headers['content-type'] || !req.headers['content-type'].includes('multipart/form-data')) {
            console.log("Pas une requête multipart/form-data, traitement d'upload ignoré")
            return next()
        }

        // Pre-upload debugging
        console.log('Request details:', {
            method: req.method,
            contentType: req.headers['content-type'],
            hasBody: !!req.body,
            formFields: req.body,
            expectedField: fieldName,
        })

        // Analyse supplémentaire pour le débogage
        if (req.headers['content-type'].includes('multipart/form-data')) {
            const boundary = req.headers['content-type'].split('boundary=')[1]
            console.log('Boundary de la requête:', boundary)
        }

        upload.single(fieldName)(req, res, async (err) => {
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
                // Gestion spécifique selon le type d'erreur Multer
                switch (err.code) {
                case 'LIMIT_UNEXPECTED_FILE':
                    return next(
                        new ApiError(
                            400,
                            `Erreur de champ: Un fichier a été envoyé sous le nom '${err.field}' mais nous attendions '${fieldName}'`
                        )
                    )

                case 'LIMIT_FILE_SIZE':
                    return next(
                        new ApiError(
                            400,
                            `Fichier trop volumineux: La taille maximale autorisée est ${options.maxSize ? (options.maxSize / (1024 * 1024)).toFixed(2) + 'MB' : 'dépassée'}`
                        )
                    )

                default:
                    return next(new ApiError(400, `Erreur d'upload: ${err.message}`))
                }
            }

            if (err) {
                return next(new ApiError(400, `Erreur d'upload: ${err.message}`))
            }

            // Si aucun fichier n'a été téléchargé, c'est OK, on continue
            if (!req.file) {
                console.log(`Aucun fichier téléchargé pour le champ '${fieldName}'. Continuons...`)
                return next()
            }

            next()
        })
    }
}
