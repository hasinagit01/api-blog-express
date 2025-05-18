import express from 'express'
import { verifyToken } from '../middlewares/authMiddleware.js'
import { roleMiddleware } from '../middlewares/roleMiddleware.js'
import * as emailController from '../controllers/emailController.js'
import { validateMiddleware, validateUpdate } from '../middlewares/validateMiddleware.js'
import {
    validateCreateTemplate,
    createUpdateTemplateValidator,
    validateSendEmail,
} from '../validators/emailValidators.js'

const router = express.Router()

// Middleware d'authentification et vérification du rôle admin
router.use(verifyToken)
router.use(roleMiddleware('ADMIN'))

// === BACKOFFICE ROUTES ===

// Email templates management
router.get('/email', emailController.getAllEmailTemplates)
router.get('/email/:id', emailController.getEmailTemplate)
router.post('/email', validateCreateTemplate, validateMiddleware, emailController.createEmailTemplate)
router.put(
    '/email/:id',
    validateUpdate(createUpdateTemplateValidator),
    validateMiddleware,
    emailController.updateEmailTemplate
)
router.delete('/email/:id', emailController.deleteEmailTemplate)
router.post('/email/send', validateSendEmail, validateMiddleware, emailController.sendEmail)

// Vous pouvez ajouter d'autres routes administratives ici
// Par exemple: statistiques, logs, configuration, etc.

export default router
