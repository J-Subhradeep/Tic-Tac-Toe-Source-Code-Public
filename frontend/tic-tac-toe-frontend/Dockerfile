FROM node:18
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY vite.config.js ./
COPY .eslintrc.cjs ./
COPY ./ ./
RUN npm i -g yarn --force
# RUN yarn install
RUN npm i -g serve
# RUN npm run build
