<?php
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'api/plans','middleware' => ['web','verify.payment']], function () {

    Route::get('/select/{id}', 'PlanController@selectPlan');

    Route::group(['prefix' => ''], function () {
        Route::post('search', '\App\Http\Controllers\PlanController@search');
        Route::post('store', '\App\Http\Controllers\PlanController@store')->middleware(['auth','role:admin|super_admin']);
        Route::post('update', '\App\Http\Controllers\PlanController@update')->middleware(['auth','role:admin|super_admin']);
        Route::get('show/{id}', '\App\Http\Controllers\PlanController@details')->middleware(['auth','role:admin|super_admin']);
        Route::delete('delete/{id}', '\App\Http\Controllers\PlanController@destroy')->middleware(['auth','role:admin|super_admin']);
    });
});

Route::get('/api/plans/type', '\App\Http\Controllers\PlanController@planTypes');
