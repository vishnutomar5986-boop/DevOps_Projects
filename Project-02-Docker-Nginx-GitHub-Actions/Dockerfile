# Use official Node.js image
FROM node:24-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application source
COPY . .

# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
