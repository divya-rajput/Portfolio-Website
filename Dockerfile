FROM node:12-buster
RUN apt-get update
RUN apt-get install -y git build-essential
WORKDIR /var/www/divyarajput
COPY package.json .
RUN npm install
ENV NODE_ENV=production
COPY . .
CMD ["npm", "run", "release"]