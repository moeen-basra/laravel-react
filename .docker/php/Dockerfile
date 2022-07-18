FROM moeenbasra/php-fpm-alpine:latest

ARG folder

# install nodejs and npm
RUN apk add nodejs npm

# ADD and set Group
RUN mkdir -p "/var/www/${folder}" \
    && chown $USER:$USER "/var/www/${folder}"

WORKDIR "/var/www/${folder}"

COPY .docker/php/*.ini /usr/local/etc/php/conf.d/
COPY *.json *.lock ./

RUN composer install --no-dev --no-scripts && npm i -g typescript && npm i