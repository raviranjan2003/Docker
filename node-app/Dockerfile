#Specify base image
# FROM alpine

# we use alpine version of node ==> as small/compact as possible
FROM node:21-alpine

# Download and install the dependency
COPY ./ ./
RUN npm install

# but here is a problem, as we are using alpine as a base-image
# alpine is a very small image, which doesn't have npm pre-install
# so, there are two ways to solve the same problem, 
# either we create our own image from scratch or use someone else image

# here we're using someone else image which is available at docker-hub


#default command
CMD [ "npm", "start" ]