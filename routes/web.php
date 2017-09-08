<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get( '/{any}', function () {
    return view('index');
})->where('any', '.*');

//Route::get('/', function () {
//    return view('index');
//});
//
//Route::get('/{slug}', function () {
//    return view('index');
//});
//
//Route::get('/articles/{id}/edit', function ($id) {
//    return view('index', compact('id'));
//});

//Auth::routes();

//Route::get('/home', 'HomeController@index');

