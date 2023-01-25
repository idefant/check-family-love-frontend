FROM node:18.8.0-alpine3.15 AS build

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install
COPY ./ /app

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
