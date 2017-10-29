<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## Laravel 5.5 and React boilerplate

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

Either create a local dev url and map the link in webpack.mix.js file or open an other terminal window and copy paste the following command

```
php artisan serve
```

then run the following command on terminal to compile the assets

```
npm run dev
```

or if you would like to compile assets on runtime then copy paste following command in terminal 

`npm run watch` or `npm run watch-poll`


for complete list of instruction follow the link below
[Laravel Mix](https://laravel.com/docs/5.4/mix#running-mix)


TODO:

- [x] Add Redux
- [x] Add Passport for authentication
- [x] User Login
- [x] User Register
- [x] Users Crud
- [x] Articles Crud
- [x] Form validation Client and Server
- [ ] Reset Password
- [x] Tests
- [x] Upgrade to Laravel 5.5
- [x] Upgrade to React 16