FROM node:19-alpine
ENV NODE_ENV=production
WORKDIR /code
COPY package*json ./
RUN npm install --production --legacy-peer-deps
COPY . .
CMD ["npm", "start"]