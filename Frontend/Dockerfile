# Use a base image with Node.js
FROM node:20-alpine AS build 
# FROM node:20 AS build

# Set the working directory inside the container
WORKDIR /app/portfolioApp

# Set environment variables (if needed)
ENV VITE_API_URL=https://bkend-image-627625359026.us-west1.run.app
ENV HOST=0.0.0.0

# Copy only package.json and package-lock.json first (optimize layer caching)
COPY package*.json ./

# Install all dependencies (including devDependencies to build the app)
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port on which your backend will listen
EXPOSE 8080

# Build the app for production
RUN npm run build

# Use the Vite preview command to serve the built app
CMD ["npm", "run", "preview"]