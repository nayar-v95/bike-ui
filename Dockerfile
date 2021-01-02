FROM nginx:alpine
COPY /dist/bike-ui /usr/share/nginx/html
# FROM node AS builder

# WORKDIR /app

# COPY . .

# RUN npm install
# RUN npm run build

# FROM nginx:1.17.1-alpine

# COPY --from=builder /app/dist/* /usr/share/nginx/html/

