### Express API with Docker Setup
This repository contains a Node.js Express API application fully containerized with Docker. The setup includes multiple services working together to provide a robust development and deployment environment.

Services Overview
The application stack consists of:

Node.js Application: Express API backend
Nginx: Web server acting as reverse proxy
MySQL: Database server
phpMyAdmin: Database management interface
Redis: In-memory data store for caching
Prerequisites
Docker and Docker Compose installed on your system
Git (for cloning the repository)

### Prerequisites
Docker and Docker Compose installed on your system
Git (for cloning the repository)

### Getting Started
# 1. Clone the repository
git clone <repository-url>
cd express-api

# 2. Configure environment variables
Create a .env file in the root directory with the following variables:
NODE_ENV=development
SERVER_PORT=9999

DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_ROOT_PASSWORD=your_database_root_password

REDIS_PORT=6379

3. Build service
# Rebuild a specific service
docker-compose build app

4. Start the services
docker-compose up -d

5. Restart a specific service
docker-compose restart app

6. Stop all services
docker-compose down

7. To view logs from a specific service
docker-compose logs -f app

1. Database prisma mysql
docker exec -it express-api_app-1 sh
npx prisma generate
npx prisma migrate deploy  (en production)
npx prisma db seed