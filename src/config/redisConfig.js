import { createClient } from 'redis'
import { config } from './env.js'


let redisClient = null

const initRedis = async () => {
    try {
        if (!redisClient) {
            redisClient = createClient({
                url: config.redis.url,
                socket: {
                    host: config.redis.host,
                    port: config.redis.port,
                    connectTimeout: 10000,
                    reconnectStrategy: (retries) => {
                        if (retries > 5) {
                            console.error('Max redis retries reached')
                            return new Error('Max redis retries reached')
                        }
                        return Math.min(retries * 100, 3000)
                    }
                },
            })

            redisClient.on('error', (err) => {
                console.error('Redis Client Error:', err)
            })

            redisClient.on('connect', () => {
                console.log('Redis: Connecting...')
            })

            redisClient.on('ready', () => {
                console.log('Redis: Connected and ready!')
            })
            
            // Only connect if not already connected
            if (!redisClient.isOpen) {
                await redisClient.connect()
            }
        }
        return redisClient
    } catch (error) {
        console.error('Redis initialization failed:', error)
        throw error
    }
}

export default await initRedis()
