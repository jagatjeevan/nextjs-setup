FROM node:16.13.2-alpine as build 
#Check nvm version before updating above image version
WORKDIR /build
COPY package.json .
RUN npm install
COPY . .
RUN npm run build


FROM node:16.13.2-alpine as app
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/.next ./.next
COPY --from=build /build/package*.json ./
COPY --from=build /build/public ./public
COPY --from=build /build/next.config.js ./
COPY --from=build /build/node_modules ./node_modules/.
EXPOSE 3000
CMD ["npm" , "run" , "start"]
