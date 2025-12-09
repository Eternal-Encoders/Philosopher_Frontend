FROM node:20.13-alpine as build-stage
WORKDIR /app

COPY . .

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN npm install

COPY ./public ./public
COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json
COPY ./nginx.conf ./nginx.conf
COPY ./tsconfig.node.json ./tsconfig.node.json
COPY ./index.html ./index.html
COPY ./.env.production ./.env.production

RUN npm run build

FROM nginx:stable-alpine-slim

RUN rm /etc/nginx/conf.d/*
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]