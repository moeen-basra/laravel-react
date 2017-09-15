<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\User;
use App\Article;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('auth/register', 'Api\Auth\RegisterController@register')->name('auth.register');
Route::post('auth/login', 'Api\Auth\LoginController@login')->name('auth.login');
Route::get('articles', 'Api\ArticleController@index')->name('articles.index');

Route::group(['middleware' => 'auth:api', 'namespace' => 'Api'], function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::patch('/users/{id}', 'UserController@update')->name('users.update');

    Route::resource('articles', 'ArticleController', ['except' => ['index', 'edit', 'create']]);

    Route::delete('/auth/logout', 'Auth\LoginController@logout')->name('auth.logout');;
});
