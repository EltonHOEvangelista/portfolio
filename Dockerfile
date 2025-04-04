# Use official Node.js image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Set environment variables
ENV PORT=8080
ENV HOST=0.0.0.0
ENV DB_URI=mongodb+srv://mongo:mongodb%402024@cluster0.pzf1d2h.mongodb.net/Portfolio
ENV VITE_API_URL=https://elton-evangelista.tech

# Copy the backend source code and Install its dependencies
COPY backend ./backend
RUN cd backend && npm install

# Copy the frontend source code, Install its dependencies and build it
COPY frontend ./frontend
RUN cd frontend && npm install && npm run build

# Expose port
EXPOSE 8080

# Start the server (assumes Express entry point is backend/index.js)
CMD ["node", "backend/server.js"]