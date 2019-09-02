FROM nginx:1.17.3-alpine

WORKDIR /var/www/html

COPY config/default.conf /etc/nginx/conf.d/default.conf

COPY src/ ./

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]