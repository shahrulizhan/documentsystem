# Base image
FROM node:10

# Install adonis environment in container
RUN npm i -g @adonisjs/cli

# Set working directory in container
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install all dependencies/library in container based on package.json
RUN npm install

# Copy all file into container's workdir
COPY . .

# Expose container port
EXPOSE 3333

# Run adonis
CMD adonis serve