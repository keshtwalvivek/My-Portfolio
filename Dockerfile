# Stage 1: Build the app
FROM node:20-alpine AS builder

WORKDIR /app

# Better caching: copy package files first
COPY package*.json ./

# Use ci for clean, reproducible installs
RUN npm ci

# Copy source code & build
COPY . .
RUN npm run build

# Stage 2: Production - serve static files with nginx
FROM nginx:stable-alpine

# Copy only the built static files (Vite outputs to /dist by default)
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional but recommended: Custom nginx config for SPA (client-side routing)
# Create this file next to Dockerfile → see below
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (nginx default)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]