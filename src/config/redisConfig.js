import { createClient } from 'redis'

let redisClient = null

const initRedis = async () => {
    try {
        if (!redisClient) {
            redisClient = createClient({
                url: process.env.REDIS_URL,
                socket: {
                    host: process.env.REDIS_HOST,
                    port: parseInt(process.env.REDIS_PORT),
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
