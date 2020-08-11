# Pull base image
FROM node:latest as builder

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json /app

# Download all node dependencies specified inside package.json
RUN npm install

# Bundle app source inside Docker Image
COPY . /app
FROM builder as release
# Port mapped by the docker daemon
EXPOSE 8081

# Specify app startup command
CMD [ "node", "server.js" ]
