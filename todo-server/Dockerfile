FROM node:18-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile
COPY . .
RUN yarn build
CMD ["node", "dist/index.js"]
EXPOSE 8080
