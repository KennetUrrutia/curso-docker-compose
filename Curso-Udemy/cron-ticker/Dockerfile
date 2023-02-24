# FROM --platform=linux/amd64 node:19.2-alpine
# FROM node:19.2-alpine
FROM --platform=$BUILDPLATFORM node:19.2-alpine
# /app

#cd /app
WORKDIR /app

#copiar el app y el package.json al /app
COPY package.json ./

#Instalar las dependencias
RUN npm install

#copiar el app y el package.json al /app
# COPY app.js ./

COPY . .

# Realizar testing
RUN npm run test

# Eliminar archivos y directorios no necesarios en poducción
RUN rm -rf tests && rm -rf node_modules

# Unicamente instala las dependencias de produccion
RUN npm install --prod


CMD ["npm", "start"]



# Comando par ainiciar
# docker build --tag cron-ticker .

# Poner una etiqueta para diferenciar las imagener creadas cada vez que se realice el build
#  docker build --tag cron-ticker:1.0.0 .

# Cambiar el nombre y anadir la nueva imagen
# docker image tag cron-ticker kenneturrutia/cron-ticker

# docker buildx build \
# --platform linux/amd64,linux/arm64,linux/arm/v7,linux/arm/v8 \
# -t kenneturrutia/cron-ticker:latest --push .