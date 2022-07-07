#!/bin/sh

apk add --update --no-cache $PHPIZE_DEPS \
    bzip2-dev freetype-dev icu-dev jpeg-dev libjpeg-turbo-dev libmemcached-dev libpng-dev libxml2-dev libzip-dev openldap-dev postgresql-dev \
    freetype \
    libpng \
    libjpeg-turbo \
    zip


docker-php-ext-configure gd --with-freetype --with-jpeg \
    && NPROC=$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) \
    && docker-php-ext-install -j${NPROC} gd \
    && docker-php-ext-install bcmath bz2 intl ldap pcntl pdo_mysql pdo_pgsql soap sockets xml zip


# Install php pickle replacement for pecl
curl -sSLo /usr/local/bin/pickle https://github.com/FriendsOfPHP/pickle/releases/latest/download/pickle.phar
chmod +x /usr/local/bin/pickle
pickle install -n --defaults igbinary
pickle install -n --defaults memcached
pickle install -n --defaults redis
pickle install -n --defaults xmlrpc
pickle install -n --defaults xdebug

docker-php-ext-enable igbinary memcached redis xmlrpc xdebug > /dev/null

sed -i "s/user = www-data/user = ${USER}/g" /usr/local/etc/php-fpm.d/www.conf
sed -i "s/group = www-data/group = ${USER}/g" /usr/local/etc/php-fpm.d/www.conf
echo "remote_host=${XDEBUG_REMOTE_HOST}
remote_port=${XDEBUG_PORT}
remote_enable=1
idekey=IDE_DEBUG
error_reporting=E_ALL
display_startup_errors=On
display_errors=On" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

# Install composer
curl --silent --show-error https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
# Install php unit
curl -sSL -o /usr/bin/phpunit https://phar.phpunit.de/phpunit.phar && chmod +x /usr/bin/phpunit

apk del $TMP

# # Set timezone
# #RUN echo Asia/Karachi > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata
