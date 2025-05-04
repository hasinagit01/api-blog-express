/* eslint-disable no-unused-vars */
import fs from 'fs/promises'
import path from 'path'

// Define upload directories configuration
const UPLOAD_DIRS = ['uploads/posts', 'uploads/images']

/**
 * Ensures all required upload directories exist
 * @returns {Promise<void>}
 */
export const ensureUploadDirectories = async () => {
    console.log('Checking upload directories...')

    for (const dir of UPLOAD_DIRS) {
        try {
            // Normalize path for cross-platform compatibility
            const normalizedPath = path.normalize(dir)

            await fs.access(normalizedPath)
            console.log(`Directory exists: ${normalizedPath}`)
        } catch (error) {
            // Log access error for debugging
            console.log(`Directory ${dir} not found, creating...`)

            try {
                await fs.mkdir(dir, { recursive: true })
                console.log(`Created directory: ${dir}`)
            } catch (mkdirError) {
                console.error(`Failed to create directory ${dir}:`, mkdirError.message)
                throw new Error(`Failed to create upload directory ${dir}: ${mkdirError.message}`)
            }
        }
    }

    console.log('Upload directories setup complete')
}
