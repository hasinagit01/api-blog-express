#!/bin/sh
# filepath: /media/hasina/88F6EAA6F6EA93AA2/DataOldMachine/portFolios/NODEJS/APIs/express-api/docker/scripts/start-app.sh

# Set Node.js options for more memory
export NODE_OPTIONS='--max-old-space-size=4096'

# Start application with nodemon
nodemon --experimental-specifier-resolution=node src/app.js