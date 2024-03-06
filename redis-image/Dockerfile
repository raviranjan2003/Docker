# Use an existing docker image as base
FROM alpine

# Download and install the dependency
RUN apk add --update redis
RUN apk add --update gcc

## if we change the order of line 5 6 ,
## it will not use the cache, it will re install
## the both dependencies

# Tell the image what to do when it starts as a container
CMD ["redis-server"]