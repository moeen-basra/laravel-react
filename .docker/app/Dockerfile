FROM php:fpm-alpine

# Build Arguments
ARG user=laravel
ARG uid=1000
ARG xdebug_remote_host=docker.for.mac.localhost
ARG xdebug_port=9001

# Set Build Environment Variables
ENV USER=${user}
ENV XDEBUG_REMOTE_HOST=${xdebug_remote_host}
ENV XDEBUG_PORT=${xdebug_port}

# ADD and set Group
RUN addgroup -g $uid $user && adduser -G $user -g $user -s /bin/sh -D $user \
&& mkdir -p /var/www/app \
&& chown $user:$user /var/www/app

# Install PHP extensions
ADD ./.docker/app/install-php.sh /usr/sbin/install-php.sh
RUN chmod +x /usr/sbin/install-php.sh \
    && /usr/sbin/install-php.sh

# # Copy existing application directory contents
# ADD ./.docker/app/*.ini /usr/local/etc/php/conf.d/
# COPY . .

# # install nodejs and npm
# RUN apk add nodejs npm

EXPOSE 9000
CMD ["php-fpm"]