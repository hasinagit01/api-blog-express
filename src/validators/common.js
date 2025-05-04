// validators/common.js
import { body } from 'express-validator'
import prisma from '../config/database.js'

/**
 * Generic required field validator
 * @param {string} field - Field name
 * @param {string} message - Custom error message
 */
export const validateRequired = (field, message) => {
    return body(field)
        .notEmpty()
        .withMessage(message || `Le champ ${field} est requis`)
        .bail()
}

/**
 * String length validator
 * @param {string} field - Field name
 * @param {number} min - Minimum length
 * @param {number} max - Maximum length (optional)
 * @param {Object} messages - Custom error messages
 */
export const validateLength = (field, min, max = null, messages = {}) => {
    let validator = body(field)
        .isLength({ min })
        .withMessage(messages.min || `${field} doit contenir au moins ${min} caractères`)

    if (max !== null) {
        validator = validator
            .isLength({ max })
            .withMessage(messages.max || `${field} doit contenir au maximum ${max} caractères`)
    }
    return validator
}

/**
 * Validates email with required check, format, uniqueness and length
 * @param {Object} options - Validation options
 * @param {string} options.field - Field name (defaults to 'email')
 * @param {number} options.minLength - Minimum length (defaults to 6)
 * @param {Object} options.messages - Custom error messages
 * @param {string} options.messages.required - Custom required message
 * @param {string} options.messages.format - Custom format message
 * @param {string} options.messages.unique - Custom unique message
 * @param {string} options.messages.length - Custom length message
 * @param {string|number} options.skipId - ID to skip for updates
 * @returns {import('express-validator').ValidationChain[]} Array of validation chains
 */
export const validateEmail = (options = {}) => {
    const { field = 'email', minLength = 6, messages = {}, skipId = null, isOptional = false } = options

    const validator = body(field)

    if (isOptional) {
        validator.optional()
    } else {
        validator.notEmpty().withMessage(messages.required || "L'email est requis!")
    }

    return [
        validator
            .bail()
            .isEmail()
            .withMessage(messages.format || 'Format email invalide')
            .bail()
            .isLength({ min: minLength })
            .withMessage(messages.length || `L'email doit contenir au moins ${minLength} caractères`)
            .bail()
            .custom(async (value) => {
                if (!value) return true

                try {
                    const where = {
                        email: value,
                        ...(skipId && { NOT: { id: parseInt(skipId) } }),
                    }

                    const existingUser = await prisma.user.findFirst({ where })
                    if (existingUser) {
                        throw new Error(messages.unique || 'Cet email existe déjà')
                    }

                    return true
                } catch (error) {
                    console.error('Email validation error:', error)
                    throw new Error(error.message || "Erreur lors de la validation de l'email")
                }
            }),
    ]
}

/**
 * Generic validator for checking if a record exists by a field value
 * @param {string} model - Prisma model name (e.g. 'user', 'category')
 * @param {string} field - Field to check
 * @param {string} errorMessage - Custom error message
 * @param {string|number} skipId - ID to skip (for updates)
 * @returns {Function} Express validator middleware
 */
export const validateExists = (model, field = 'id', errorMessage = null, skipId = null) => {
    return async (value) => {
        if (!value) return true

        const where = {
            [field]: typeof value === 'string' ? value : parseInt(value),
        }

        // Add NOT condition for updates
        if (skipId) {
            where.NOT = {
                id: typeof skipId === 'string' ? parseInt(skipId) : skipId,
            }
        }

        const record = await prisma[model].findUnique({
            where,
            select: { id: true },
        })

        if (!record) {
            throw new Error(errorMessage || `${model} non trouvé`)
        }

        return true
    }
}

/**
 * Validate integer field
 * @param {string} field - Field name
 * @param {Object} options - Validation options
 * @param {number} options.min - Minimum value
 * @param {number} options.max - Maximum value
 * @param {string} options.message - Custom error message
 * @param {string} options.minMessage - Custom min error message
 * @param {string} options.maxMessage - Custom max error message
 */
export const validateInteger = (field, options = {}) => {
    let validator = body(field)
        .toInt() // Convert string to integer before validation
        .isInt(options)
        .withMessage(options.message || `Le champ ${field} doit être un nombre entier`)

    if (options.min !== undefined) {
        validator = validator
            .isInt({ min: options.min })
            .withMessage(options.minMessage || `${field} doit être supérieur à ${options.min}`)
    }

    if (options.max !== undefined) {
        validator = validator
            .isInt({ max: options.max })
            .withMessage(options.maxMessage || `${field} doit être inférieur à ${options.max}`)
    }

    return validator
}
