<?php
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'api/subscriptions','middleware' => ['web','auth','verify.payment']], function () {
    
    Route::post('search', '\App\Http\Controllers\SubscriptionController@search');
    Route::post('store', '\App\Http\Controllers\SubscriptionController@store');
    Route::post('update', '\App\Http\Controllers\SubscriptionController@update');
    Route::post('change', '\App\Http\Controllers\SubscriptionController@changeAsOwner');
    Route::get('show/{id}', '\App\Http\Controllers\SubscriptionController@details');
    Route::post('show/{id}', '\App\Http\Controllers\SubscriptionController@detailsAsOwner');
    Route::delete('delete/{id}', '\App\Http\Controllers\SubscriptionController@destroy');
    
    Route::post('/payment-profile/create-and-pay', 'SubscriptionController@addPaymentAndPay');
    Route::post('/pay-with-profile', 'SubscriptionController@payWithProfile');
    Route::post('/pay-without-profile', 'SubscriptionController@payWithOutProfile');
});