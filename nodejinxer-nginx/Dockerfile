FROM nginx

WORKDIR /usr/share/nginx/html

RUN apt-get update && apt-get install -y curl
COPY nginx/config/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]