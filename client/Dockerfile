FROM node:lts AS development

ENV PORT=3001

WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm ci
COPY . /code

CMD [ "NPM", "START" ]