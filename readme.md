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

open two terminal window

on 1st terminal use following command to mix and watch the assets

`npm run watch-poll`

on 2nd terminal use following command to run server

`php artisan serve`

for complete list of instruction follow the link below
[Laravel Mix](https://laravel.com/docs/5.4/mix#running-mix)


TODO:

- [x] Add API to communicate with laravel.
- [ ] Add Passport for authentication.
- [ ] Add Redux