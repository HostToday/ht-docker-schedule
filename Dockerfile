FROM hosttoday/ht-docker-node
COPY app-node/dist /app-node/dist
COPY app-node/package.json /app-node/package.json
WORKDIR /app-node
RUN npm install --production
CMD ["npm","start"]