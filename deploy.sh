#!/bin/bash

docker build -t zireael/basic-node /nodejinxer-nodejs

docker push zireael/basic-node

docker build -t zireael/nginx-balanced /nodejinxer-nginx

docker push zireael/nginx-balanced