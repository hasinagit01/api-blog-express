import { v4 as uuidv4 } from 'uuid'
import redisClient from '../config/redisConfig.js'

const REFRESH_TOKEN_EXPIRY = 60 * 60 * 24 * 7 // 7 days

export const sessionService = {
    async createSession(userData) {
        try {
            if (!userData?.id) {
                throw new Error('Invalid user data')
            }

            const refreshToken = uuidv4()
            const sessionKey = `refresh:${refreshToken}`
            const sessionData = {
                id: userData.id,
                firstname: userData.firstname || null,
                lastname: userData.lastname || null,
                email: userData.email,
                role: userData.role,
            }

            await redisClient.set(sessionKey, JSON.stringify(sessionData))
            await redisClient.expire(sessionKey, REFRESH_TOKEN_EXPIRY)

            return refreshToken
        } catch (error) {
            console.error('Session creation failed:', error)
            throw error
        }
    },

    async getSession(refreshToken) {
        try {
            if (!refreshToken) return null

            const sessionKey = `refresh:${refreshToken}`
            const session = await redisClient.get(sessionKey)
            return session ? JSON.parse(session) : null
        } catch (error) {
            console.error('Get session failed:', error)
            throw error
        }
    },

    async deleteSession(refreshToken) {
        try {
            if (!refreshToken) return

            const sessionKey = `refresh:${refreshToken}`
            await redisClient.del(sessionKey)
        } catch (error) {
            console.error('Delete session failed:', error)
            throw error
        }
    },

    async updateSession(refreshToken, userData) {
        try {
            if (!refreshToken || !userData?.id) {
                throw new Error('Invalid refresh token or user data')
            }

            const sessionKey = `refresh:${refreshToken}`
            const sessionData = {
                id: userData.id,
                firstname: userData.firstname || null,
                lastname: userData.lastname || null,
                email: userData.email,
                role: userData.role,
            }

            // Mettre à jour les données dans Redis
            await redisClient.set(sessionKey, JSON.stringify(sessionData))
            // Réinitialiser le TTL
            await redisClient.expire(sessionKey, REFRESH_TOKEN_EXPIRY)

            console.log('✅ Session updated in Redis:', sessionKey)
            return sessionData
        } catch (error) {
            console.error('Session update failed:', error)
            throw error
        }
    }
}
