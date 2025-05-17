import {
    getAllTemplates,
    getTemplateById,
    createTemplate,
    updateTemplate,
    deleteTemplate,
} from '../services/emailService.js'
import { queueEmail } from '../services/emailQueueService.js'
import { emailTemplateResource, emailTemplateCollection } from '../resources/emails/emailResource.js'
import { ApiError } from '../utils/errors.js'

/**
 * Get all email templates
 * @param {Request} req Request object
 * @param {Response} res Response object
 * @returns {Promise<void>}
 */
export async function getAllEmailTemplates(req, res) {
    const { page = 1, limit = 10, sortBy = 'id', sortOrder = 'desc', search = '' } = req.query
    const { templates, total } = await getAllTemplates(parseInt(page), parseInt(limit), sortBy, sortOrder, search)
    const totalPages = Math.ceil(total / limit)

    if (!templates.length) {
        throw new ApiError(404, 'No email templates found')
    }

    res.status(200).json({
        data: emailTemplateCollection(templates),
        meta: {
            currentPage: parseInt(page),
            totalPages,
            totalItems: total,
            itemsPerPage: parseInt(limit),
            sortBy,
            sortOrder,
            search: search || null,
        },
    })
}

/**
 * Get email template by ID
 * @param {Request} req Request object
 * @param {Response} res Response object
 * @returns {Promise<void>}
 */
export async function getEmailTemplate(req, res) {
    const { id } = req.params
    const template = await getTemplateById(id)

    if (!template) {
        throw new ApiError(404, 'Email template not found')
    }

    res.status(200).json(emailTemplateResource(template))
}

/**
 * Create new email template
 * @param {Request} req Request object
 * @param {Response} res Response object
 * @returns {Promise<void>}
 */
export async function createEmailTemplate(req, res) {
    const { name, subject, htmlContent, textContent, isActive } = req.body
    const newTemplate = await createTemplate({
        name,
        subject,
        htmlContent,
        textContent,
        isActive: isActive !== undefined ? isActive : true,
    })

    res.status(201).json({
        message: 'Email template created successfully',
        data: emailTemplateResource(newTemplate),
    })
}

/**
 * Update email template
 * @param {Request} req Request object
 * @param {Response} res Response object
 * @returns {Promise<void>}
 */
export async function updateEmailTemplate(req, res) {
    const { id } = req.params
    const { name, subject, htmlContent, textContent, isActive } = req.body

    const updatedTemplate = await updateTemplate(id, {
        name,
        subject,
        htmlContent,
        textContent,
        isActive,
    })

    if (!updatedTemplate) {
        throw new ApiError(404, 'Email template not found')
    }

    res.status(200).json({
        message: 'Email template updated successfully',
        data: emailTemplateResource(updatedTemplate),
    })
}

/**
 * Delete email template
 * @param {Request} req Request object
 * @param {Response} res Response object
 * @returns {Promise<void>}
 */
export async function deleteEmailTemplate(req, res) {
    const { id } = req.params
    const result = await deleteTemplate(id)

    if (!result) {
        throw new ApiError(404, 'Email template not found')
    }

    res.status(200).json({
        message: 'Email template deleted successfully',
    })
}

/**
 * Send email using template
 * @param {Request} req Request object
 * @param {Response} res Response object
 * @returns {Promise<void>}
 */
export async function sendEmail(req, res) {
    const { to, templateName, data } = req.body

    try {
        const job = await queueEmail({ to, templateName, data })

        res.status(202).json({
            message: 'Email queued successfully',
            jobId: job.id,
        })
    } catch (error) {
        if (error.message.includes('not found')) {
            throw new ApiError(404, error.message)
        }
        throw new ApiError(500, 'Failed to queue email')
    }
}
