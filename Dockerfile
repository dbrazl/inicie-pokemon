FROM node:alpine
WORKDIR .
COPY package*.json ./
COPY . .
RUN yarn
EXPOSE 4200
CMD ["yarn", "start:prod"]
