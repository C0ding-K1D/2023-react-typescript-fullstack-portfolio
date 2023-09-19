FROM node:18-alpine

# We don't need the standalone Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN apk add netcat-openbsd

WORKDIR /app

COPY ./ ./

RUN npm install puppeteer

RUN npm install 

COPY wait-for-db.sh /wait-for-db.sh

RUN chmod +x /wait-for-db.sh

ENTRYPOINT [ "/wait-for-db.sh" ] 