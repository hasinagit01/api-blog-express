import express from 'express'
import cors from 'cors'
import path from 'path'
import { corsMiddleware } from '../middlewares/cors.js'
import { handleError } from '../utils/errors.js'
import { ensureUploadDirectories } from '../utils/ensureDirectories.js'
import routes from '../routes/indexRoutes.js'
import { healthCheck } from '../controllers/healthCheckController.js'
import { attachSession } from '../middlewares/sessionMiddleware.js'
import cookieParser from 'cookie-parser'

export const createApp = async () => {
    const app = express()
    console.log('Initializing Express app...')

    try {
        // Ensure upload directories exist
        await ensureUploadDirectories()

        // Serve uploaded files
        app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')))

        // Add cookie-parser before other middlewares
        app.use(cookieParser())

        // Middlewares
        app.use(express.json())
        app.use(express.urlencoded({ extended: false }))
        app.use(cors({
            credentials: true,
            origin: true
        }))
        app.use(corsMiddleware)

        // Debug middleware
        app.use((req, res, next) => {
            console.log('Request received:', {
                method: req.method,
                path: req.path,
                body: req.body,
            })
            if (!req.path.startsWith('/api/auth')) {
                return attachSession(req, res, next)
            }
            next()
        })

        // Health check endpoint - make sure it's before other routes
        app.get('/health', (req, res, next) => {
            console.log('Health check requested') // Debug log
            healthCheck(req, res).catch(next)
        })

        // API routes
        app.use('/api', routes)

        // Error handling must be last
        app.use(handleError)

        return app
    } catch (error) {
        console.error('App initialization failed:', error)
        throw error
    }
}
