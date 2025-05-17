import nodemailer from 'nodemailer'
import { config } from './env.js'

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
    return nodemailer.createTransport({
        host: config.email.host,
        port: config.email.port,
        secure: config.email.secure,
        auth: {
            user: config.email.user,
            pass: config.email.password,
        },
    })
}

// Verify connection configuration
const verifyConnection = async () => {
    const transporter = createTransporter()
    try {
        await transporter.verify()
        console.log('✅ Email service connection verified')
        return true
    } catch (error) {
        console.error('❌ Email service connection failed:', error)
        console.log('Current email config:', {
            host: config.email.host,
            port: config.email.port,
            secure: config.email.secure,
            auth: {
                user: config.email.user ? `${config.email.user.substring(0, 3)}...` : 'undefined',
                pass: config.email.password ? 'provided' : 'undefined',
            },
        })
        return false
    }
}
// Ajouter une fonction plus robuste pour envoyer des emails en mode développement
const sendMailDev = (options) => {
    console.log('📧 [DEV MODE] Email would be sent:')
    console.log('To:', options.to)
    console.log('Subject:', options.subject)
    console.log('Content:', options.text || options.html.substring(0, 100) + '...')
    return Promise.resolve({ messageId: 'dev-mode-email' })
}

export default {
    createTransporter,
    verifyConnection,
    sendMailDev,
}
