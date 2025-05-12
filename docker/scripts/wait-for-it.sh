#!/bin/sh

set -e

host="$1"
port="$2"
shift 2
cmd="$@"

# Attente de MySQL
until nc -z -v -w30 "$host" "$port"; do
  echo "Waitiiiiing for MySQL at ${host}:${port}..."
  sleep 2
done

echo "MySQL is up - executing command"

# Lancer les migrations et le seed (commenté pour éviter les migrations automatiques à chaque démarrage à faire manuellement)
# echo "Running Prisma generate, migrate and seed..."
# npx prisma generate
# npx prisma migrate deploy
# npx prisma db seed

# Exécution de la commande
exec $cmd
