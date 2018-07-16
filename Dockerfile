FROM node:9 as builder
RUN mkdir /tamuhack
WORKDIR /tamuhack
COPY . .

RUN npm install --quiet
RUN npm run build

FROM nginx:alpine
COPY --from=builder tamuhack/dist/ /usr/share/nginx/html/
