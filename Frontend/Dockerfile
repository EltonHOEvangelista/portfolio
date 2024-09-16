# Use a base image with Node.js
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Set environment variables (if needed)
ENV VITE_API_URL=https://bkend-image-627625359026.us-west1.run.app

# Copy only package.json and package-lock.json first (optimize layer caching)
COPY package*.json ./

# Install all dependencies (including devDependencies to build the app)
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the app for production
RUN npm run build

# Remove devDependencies after build to reduce image size
# RUN npm prune --production

# Expose the port that your app will run on (default is 4173 for Vite preview)
EXPOSE 4173

# Use the Vite preview command to serve the built app
CMD ["npm", "run", "preview"]