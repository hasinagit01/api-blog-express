import { createClient } from 'redis'

const authRedisTest = async () => {
    try {
        // Initialiser le client Redis
        const client = createClient({
            url: 'redis://localhost:6379',
        })

        client.on('error', (err) => console.error('Redis Client Error:', err))
        client.on('connect', () => console.log('Connected to Redis!'))

        await client.connect()

        // Simuler une session utilisateur
        const testUser = {
            id: 5,
            email: 'test@example.com',
            role: 'READER',
        }

        // Stocker la session
        const sessionKey = 'session:test123'
        await client.set(sessionKey, JSON.stringify(testUser))
        console.log('Session stored in Redis')

        // Récupérer la session
        const storedSession = await client.get(sessionKey)
        console.log('Retrieved session:', JSON.parse(storedSession))

        // Tester l'expiration
        await client.expire(sessionKey, 60) // expire in 60 seconds
        const ttl = await client.ttl(sessionKey)
        console.log('Session TTL:', ttl)

        // Cleanup
        await client.del(sessionKey)
        console.log('Session cleaned up')

        await client.quit()
        console.log('Test completed successfully!')
    } catch (error) {
        console.error('Auth Redis test failed:', error)
    }
}

authRedisTest()
