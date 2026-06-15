FROM node:24-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV PNPM_CONFIG_MINIMUM_RELEASE_AGE=0
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --prefer-offline --config.minimumReleaseAge=0

FROM base AS build-stage
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prefer-offline --config.minimumReleaseAge=0
RUN pnpm run build

FROM nginx:stable-alpine-slim

RUN rm /etc/nginx/conf.d/*
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]