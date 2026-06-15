FROM node:24-slim AS base
ARG PNPM_VERSION=10.18.2
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV PNPM_CONFIG_MINIMUM_RELEASE_AGE=0
ENV PNPM_CONFIG_STRICT_DEP_BUILDS=false
ENV HUSKY=0
RUN corepack enable
RUN corepack prepare pnpm@${PNPM_VERSION} --activate
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --prefer-offline --frozen-lockfile --config.minimumReleaseAge=0

FROM base AS build-stage
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prefer-offline --frozen-lockfile --config.minimumReleaseAge=0
RUN pnpm run build

FROM nginx:stable-alpine-slim

RUN rm /etc/nginx/conf.d/*
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]