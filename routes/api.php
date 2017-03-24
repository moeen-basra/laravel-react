<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', function () {
    return \App\User::all();
});

Route::get('/articles', function () {
    return \App\Article::paginate(50);
});

Route::get('/articles/{id}', function ($id) {
    return \App\Article::findOrFail($id);
});

Route::put('/articles/{id}', function ($id, Request $request) {
    $article = \App\Article::findOrFail($id);

    $article->title = $request->get('title');
    $article->slug = $request->get('slug');
    $article->content = $request->get('content');
    $article->save();

    return response('Article Updated!', 200);
});

Route::delete('/articles/{id}', function ($id) {
    $article = \App\Article::findOrFail($id);

    $article->delete();

    return response('Article Deleted.', 200);
});