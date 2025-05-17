import prisma from '../src/config/database.js'
import bcrypt from 'bcrypt'
const { user: User, emailTemplate: EmailTemplate } = prisma

async function main() {
    try {
        await User.upsert({
            where: { email: 'hasinaboz@gmail.com' },
            update: { role: 'ADMIN' },
            create: {
                firstname: 'Boza',
                lastname: 'RAZAFINTSALAMA',
                email: 'hasinaboz@gmail.com',
                password: await bcrypt.hash('hasina1234', 10),
                posts: {
                    create: [
                        {
                            title: 'Express JS',
                            content: 'Express is a minimal and flexible Node.js web application framework...',
                        },
                        {
                            title: 'Nest JS',
                            content: 'NestJS is a progressive Node.js framework...',
                        },
                    ],
                },
            },
        })

        // Create email templates
        await EmailTemplate.upsert({
            where: { name: 'email_verification' },
            update: {},
            create: {
                name: 'email_verification',
                subject: 'Verify Your Email Address',
                htmlContent: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2>Welcome to Our Platform!</h2>
                        <p>Thank you for registering, {{firstname}}. Please verify your email address by clicking the button below:</p>
                        <div style="text-align: center; margin: 30px 0;">
                            <a href="{{verificationLink}}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">Verify Email</a>
                        </div>
                        <p>If the button doesn't work, you can also copy and paste the following link into your browser:</p>
                        <p>{{verificationLink}}</p>
                        <p>This link will expire in 24 hours.</p>
                        <p>If you didn't create an account, you can safely ignore this email.</p>
                    </div>
                `,
                textContent: `
                    Welcome to Our Platform!
                    
                    Thank you for registering, {{firstname}}. Please verify your email address by visiting the link below:
                    
                    {{verificationLink}}
                    
                    This link will expire in 24 hours.
                    
                    If you didn't create an account, you can safely ignore this email.
                `,
            },
        })

        await EmailTemplate.upsert({
            where: { name: 'password_reset' },
            update: {},
            create: {
                name: 'password_reset',
                subject: 'Reset Your Password',
                htmlContent: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2>Password Reset Request</h2>
                        <p>Hello {{firstname}},</p>
                        <p>We received a request to reset your password. Click the button below to create a new password:</p>
                        <div style="text-align: center; margin: 30px 0;">
                            <a href="{{resetLink}}" style="background-color: #2196F3; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">Reset Password</a>
                        </div>
                        <p>If the button doesn't work, you can also copy and paste the following link into your browser:</p>
                        <p>{{resetLink}}</p>
                        <p>This link will expire in 1 hour.</p>
                        <p>If you didn't request a password reset, you can safely ignore this email.</p>
                    </div>
                `,
                textContent: `
                    Password Reset Request
                    
                    Hello {{firstname}},
                    
                    We received a request to reset your password. Please visit the link below to create a new password:
                    
                    {{resetLink}}
                    
                    This link will expire in 1 hour.
                    
                    If you didn't request a password reset, you can safely ignore this email.
                `,
            },
        })
        console.log('Seed data inserted successfully')
    } catch (error) {
        console.error('Error seeding data:', error)
        throw error
    }
}

main()
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
