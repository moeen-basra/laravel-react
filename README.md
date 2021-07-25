<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

## Laravel 8 and React 17 boilerplate
There are two different ways to run this demo

Please follow the guide.

## Prerequisite

1. Make sure you have [composer](https://getcomposer.org/download/) installed.
2. Make sure you have latest stable version of [node](https://nodejs.org/en/download/) installed.

### Option 1

1. `git clone`
2. `create a .env file copy content from .env.example and update the values`
3. `composer install && composer update`
4. `php artisan cron:refresh-database`
5. if npm version < 7 `npm install && npm run dev` else `npm install --legacy-peer-deps && npm run dev`
6. `php artisan key:gen`
7. `php artisan serve`

### Option 2

## Prerequisite
Make sure you have [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed on you machine.

1. `git clone`
2. `create a .env file copy content from .env.docker and do not make any change`

run following command in terminal / power shell
```
docker-compose up -d
```

when docker will finish building the containers, access the "laravel-react-app" container using following command

`docker exec -it lr_app sh`

now you will be inside container

run following commands
1. `composer install && composer update`
2. `php artisan cron:refresh-database`
3. `php artisan key:gen`
4. if npm version < 7 `npm install && npm run dev` else `npm install --legacy-peer-deps && npm run dev`

open browser and check the following address

`http://localhost:8100`

TODO:

- [x] Add Redux
- [x] Add Laravel Sanctum for authentication
- [x] User Login
- [x] User Register
- [x] Users Crud
- [x] Articles Crud
- [x] Form validation Client and Server
- [ ] Reset Password
- [x] Tests
- [x] Upgrade to Laravel 7
- [x] Upgrade to React 16.13
- [x] docker



