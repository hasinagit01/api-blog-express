import { Queue } from 'bullmq'
import Redis from 'ioredis'
import { config } from '../config/env.js'
import emailConfig from '../config/emailConfig.js'
import crypto from 'crypto'
import { getTemplateByName, renderEmailContent } from './emailService.js'

// Create Redis connection for BullMQ using ioredis
const redisConnection = new Redis(
    config.redis.url || {
        host: config.redis.host,
        port: config.redis.port,
        password: config.redis.password || undefined,
        maxRetriesPerRequest: null,
    }
)

// use name of queue from configuration
const queueName = config.email.queueName || 'email'

// Create email queue
const emailQueue = new Queue(queueName, {
    connection: redisConnection,
    defaultJobOptions: {
        attempts: 3,
        backoff: {
            type: 'exponential',
            delay: 5000,
        },
    },
})

/**
 * Generate verification token
 * @returns {string} Verification token
 */
export const generateVerificationToken = () => {
    return crypto.randomBytes(32).toString('hex')
}

/**
 * Create verification URL
 * @param {string} token Verification token
 * @returns {string} Verification URL
 */
export const getVerificationUrl = (token) => {
    // @TODO redirect verifcation email on frontend 
    //return `${config.frontendUrl}/verify-email?token=${token}`
    // Temporary solution before implementing the frontend
    // Use an environment-based configuration value
    const baseUrl = config.verificationUrl || `${config.apiUrl}/auth/verify-email`

    // Retourner l'URL complète avec le token
    return `${baseUrl}/${token}`
}

/**
 * Create password reset URL
 * @param {string} token Reset token
 * @returns {string} Reset URL
 */
export const getPasswordResetUrl = (token) => {
    return `${config.frontendUrl}/reset-password?token=${token}`
}

/**
 * Add email to queue
 * @param {Object} emailData Email data
 * @param {string} emailData.to Recipient email
 * @param {string} emailData.templateName Template name
 * @param {Object} emailData.data Dynamic data for template
 * @param {Object} [options] Queue options
 * @returns {Promise<Object>} Job object
 */
export const queueEmail = async ({ to, templateName, data = {} }, options = {}) => {
    // Get template from database
    const template = await getTemplateByName(templateName)
    if (!template) {
        throw new Error(`Email template "${templateName}" not found`)
    }

    // Render email content with data
    const htmlContent = renderEmailContent(template.htmlContent, data)
    const textContent = template.textContent ? renderEmailContent(template.textContent, data) : undefined

    // Add to queue
    const job = await emailQueue.add(
        'send',
        {
            to,
            subject: renderEmailContent(template.subject, data),
            html: htmlContent,
            text: textContent,
            templateName,
            originalData: data,
        },
        options
    )

    return job
}

/**
 * Send email directly without queue
 * @param {Object} emailData Email data
 * @returns {Promise<Object>} Send result
 */
export const sendEmailDirect = async ({ to, subject, html, text }) => {
    try {
        const transporter = emailConfig.createTransporter()

        // En mode développement, utilisez la fonction de simulation d'email si configurée
        if (config.env === 'development' && process.env.MOCK_EMAIL === 'true') {
            return emailConfig.sendMailDev({
                from: config.email.from,
                to,
                subject,
                html,
                text,
            })
        }

        return await transporter.sendMail({
            from: config.email.from,
            to,
            subject,
            html,
            text,
        })
    } catch (error) {
        console.error('❌ Failed to send email directly:', error)
        // Ne pas faire échouer l'application en cas d'erreur d'email
        return {
            error: true,
            message: error.message,
        }
    }
}

/**
 * Queue email verification email
 * @param {Object} user User object
 * @param {string} token Verification token
 * @returns {Promise<Object>} Job object
 */
export const queueVerificationEmail = async (user, token) => {
    const verificationLink = getVerificationUrl(token)

    return queueEmail({
        to: user.email,
        templateName: 'email_verification',
        data: {
            firstname: user.firstname,
            verificationLink,
        },
    })
}

/**
 * Queue password reset email
 * @param {Object} user User object
 * @param {string} token Reset token
 * @returns {Promise<Object>} Job object
 */
export const queuePasswordResetEmail = async (user, token) => {
    const resetLink = getPasswordResetUrl(token)

    return queueEmail({
        to: user.email,
        templateName: 'password_reset',
        data: {
            firstname: user.firstname,
            resetLink,
        },
    })
}

export default {
    queueEmail,
    sendEmailDirect,
    emailQueue,
    queueVerificationEmail,
    queuePasswordResetEmail,
    generateVerificationToken,
}
