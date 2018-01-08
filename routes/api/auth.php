<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('register', 'Auth\RegisterController@register')->name('auth.register');
Route::post('login', 'Auth\LoginController@login')->name('auth.login');

Route::group(['middleware' => 'auth:api'], function() {
    Route::delete('/logout', 'Auth\LoginController@logout')->name('auth.logout');;

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});