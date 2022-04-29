FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY . .
RUN npm install @angular/cli && npm install

# FROM node:10 AS server-build
# WORKDIR /root/
# COPY --from=ui-build /usr/src/app/my-app/dist ./dist
# COPY package*.json ./
# RUN npm install
# COPY server.js .

EXPOSE 5000

CMD ["npm", "run", "start"]