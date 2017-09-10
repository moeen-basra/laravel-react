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

Route::post('/auth/register', 'Auth\RegisterController@register');
Route::post('/auth/login', 'Api\Auth\LoginController@login');

Route::group(['middleware' => 'auth:api', 'namespace' => 'Api'], function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::patch('/users/{id}', 'UserController@update');

    Route::resource('articles', 'ArticleController');
//
//    Route::get('/articles', 'ArticleController@index');
//
//    Route::get('/articles/{id}', function ($id) {
//        return Article::findOrFail($id);
//    });
//
//    Route::put('/articles/{id}', 'ArticleController@update');
//
//    Route::delete('/articles/{id}', function ($id) {
//        $article = Article::findOrFail($id);
//
//        $article->delete();
//
//        return response('Article Deleted.', 200);
//    });

    Route::delete('/auth/logout', 'Auth\LoginController@logout');
});
