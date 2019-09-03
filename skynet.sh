#!/bin/bash

#Define cleanup procedure
cleanup() {
    echo "Container stopped, logging data..."
}

#Trap SIGTERM
trap 'true' SIGTERM

#Execute command
"docker cp /var/log/nginx:/var/log/nginx" &

#Wait
wait $!

#Cleanup
cleanup