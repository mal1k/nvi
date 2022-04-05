<?php
use Illuminate\Support\Facades\Route;

$namespaces = 'App\Http\Controllers';

Route::get('/plans/{path?}/{path1?}/{path2?}/{path3?}/{path4?}', '\App\Http\Controllers\PlanController@index');

// Route::group(['middleware' => ['web', 'tenant.exists']], function () {
//     Route::get('/register/plans', 'App\Http\Controllers\FrontendController@plans');
//     Route::get('/register/payment-method/{subscription_id}', 'App\Http\Controllers\FrontendController@paymentMethod');
// });

