FROM node:lts AS development

ARG = NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /code

ARG PORT = 3000
ENV PORT $PORT
EXPOSE $PORT

COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm ci

COPY . /code/

CMD [ "node", "src/index.js" ]