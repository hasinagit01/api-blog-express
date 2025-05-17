import express from 'express'
import { validateMiddleware, validateUpdate } from '../middlewares/validateMiddleware.js'
import { verifyToken } from '../middlewares/authMiddleware.js'
import {
    validateCreateTemplate,
    createUpdateTemplateValidator,
    validateSendEmail,
} from '../validators/emailValidators.js'
import * as emailController from '../controllers/emailController.js'

const router = express.Router()

// Protected routes - requires admin authentication
router.use(verifyToken)

// CRUD operations for email templates
router.get('/', emailController.getAllEmailTemplates)
router.get('/:id', emailController.getEmailTemplate)
router.post('/', validateCreateTemplate, validateMiddleware, emailController.createEmailTemplate)
router.put(
    '/:id',
    validateUpdate(createUpdateTemplateValidator),
    validateMiddleware,
    emailController.updateEmailTemplate
)
router.delete('/:id', emailController.deleteEmailTemplate)

// Send email endpoint
router.post('/send', validateSendEmail, validateMiddleware, emailController.sendEmail)

export default router
