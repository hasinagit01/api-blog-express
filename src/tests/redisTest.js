import { createClient } from 'redis'

const testRedisConnection = async () => {
    try {
        // Créer le client Redis
        const client = createClient({
            url: 'redis://localhost:6379',
        })

        // Gérer les événements
        client.on('error', (err) => console.error('Redis Client Error:', err))
        client.on('connect', () => console.log('Connected to Redis!'))

        // Connexion
        await client.connect()

        // Test d'écriture
        await client.set('test_key', 'Hello Redis!')
        const value = await client.get('test_key')
        console.log('Test value from Redis:', value)

        // Test session
        const sessionData = {
            userId: 1,
            email: 'test@example.com',
            role: 'USER',
        }
        await client.set('session:test', JSON.stringify(sessionData))
        const session = await client.get('session:test')
        console.log('Test session from Redis:', JSON.parse(session))

        // Nettoyage
        await client.del('test_key')
        await client.del('session:test')

        // Fermeture
        await client.quit()
        console.log('Test completed successfully!')
    } catch (error) {
        console.error('Redis test failed:', error)
    }
}

// Exécuter le test
testRedisConnection()
