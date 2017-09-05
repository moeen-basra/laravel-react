<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## Laravel 5.4 & React boilerplate

Please follow the guide.

1. `git clone`
2. `update the .env file along with database connection`
3. `composer install && composer update`
4. `php artisan migrate`
5. `php artisan db:seed`
6. `npm install`

open a terminal window and install the passport using following command

 ```
 php artisan passport:install
 ```
 
copy the keys for personal and password grants in .env file

```
PERSONAL_CLIENT_ID=1

PERSONAL_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

PASSWORD_CLIENT_ID=2

PASSWORD_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

set the APP_URL in .env file (e.g)

```
APP_URL=http://localhost:8000
```

then run the following command on terminal to compile the assets

`npm run watch` or `npm run watch-poll`

on 2nd terminal window use following command to run server

```
php artisan serve
```

for complete list of instruction follow the link below
[Laravel Mix](https://laravel.com/docs/5.4/mix#running-mix)


TODO:

- [x] Add Redux
- [x] Add Passport for authentication
- [x] Implement user login
- [ ] Implement user register
- [ ] Implement users crud
- [ ] Implement articles crud
