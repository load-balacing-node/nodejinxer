FROM mhart/alpine-node:12.9.1

COPY package*.json ./

WORKDIR /opt

COPY . .

RUN npm install

EXPOSE 8000
CMD ["node", "server.js"]