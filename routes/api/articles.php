<?php

use Illuminate\Support\Facades\Route;

Route::get('published', 'ArticleController@publishedArticles')->name('articles.published.index');
Route::get('published/{id}', 'ArticleController@publishedArticle')->name('articles.published.show');

Route::group(['middleware' => 'auth:api'], function() {
    Route::apiResource('/', 'ArticleController');
});