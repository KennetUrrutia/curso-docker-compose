#Seleccionar la version de node
FROM node:18

#Declarar el directorio en el que se va a copiar dentro del contenedor
WORKDIR /app

#copiar todos los archivos que se llamen pachage---.json y copiarlos en la raiz en el contenedor
COPY package*.json ./

#Con el primer punto, selecciona todos los archivos que se van a copiar
#Con el segundo punto dice que lo copie en el directorio actual del contenedor
COPY . .

#ejecutar el comando
RUN npm install -g ts-node
RUN npm install 
RUN npm run build

# Definir la variable de entorno de produccion
ENV NODE_ENV=production

#Puerto en el que se expone 
EXPOSE 3365


#Correr el comando para levantar el proyecto
CMD ["npm","start"]

# comando para crear la imagen
# docker build --no-cache --progress=plain -t <name> .
# docker run -it -p 4000:3365 <name>