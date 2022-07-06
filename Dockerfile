FROM php:fpm-alpine

ARG user
ARG uid


# ADD and set Group
RUN addgroup -g $uid $user && adduser -G $user -g $user -s /bin/sh -D $user \
&& mkdir -p /var/www/app \
&& chown $user:$user /var/www/app

# Install PHP extensions
ADD ./.docker/install-php.sh /usr/sbin/install-php.sh
RUN chmod +x /usr/sbin/install-php.sh \
    && /usr/sbin/install-php.sh

# Copy existing application directory contents
ADD ./.docker/*.ini /usr/local/etc/php/conf.d/
COPY . .

EXPOSE 9000
CMD ["php-fpm"]