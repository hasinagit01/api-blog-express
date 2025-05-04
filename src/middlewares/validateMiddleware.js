import { validationResult } from 'express-validator'
import { ApiError } from '../utils/errors.js'

export const validateMiddleware = (req, _res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        throw new ApiError(400, 'Validation Error', errors.array())
    }
    next()
}

/**
 * Middleware to run validation factory and handle results
 * @param {Function} validationFactory - Factory function that returns validation chain
 */
export const validateUpdate = (validationFactory) => {
    return async (req, res, next) => {
        try {
            // Get validators using the ID from params
            const validators = validationFactory(req.params.id)

            // Run all validators
            await Promise.all(validators.map((validator) => validator.run(req)))

            // Check for validation errors
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                throw new ApiError(400, 'Validation Error', errors.array())
            }

            next()
        } catch (error) {
            next(error)
        }
    }
}
