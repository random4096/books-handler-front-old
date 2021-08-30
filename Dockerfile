FROM nginx:1.21.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/books-handler /usr/share/nginx/html

