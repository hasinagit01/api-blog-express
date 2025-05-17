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
    },

    /**
     * Check if user has any active sessions
     * @param {string|number} userId - User ID
     * @returns {Promise<boolean>} - True if user has active sessions
     */
    async userHasActiveSession(userId) {
        try {
            // Puisque votre format de clé est different, nous devons
            // récupérer toutes les clés et vérifier leur contenu
            const keys = await redisClient.keys('refresh:*')
            
            // Parcourir les clés et vérifier si l'une d'elles appartient à l'utilisateur
            for (const key of keys) {
                const sessionData = await redisClient.get(key)
                if (sessionData) {
                    const parsed = JSON.parse(sessionData)
                    if (parsed.id === userId) {
                        return true
                    }
                }
            }
            
            return false
        } catch (error) {
            console.error('Error checking user sessions:', error)
            return false
        }
    },

    /**
     * Blacklist a JWT token
     * @param {string} token - The JWT token to blacklist
     * @param {string|number} userId - User ID associated with the token
     * @returns {Promise<boolean>} - True if token was blacklisted successfully
     */
    async blacklistToken(token, userId) {
        try {
            if (!token) {
                return false
            }
            
            // Décoder le token pour obtenir sa date d'expiration
            const decoded = jwt.decode(token)
            if (!decoded || !decoded.exp) {
                return false
            }
            
            // Calculer le temps restant jusqu'à expiration
            const expirationTime = decoded.exp
            const currentTime = Math.floor(Date.now() / 1000)
            const ttl = Math.max(expirationTime - currentTime, 0)
            
            // Si le token est déjà expiré, pas besoin de le blacklister
            if (ttl <= 0) {
                return false
            }
            
            // Ajouter le token à la liste noire
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

    /**
     * Check if a token is blacklisted
     * @param {string} token - The JWT token to check
     * @returns {Promise<boolean>} - True if token is blacklisted
     */
    async isTokenBlacklisted(token) {
        try {
            if (!token) {
                return false
            }
            
            const blacklistKey = `${BLACKLIST_PREFIX}${token}`
            const exists = await redisClient.exists(blacklistKey)
            
            return exists === 1
        } catch (error) {
            console.error('Error checking blacklisted token:', error)
            return false
        }
    },
}
