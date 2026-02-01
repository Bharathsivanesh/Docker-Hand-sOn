FROM node:20  
# Linux-based Node image (base image)
WORKDIR /app
# Creates a folder /app inside container
COPY package.json .
# Copies package.json from your local system to container

RUN npm install
# Creates node_modules inside container
COPY . .

# Copies all project files to container

EXPOSE 5173
# It only documents:“This container uses port 5000”

CMD ["node","server.js"]
# This is the command that runs when container starts
