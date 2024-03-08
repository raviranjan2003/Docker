FROM node:alpine

WORKDIR /usr/app

# COPY ./package.json ./   
COPY package.json .

RUN npm install

# COPY ./ ./
COPY . .

CMD [ "npm", "start" ]