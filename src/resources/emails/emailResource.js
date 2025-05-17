/**
 * Transform email template data
 * @param {Object} template Email template object
 * @returns {Object} Transformed template data
 */
export function emailTemplateResource(template) {
    return {
        id: template.id,
        name: template.name,
        subject: template.subject,
        htmlContent: template.htmlContent,
        textContent: template.textContent,
        isActive: template.isActive,
        createdAt: template.createdAt,
        updatedAt: template.updatedAt,
    }
}

/**
 * Maps an array of templates through the emailTemplateResource function
 * @param {Array} templates Array of template objects
 * @returns {Array} Transformed array of template objects
 */
export function emailTemplateCollection(templates) {
    return templates.map(emailTemplateResource)
}
