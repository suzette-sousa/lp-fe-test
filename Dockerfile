FROM node:18-alpine
WORKDIR /app
COPY ./package*.json .
RUN npm install -ci
RUN npm rebuild node-sass
COPY . .
EXPOSE 3000
USER node
CMD ["npm","run","dev"]
