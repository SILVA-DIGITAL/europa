# Base image
FROM node:18.7.0-slim
WORKDIR /usr/src/app

# Install dependencies
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn

# Copy in application
COPY . .

# Change user from root to node
# after config has been setup
#USER node

EXPOSE 3000

CMD ["yarn", "start"]