<?php

use Properos\Base\Classes\Helper;
use Illuminate\Support\Facades\Route;

$prefix = config('properos_accounting.router.default.prefix');
$middleware = config('properos_accounting.router.default.middleware');
$namespaces = config('properos_accounting.router.default.namespaces');

Route::namespace($namespaces)->middleware('api')->prefix(Helper::getValue($prefix, 'api', '/'))->group(function () use ($middleware) {
});

Route::namespace($namespaces)->middleware('web')->prefix(Helper::getValue($prefix, 'web', '/'))->group(function () use ($middleware) {
    Route::get('/transactions/{path?}/{path1?}/{path2?}/{path3?}/{path4?}', 'TransactionController@index');
});

Route::namespace($namespaces)->middleware(['web'])->prefix(Helper::getValue($prefix, 'admin_web', '/'))->group(function () use ($middleware) {
    Route::group(['prefix' => '/ledgers'], function () {
        Route::get('/', 'LedgerController@index');
        Route::get('/create', 'LedgerController@create');
        Route::get('/edit/{id}', 'LedgerController@edit');
    });

    Route::group(['prefix' => '/transactions'], function () {
        Route::get('/', 'TransactionController@index');
    });
});

Route::namespace($namespaces)->middleware(['web'])->prefix('/api')->group(function () use ($middleware) {

    Route::group(['prefix' => '/my'], function () {
        Route::group(['prefix' => '/ledgers'], function () {
            Route::post('/search', 'LedgerController@listAsOwner');
        });

        Route::group(['prefix' => '/transactions'], function () {
            Route::post('/search', 'TransactionController@listAsOwner');
        });
    });

    Route::group(['prefix' => '/ledgers'], function () {
        Route::post('/search', 'LedgerController@list');
    });

    Route::group(['prefix' => '/transactions'], function () {
        Route::post('/search', 'TransactionController@list');
    });
});

Route::namespace($namespaces)->middleware(['web'])->prefix(Helper::getValue($prefix, 'web', '/'))->group(function () use ($middleware) {

    Route::group(['prefix' => '/api/my/payment/profile'], function () {
        Route::post('', 'PaymentController@addPaymentProfileAsOwner');
        Route::post('pay', 'PaymentController@payWithProfileAsOwner');
        Route::post('{id}/remove', 'PaymentController@removePaymentProfileAsOwner');
        Route::post('{id}/set-default', 'PaymentController@setDefaultPaymentAsOwner');
    });

    Route::group(['prefix' => '/api/payment'], function () {
        Route::post('pay-with-cash', 'PaymentController@payWithCash');
        Route::post('pay', 'PaymentController@payWithoutProfile');

        Route::group(['prefix' => '/profile'], function () {
            Route::post('', 'PaymentController@addPaymentProfile');
            Route::post('pay', 'PaymentController@payWithProfile');
            Route::post('create-and-pay', 'PaymentController@addPaymentProfileAndPay');
            Route::post('{id}/remove', 'PaymentController@removePaymentProfile');
            Route::post('{id}/set-default', 'PaymentController@setDefaultPayment');
        });
    });

    Route::group(['prefix' => '/api/profiles'], function () {
        Route::get('', 'PaymentController@listAsOwner');
        Route::get('/{user_id}', 'PaymentController@list')->middleware('role:admin');
    });
});
