import { body } from 'express-validator'
import { validateRequired, validateLength, validateEmail } from './common.js'

export const validateCreateUser = [
    // First name validation
    validateRequired('firstname', 'Le prénom est requis!'),
    validateLength('firstname', 2, null, {
        min: 'Le prénom doit contenir au moins 2 caractères',
    }),

    // Last name validation
    validateRequired('lastname', 'Le nom est requis!'),
    validateLength('lastname', 2, null, {
        min: 'Le nom doit contenir au moins 2 caractères',
    }),

    // Email validation
    ...validateEmail({
        field: 'email', // optional, defaults to 'email'
        minLength: 6, // optional, defaults to 6
        messages: {
            required: "L'email est requis!",
            format: 'Format email invalide',
            unique: 'Cet email existe déjà',
            length: "L'email doit contenir au moins 6 caractères",
        },
    }),

    // Password validation
    validateRequired('password', 'Le mot de passe est requis!'),
    validateLength('password', 6, null, {
        min: 'Le mot de passe doit contenir au moins 6 caractères',
    }),

    // Role validation
    body('role').optional().isIn(['ADMIN', 'AUTHOR', 'READER']).withMessage('Role invalide'),
]

// Create a factory function for update validation
export const createUpdateUserValidator = (userId) => [
    validateLength('firstname', 2, null, {
        min: 'Le prénom doit contenir au moins 2 caractères',
    }).optional(),

    validateLength('lastname', 2, null, {
        min: 'Le nom doit contenir au moins 2 caractères',
    }).optional(),

    ...validateEmail({
        field: 'email',
        minLength: 6,
        skipId: userId, // Important! This excludes current user from unique check
        isOptional: true,
        messages: {
            format: 'Format email invalide',
            unique: 'Cet email existe déjà',
            length: "L'email doit contenir au moins 6 caractères",
        },
    }),

    validateLength('password', 6, null, {
        min: 'Le mot de passe doit contenir au moins 6 caractères',
    }).optional(),

    body('role').optional().isIn(['ADMIN', 'AUTHOR', 'READER']).withMessage('Role invalide'),
]
