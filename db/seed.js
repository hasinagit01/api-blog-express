import prisma from '../src/config/database.js'
import bcrypt from 'bcrypt'
const { user: User } = prisma

async function main() {
    try {
        await User.create({
            data: {
                firstname: 'Boza',
                lastname: 'RAZAFINTSALAMA',
                email: 'hasinaboz@gmail.com',
                password: await bcrypt.hash('hasina1234', 10),
                posts: {
                    create: [
                        {
                            title: 'Express JS',
                            content: 'Express is a minimal and flexible Node.js web application framework...',
                        },
                        {
                            title: 'Nest JS',
                            content: 'NestJS is a progressive Node.js framework...',
                        },
                    ],
                },
            },
        })
        console.log('Seed data inserted successfully')
    } catch (error) {
        console.error('Error seeding data:', error)
        throw error
    }
}

main()
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
