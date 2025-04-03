# Use official Node.js image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Set environment variables
ENV PORT=8080
ENV HOST=0.0.0.0
ENV DB_URI=mongodb+srv://mongo:mongodb%402024@cluster0.pzf1d2h.mongodb.net/Portfolio
ENV VITE_API_URL=https://elton-evangelista.tech

# Install backend dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# Install frontend dependencies and build it
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install && npm run build

# Copy the rest of the app (source code)
COPY backend ./backend
COPY frontend ./frontend

# Expose port
EXPOSE 8080

# Start the server (assumes Express entry point is backend/index.js)
CMD ["node", "Backend/server.js"]