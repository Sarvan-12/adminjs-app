# Use Node.js 20 (more compatible than v22)
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (for better Docker caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run your app
CMD ["node", "index.mjs"]   