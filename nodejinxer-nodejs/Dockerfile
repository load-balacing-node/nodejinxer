FROM mhart/alpine-node:12.9.1

COPY package*.json ./
RUN npm install

WORKDIR /opt

COPY . .

EXPOSE 3000
CMD ["node", "server.js"]