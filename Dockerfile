# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# # Set the working directory
WORKDIR /app

# Install git
RUN apk add --no-cache git

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Create a .env file with some variables
RUN echo "NODE_ENV=dev" > .env && \
    echo "PORT=8000" >> .env && \
    echo "DB_HOST=localhost" >> .env && \
    echo "DB_USER=postgresAdmin" >> .env && \
    echo "DB_PASSWORD=postgresPassword" >> .env && \
    echo "DB_NAME=dummy" >> .env && \
    echo "DB_PORT=5432" >> .env && \
    echo "DB_SCHEMA=public" >> .env

# Build the application code
RUN npm run build

# Expose the backend port
EXPOSE 8000

# Define the command to run the application
CMD ["npm", "start"]
