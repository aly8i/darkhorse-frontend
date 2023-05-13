FROM node:14.17.0-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

# test mahdi

EXPOSE 3000

CMD ["npm", "start"]