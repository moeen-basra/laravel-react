<?php

use Illuminate\Support\Facades\Route;

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

// default name space for all routes is 'App\Http\Controllers\Api'

$api_version = config('api.api_version');

Route::group(["prefix" => "{$api_version}"], function() {
    // register auth routes
    Route::prefix('auth')
        ->group(base_path('routes/api/auth.php'));
    // register users routes
    Route::prefix('users')
        ->group(base_path('routes/api/users.php'));
    // register articles routes
    Route::prefix('articles')
        ->group(base_path('routes/api/articles.php'));
});

/*Route::post('auth/register', 'Auth\RegisterController@register')->name('auth.register');
Route::post('auth/login', 'Auth\LoginController@login')->name('auth.login');
Route::get('articles/published', 'ArticleController@publishedArticles')->name('articles.published.index');
Route::get('articles/published/{id}', 'ArticleController@publishedArticle')->name('articles.published.show');

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::patch('/users/{id}', 'UserController@update')->name('users.update');

    Route::resource('articles', 'ArticleController', ['except' => ['edit', 'create']]);

    Route::delete('/auth/logout', 'Auth\LoginController@logout')->name('auth.logout');;
});*/
