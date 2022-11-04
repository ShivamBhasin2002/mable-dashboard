FROM nginx:alpine

ENV TZ=Europe/Berlin
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ >/etc/timezone

## Copy our default nginx config
COPY deployment/nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

ADD ./build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
