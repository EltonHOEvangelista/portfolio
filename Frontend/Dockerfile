# Use a base image with your desired runtime environment
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /app/src/frontend

# Set any environment variables required by your backend
ENV VITE_API_URL=https://bkend-image-627625359026.us-west1.run.app

# Copy config file
COPY package*.json ./

# Install any dependencies required by your backend
RUN npm install --only=production

# Copy the backend code to the container
COPY . .

# build the app
RUN npm run build

# Specify the command to start your frontend
CMD npm start