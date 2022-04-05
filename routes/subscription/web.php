<?php
use Illuminate\Support\Facades\Route;

$namespaces = 'App\Http\Controllers';

Route::get('/subscriptions/{path?}/{path1?}/{path2?}/{path3?}/{path4?}', '\App\Http\Controllers\SubscriptionController@index')->middleware('auth');
