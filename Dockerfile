FROM node:16.13.2-alpine AS base

WORKDIR /base

COPY package.json ./

RUN npm install

COPY . .


FROM base AS build

WORKDIR /build

COPY --from=base /base ./

RUN npm run build


FROM node:16.13.2-alpine AS app

ENV NODE_ENV=production

WORKDIR /app

COPY --from=build /build/package*.json ./

COPY --from=build /build/.next ./.next

COPY --from=build /build/public ./public

COPY --from=build /build/node_modules ./node_modules

COPY --from=build /build/next.config.js ./

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]
