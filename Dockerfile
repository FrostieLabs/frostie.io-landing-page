# Multi-stage build: install dependencies and build the app
FROM node:18-alpine AS builder
WORKDIR /app

# only copy package manifests to leverage Docker cache
COPY package.json package-lock.json ./
RUN npm ci

# copy source and build
COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine
# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/* \
  && sed -i 's/^\([[:space:]]*\)#[[:space:]]*\(error_page.*404.*\/404\.html;\)/\1\2/' /etc/nginx/conf.d/default.conf
# Copy build artifacts from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
