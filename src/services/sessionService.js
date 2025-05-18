import { v4 as uuidv4 } from 'uuid'
import redisClient from '../config/redisConfig.js'
import jwt from 'jsonwebtoken'

const REFRESH_TOKEN_EXPIRY = 60 * 60 * 24 * 7 // 7 days
const BLACKLIST_PREFIX = 'blacklist:token:'

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

            // 🔹 Ajouter le token au set des sessions de l'utilisateur
            
            // Utilisation de la syntaxe correcte pour redis v4+
            const userSessionsKey = `user_sessions:${userData.id}`
            await redisClient.sAdd(userSessionsKey, refreshToken)

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
            // Récupérer les données de session pour trouver l'ID utilisateur
            const sessionData = await this.getSession(refreshToken)
            
            if (sessionData && sessionData.id) {
                // Supprimer le token de l'ensemble des sessions de l'utilisateur
                const userSessionsKey = `user_sessions:${sessionData.id}`
                await redisClient.sRem(userSessionsKey, refreshToken)
            }

            return await redisClient.del(sessionKey)
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

            await redisClient.set(sessionKey, JSON.stringify(sessionData))
            await redisClient.expire(sessionKey, REFRESH_TOKEN_EXPIRY)

            // ✅ On garde le sadd uniquement dans createSession, pas besoin ici sauf si l'id change

            console.log('✅ Session updated in Redis:', sessionKey)
            return sessionData
        } catch (error) {
            console.error('Session update failed:', error)
            throw error
        }
    },

    async userHasActiveSession(userId) {
        try {
            if (!userId) {
                throw new Error('User ID is required')
            }
            
            const userSessionsKey = `user_sessions:${userId}`
            
            // Vérifier si l'utilisateur a des sessions actives
            // Avec Redis v4+, utilisez sCard (anciennement scard)
            const sessionCount = await redisClient.sCard(userSessionsKey)
            
            return sessionCount > 0
        } catch (error) {
            console.error('Error checking active sessions:', error)
            return false
        }
    },

    async blacklistToken(token, userId) {
        try {
            if (!token) return false

            const decoded = jwt.decode(token)
            if (!decoded || !decoded.exp) return false

            const expirationTime = decoded.exp
            const currentTime = Math.floor(Date.now() / 1000)
            const ttl = Math.max(expirationTime - currentTime, 0)

            if (ttl <= 0) return false

            const blacklistKey = `${BLACKLIST_PREFIX}${token}`
            await redisClient.set(blacklistKey, userId.toString())
            await redisClient.expire(blacklistKey, ttl)

            console.log(`Token blacklisted for user ${userId} with TTL ${ttl}s`)
            return true
        } catch (error) {
            console.error('Error blacklisting token:', error)
            return false
        }
    },

    async isTokenBlacklisted(token) {
        try {
            if (!token) return false

            const blacklistKey = `${BLACKLIST_PREFIX}${token}`
            const exists = await redisClient.exists(blacklistKey)
            return exists === 1
        } catch (error) {
            console.error('Error checking blacklisted token:', error)
            return false
        }
    },
}
