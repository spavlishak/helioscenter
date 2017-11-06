FROM node:8.7.0

WORKDIR usr/src/helioscenter

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"]
