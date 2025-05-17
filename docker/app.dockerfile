FROM node:18-alpine

WORKDIR /usr/src/app

# Install dependencies including supervisor and nginx
# RUN apk add --no-cache python3 make g++ netcat-openbsd supervisor nginx bash

# Install dependencies including supervisor (SANS nginx)
RUN apk add --no-cache python3 make g++ netcat-openbsd supervisor bash


# Install dependencies for Sharp
RUN apk add --no-cache vips-dev build-base gcc

# Install nodemon globally
RUN npm install -g nodemon

# Copy package files
COPY package*.json ./

# Configure npm for better performance
RUN npm config set registry https://registry.npmjs.org/
RUN npm config set fetch-timeout 600000
RUN npm config set fetch-retries 5

# Install dependencies WITHOUT sharp first
RUN npm install --omit=optional --omit=dev

# Install Sharp from source
RUN npm install sharp --build-from-source

# Configure nginx
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Configure supervisor
COPY docker/supervisord/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy scripts
COPY docker/scripts/wait-for-it.sh /usr/local/bin/wait-for-it.sh
COPY docker/scripts/start-app.sh /usr/local/bin/start-app.sh
RUN chmod +x /usr/local/bin/wait-for-it.sh /usr/local/bin/start-app.sh
# COPY docker/scripts/setup-nginx.sh /usr/local/bin/setup-nginx.sh
# RUN chmod +x /usr/local/bin/wait-for-it.sh /usr/local/bin/start-app.sh /usr/local/bin/setup-nginx.sh

# Copy application code
COPY . .

# Generate Prisma client
RUN npx prisma generate

EXPOSE 9999 80

# Use supervisor to manage processes
CMD ["/bin/sh", "-c", "/usr/local/bin/wait-for-it.sh mysql 3306 -- /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf"]