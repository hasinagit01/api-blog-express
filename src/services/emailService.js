import prisma from '../config/database.js'

const { emailTemplate: EmailTemplate } = prisma

/**
 * Get all email templates with pagination
 * @param {number} [page=1] Page number
 * @param {number} [limit=10] Items per page
 * @param {string} [sortBy='id'] Field to sort by
 * @param {string} [sortOrder='desc'] Sort direction
 * @param {string} [search=''] Search term
 * @returns {Promise<Object>} Templates and count
 */
export const getAllTemplates = async (page = 1, limit = 10, sortBy = 'id', sortOrder = 'desc', search = '') => {
    const skip = (page - 1) * limit
    const orderBy = { [sortBy]: sortOrder.toLowerCase() }

    const where = search
        ? {
            OR: [
                { name: { contains: search, mode: 'insensitive' } },
                { subject: { contains: search, mode: 'insensitive' } },
            ],
        }
        : {}

    const templates = await EmailTemplate.findMany({
        orderBy,
        skip,
        take: limit,
        where,
    })

    const total = await EmailTemplate.count({ where })
    return { templates, total }
}

/**
 * Get template by ID
 * @param {number} id Template ID
 * @returns {Promise<Object>} Email template
 */
export const getTemplateById = (id) => {
    return EmailTemplate.findUnique({
        where: { id: parseInt(id) },
    })
}

/**
 * Get template by name
 * @param {string} name Template name
 * @returns {Promise<Object>} Email template
 */
export const getTemplateByName = (name) => {
    return EmailTemplate.findUnique({
        where: { name },
    })
}

/**
 * Create email template
 * @param {Object} data Template data
 * @returns {Promise<Object>} Created template
 */
export const createTemplate = async (data) => {
    return EmailTemplate.create({
        data,
    })
}

/**
 * Update email template
 * @param {number} id Template ID
 * @param {Object} data Update data
 * @returns {Promise<Object>} Updated template
 */
export const updateTemplate = async (id, data) => {
    return EmailTemplate.update({
        where: { id: parseInt(id) },
        data,
    })
}

/**
 * Delete email template
 * @param {number} id Template ID
 * @returns {Promise<Object>} Deleted template
 */
export const deleteTemplate = async (id) => {
    return EmailTemplate.delete({
        where: { id: parseInt(id) },
    })
}

/**
 * Render email content with placeholders replaced
 * @param {string} content Email template content
 * @param {Object} data Data to inject
 * @returns {string} Rendered content
 */
export const renderEmailContent = (content, data = {}) => {
    if (!content) return ''

    // Simple placeholder replacement
    return content.replace(/{{(\w+)}}/g, (_, key) => {
        return data[key] !== undefined ? data[key] : `{{${key}}}`
    })
}
