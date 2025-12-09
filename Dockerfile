FROM node:20.13-alpine as build-stage
WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:stable-alpine-slim

RUN rm /etc/nginx/conf.d/*
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]