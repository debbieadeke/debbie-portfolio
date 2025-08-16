# Use Node 20 Alpine for small size & latest features
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Expose Vite's default dev port
EXPOSE 5173

# Run development server with host binding so it's accessible from outside container
CMD ["npm", "run", "dev", "--", "--host"]
