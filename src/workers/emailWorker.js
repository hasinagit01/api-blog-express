import { Worker } from 'bullmq'
import Redis from 'ioredis'
import { config } from '../config/env.js'
import emailConfig from '../config/emailConfig.js'

// Create Redis connection
const redisConnection = new Redis({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password,
    maxRetriesPerRequest: null,
})

const queueName = config.email.queueName || 'email'

// Définir la fonction processJob en tant que fonction séparée
const processJob = async (job) => {
    try {
        console.log(`Processing email job ${job.id}`)

        const { to, subject, html, text } = job.data

        // Vérifier les données requises
        if (!to || !subject || (!html && !text)) {
            throw new Error('Missing required email data')
        }

        // Mode test en développement
        if (config.env === 'development' && process.env.MOCK_EMAIL === 'true') {
            console.log(`📧 [DEV MODE] Would send email to ${to}`)
            return { success: true, messageId: 'dev-mode' }
        }

        // Création du transporteur et envoi de l'email
        const transporter = emailConfig.createTransporter()

        // Send email
        const result = await transporter.sendMail({
            from: config.email.from,
            to,
            subject,
            html,
            text,
        })

        console.log(`Email sent to ${to}, message id: ${result.messageId}`)
        return result
    } catch (error) {
        console.error(`Failed to process email job ${job.id}:`, error)
        // Rethrow pour que BullMQ gère les nouvelles tentatives
        throw error
    }
}

// Create worker  en utilisant processJob comme callback
const emailWorker = new Worker(
    queueName,
    processJob,  // Utiliser la fonction processJob ici
    {
        connection: redisConnection,
        concurrency: 5,
        limiter: {
            max: 50, // Max 50 emails
            duration: 60000, // Per minute
        },
    }
)

// Handle events
emailWorker.on('completed', (job) => {
    console.log(`Email job ${job.id} completed successfully`)
})

emailWorker.on('failed', (job, error) => {
    console.error(`Email job ${job?.id} failed:`, error)
})

export default emailWorker
