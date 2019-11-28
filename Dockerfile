FROM node:10

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install

ENV DEVICE_ID A4:CF:12:A0:21:D6
ENV API_ID 528bb634bdf945388bad731e818f73a1d2f532e41e8a416982a48f0a2a818d59
ENV APP_ID efac4ef679294e309cda3938aeaf0fde5a047dbdb0ca4a70ab869dbafb0cd506

EXPOSE 8001

CMD [ "npm", "start" ]
