#!/bin/sh
# Assurez-vous que /etc/nginx/conf.d est vide pour éviter les conflits
rm -f /etc/nginx/conf.d/*.conf

# Création d'un fichier de configuration nginx approprié
cat > /etc/nginx/conf.d/default.conf <<EOF
server {
    listen 80;
    server_name localhost;

    location / {
        proxy_pass http://localhost:9999;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    }
}
EOF

# Test de la configuration
nginx -t || exit 1

# Si tout est OK, on peut continuer
echo "Nginx configuration is valid"