import { body, param } from 'express-validator'

// Validators for email template creation
export const validateCreateTemplate = [
    body('name')
        .notEmpty()
        .withMessage('Le nom du template est requis')
        .isString()
        .withMessage('Le nom doit être une chaîne de caractères')
        .isLength({ min: 3 })
        .withMessage('Le nom doit contenir au moins 3 caractères'),

    body('subject')
        .notEmpty()
        .withMessage('Le sujet est requis')
        .isString()
        .withMessage('Le sujet doit être une chaîne de caractères'),

    body('htmlContent')
        .notEmpty()
        .withMessage('Le contenu HTML est requis')
        .isString()
        .withMessage('Le contenu HTML doit être une chaîne de caractères'),

    body('textContent').optional().isString().withMessage('Le contenu texte doit être une chaîne de caractères'),

    body('isActive').optional().isBoolean().withMessage('isActive doit être un booléen'),
]

// Create a factory function for update validation
export const createUpdateTemplateValidator = (templateId) => [
    // Validation du templateId dans la route
    param('id').custom(async (id, { _req }) => {
        // Vérifiez que l'ID fourni dans l'URL existe
        if (id !== templateId) {
            throw new Error('ID de template incohérent')
        }

        // Vous pourriez également vérifier l'existence du template dans la base de données
        // const template = await getTemplateById(id);
        // if (!template) {
        //    throw new Error('Template introuvable');
        // }

        return true
    }),
    body('name')
        .optional()
        .isString()
        .withMessage('Le nom doit être une chaîne de caractères')
        .isLength({ min: 3 })
        .withMessage('Le nom doit contenir au moins 3 caractères')
        .custom(async (name, { _req }) => {
            if (name) {
                // Vérifiez que le nouveau nom n'est pas déjà utilisé par un autre template
                // const existingTemplate = await getTemplateByName(name);
                // if (existingTemplate && existingTemplate.id !== parseInt(templateId)) {
                //    throw new Error('Ce nom de template est déjà utilisé');
                // }
            }
            return true
        }),

    body('subject').optional().isString().withMessage('Le sujet doit être une chaîne de caractères'),

    body('htmlContent').optional().isString().withMessage('Le contenu HTML doit être une chaîne de caractères'),

    body('textContent').optional().isString().withMessage('Le contenu texte doit être une chaîne de caractères'),

    body('isActive').optional().isBoolean().withMessage('isActive doit être un booléen'),
]

// Validator for sending email
export const validateSendEmail = [
    body('to')
        .notEmpty()
        .withMessage("L'adresse email destinataire est requise")
        .isEmail()
        .withMessage("L'adresse email n'est pas valide"),

    body('templateName')
        .notEmpty()
        .withMessage('Le nom du template est requis')
        .isString()
        .withMessage('Le nom du template doit être une chaîne de caractères'),

    body('data').optional().isObject().withMessage('Les données doivent être un objet'),
]
