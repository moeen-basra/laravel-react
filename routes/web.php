<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

// Authentication Routes...
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes...
Route::post('register', 'Auth\RegisterController@register');

// Password Reset Routes...
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.reset');

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');