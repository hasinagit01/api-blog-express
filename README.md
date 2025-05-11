### Installation & Configuration

# This initializes a new Node.js project and creates a package.json file to manage dependencies.

# Project Initialization

This command initializes a new Node.js project by creating a `package.json` file. It will prompt you for:

- project name
- version
- description
- entry point
- test command
- git repository
- keywords
- author
- license

# Node API Project Setup

Initialize a new Node.js project by creating a package.json file using the npm command line tool. This will guide you through a series of prompts to set up your project configuration.

## Prerequisites

- Node.js installed on your system
- npm (Node Package Manager) installed

## Command Usage

Running this command will:

- Create a new package.json file
- Set up project metadata
- Configure initial project settings

**`npm init`**

# Express is a fast, unopinionated, minimalist web framework for Node.js, used to build web applications and APIs.

# Dependencies Installation

Install Express.js, a fast and minimalist web application framework for Node.js:

- Express.js provides a robust set of features for web and mobile applications
- It simplifies the process of building APIs and web applications
- The `-i` flag is shorthand for `install`

**`npm i express`**

# Installs Nodemon, a tool for automatically restarting the server during development.

# Development Dependencies

Install `nodemon` as a development dependency. This tool helps automatically restart the Node.js application when file changes are detected during development.

## Installation

<!-- Installs Nodemon as a dependency, a utility that monitors for changes in files and automatically restarts the Node.js application. This is particularly useful during development to avoid manually restarting the server after each code change. The `-i` flag is shorthand for `install`. -->

**`npm i nodemon`**

<!-- ESLint: JavaScript and TypeScript linter for identifying and fixing code issues -->

**`npm i eslint -D`**

<!-- Prettier: Code formatter that ensures consistent code style -->

**`npm i prettier -D`**

<!-- ESLint-config-prettier: Disables ESLint rules that might conflict with Prettier -->

**`npm i eslint-config-prettier -D`**

<!-- Dotenv: Loads environment variables from a .env file into process.env -->

**`npm i dotenv`**

<!-- CORS: Express middleware that enables Cross-Origin Resource Sharing -->

**`npm i cors`**

### Installation Prisma

npm i prisma
npm i @prisma/client
npx prisma init

### Generation models on the file schema.prisma via bdd

npx prisma db pull

## migrate database

# launch migration

npx prisma migrate dev --name init

# update migration

npx prisma migrate dev --create-only --name update_user_model
npx prisma migrate dev

# if don't need to keep existing data

npx prisma migrate reset

## seed database

npx prisma generate
(npx prisma db push)
npx prisma db seed

# verfication

npx prisma db pull

## form validator

npm i express-validator

### Manage Authentication

# With JWT

npm install jsonwebtoken bcrypt

# generate random bcrypt

node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

### Upload image with

npm install multer sharp uuid
multer: Pour gérer l'upload de fichiers
sharp: Pour optimiser et redimensionner les images
uuid: Pour générer des noms de fichiers uniques

### Mailer

npm install nodemailer handlebars

npm install @bull-board/express @bull-board/api bullmq nodemailer handlebars ioredis

<!-- https://www.youtube.com/watch?v=bSZHW2niCEI -->
