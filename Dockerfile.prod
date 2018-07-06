FROM node:9 as builder
RUN mkdir /tamuhack
WORKDIR /tamuhack
COPY tamuhack-site .

RUN npm install --quiet
RUN npm run build

# Copy built app into nginx container
FROM nginx:1.13.5
COPY --from=builder /tamuhack/dist /usr/share/nginx/html

EXPOSE 80
