import { body, query } from 'express-validator'
import { validateRequired, validateLength, validateInteger, validateExists } from './common.js'

// Create post validation
export const validateCreatePost = [
    validateRequired('title', 'Le titre est requis!'),
    validateLength('title', 3, null, {
        min: 'Le titre doit contenir au moins 3 caractères',
    }),

    validateLength('content', 10, null, {
        min: 'Le contenu doit contenir au moins 10 caractères',
    }),

    validateLength('description', 10, null, {
        min: 'La description doit contenir au moins 10 caractères',
    }).optional(),

    body('imageUrl').optional().isURL().withMessage("L'URL de l'image n'est pas valide"),

    body('status').optional().isIn(['DRAFT', 'PUBLISHED']).withMessage('Statut invalide'),

    validateRequired('userId', "L'identifiant de l'utilisateur est requis!"),
    validateInteger('userId', {
        message: "L'identifiant de l'utilisateur doit être un nombre",
    }),
    body('userId').custom(validateExists('user', 'id', "L'utilisateur n'existe pas")),

    body('categoryId')
        .optional()
        .custom(
            validateInteger('categoryId', {
                message: 'La catégorie doit être un nombre',
            })
        )
        .bail()
        .custom(validateExists('category', 'id', "La catégorie n'existe pas")),
]

// Update post validation
export const validateUpdatePost = [
    validateLength('title', 3, null, {
        min: 'Le titre doit contenir au moins 3 caractères',
    }).optional(),

    validateLength('content', 10, null, {
        min: 'Le contenu doit contenir au moins 10 caractères',
    }).optional(),

    validateLength('description', 10, null, {
        min: 'La description doit contenir au moins 10 caractères',
    }).optional(),

    body('imageUrl').optional().isURL().withMessage("L'URL de l'image n'est pas valide"),

    body('status').optional().isIn(['DRAFT', 'PUBLISHED']).withMessage('Statut invalide'),

    body('categoryId')
        .optional()
        .custom(
            validateInteger('categoryId', {
                message: 'La catégorie doit être un nombre',
            })
        )
        .bail()
        .custom(validateExists('category', 'id', "La catégorie n'existe pas")),
]

// Pagination validation
export const validatePostPagination = [
    validateInteger('page', {
        min: 1,
        minMessage: 'La page doit être un nombre positif',
    }).optional(),

    validateInteger('limit', {
        min: 1,
        minMessage: 'La limite doit être un nombre positif',
    }).optional(),

    query('sortOrder').optional().isIn(['asc', 'desc']).withMessage("L'ordre de tri doit être 'asc' ou 'desc'"),

    query('status').optional().isIn(['DRAFT', 'PUBLISHED']).withMessage('Statut invalide'),
]
