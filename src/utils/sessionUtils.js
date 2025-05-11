import redisClient from '../config/redisConfig.js'

/**
 * Utility to get session data from Redis
 * @param {import('express').Request} req - Express request object
 * @returns {Promise<Object|null>} Session data or null if not found
 * @throws {ApiError} If there's an error accessing Redis
 */
export const getSessionData = async (req) => {
    try {
        console.log('Checking session data...')
        console.log('Cookies available:', req.cookies)

        // Get refresh token from cookie
        const refreshToken = req.cookies?.refreshToken
        if (!refreshToken) {
            console.log('❌ No refresh token in cookies')
            return null
        }

        // Get session from Redis using refresh token
        const sessionKey = `refresh:${refreshToken}`
        console.log('Looking for session with key:', sessionKey)

        const sessionData = await redisClient.get(sessionKey)
        if (!sessionData) {
            console.log('❌ No session found in Redis')
            return null
        }

        console.log('Redis Check:', {
            sessionKey,
            hasSession: !!sessionData,
        })

        console.log('✅ Session found in Redis')
        return JSON.parse(sessionData)
    } catch (error) {
        console.error('Session retrieval error:', error)
        //throw new ApiError(500, 'Error accessing session data')
        return null
    }
}
