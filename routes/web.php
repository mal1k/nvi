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

use App\Jobs\MaturityDateJob;
use App\Jobs\MonthlyPaymentJob;

Route::get('/', function () {
    if (\Auth::check()) {
        return redirect(\Auth::user()->roles[0]->url);
    } else {
        return redirect('/login');
    }
});

Route::get('/test', function () {
    dispatch(new MonthlyPaymentJob());
});
Route::get('/test-maturity', function () {
    dispatch(new MaturityDateJob());
});

Route::get('/auth/{path1?}/{path2?}', function(){
    return view('themes.nvi.auth.auth');
});

//Admin
Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'role:super_admin|admin']], function () {
    Route::get('/dashboard', 'Admin\AdminController@index');

    Route::get('/accounts', 'Admin\AdminController@accounts');
    Route::get('/accounts/create', 'Admin\AdminController@createAccount');
    Route::get('/accounts/edit/{account}', 'Admin\AdminController@editAccount');

    Route::get('/securities', 'Admin\AdminController@securities');
    Route::get('/holdings', 'Admin\AdminController@holdings');
    Route::get('/withdraws', 'Admin\AdminController@withdraws');
    Route::get('/securities/create', 'Admin\AdminController@createSecurity');
    Route::get('/securities/edit/{security}', 'Admin\AdminController@editSecurity');
    Route::get('/securities/pay/{security}', 'Admin\AdminController@paySecurity');
});

Route::group(['prefix' => 'api/admin', 'middleware' => ['auth', 'role:super_admin|admin']], function () {
    Route::delete('/users/remove-avatar/{user}', 'Admin\ApiAdminController@removeUserAvatar');
    Route::post('/add-funds', 'Admin\ApiAdminController@addFunds');
    Route::post('/withdraw-cash', 'Admin\ApiAdminController@withdrawCash');

});

//Investor
Route::group(['prefix' => 'investor', 'middleware' => ['auth', 'role:investor|super_admin|admin', 'verify.payment']], function () {
    Route::get('/dashboard', 'Investment\InvestmentController@index');
    Route::get('/accounts', 'Investment\InvestmentController@accounts');
    Route::get('/deposit', 'Investment\InvestmentController@deposit');
    Route::get('/withdraw', 'Investment\InvestmentController@withdraw');
    Route::get('/holdings', 'Investment\InvestmentController@holdings');
    Route::get('/available', 'Investment\InvestmentController@available');
    Route::get('/simulation', 'Investment\InvestmentController@simulation');
    Route::get('/profile', 'Investment\InvestmentController@showProfile');
});

Route::group(['prefix' => 'api/investor', 'middleware' => ['auth', 'role:investor|super_admin|admin']], function () {
    Route::post('/add-funds', 'Investment\ApiInvestmentController@addFunds');
    Route::post('/withdraw-cash', 'Investment\ApiInvestmentController@withdrawCash');
    Route::post('/buy-security', 'Investment\ApiInvestmentController@buySecurity');
    Route::post('/sell-holding', 'Investment\ApiInvestmentController@sellHolding');
    Route::post('/simulate', 'Investment\ApiInvestmentController@simSecurity');
    Route::post('/graph-info', 'Investment\ApiInvestmentController@graphInfo');
    Route::post('/table-info', 'Investment\ApiInvestmentController@tableInfo');
    Route::post('/my-profile/update', 'Investment\ApiInvestmentController@updateProfile');
    Route::post('/my-profile/change-password', 'Investment\ApiInvestmentController@changePassword');
});

//Dashboard
Route::group(['prefix' => 'api/dashboard', 'middleware' => ['auth', 'role:investor|super_admin|admin']], function () {
    Route::post('/dashboard-cards', 'Dashboard\DashboardController@cards');
});

//Account
Route::group(['prefix' => 'api/account', 'middleware' => ['auth']], function () {
    Route::post('/search', 'Account\ApiAccountController@index')->middleware(['role:admin|super_admin|investor']);
    Route::post('/store', 'Account\ApiAccountController@store')->middleware(['role:admin|super_admin']);
    Route::post('/update', 'Account\ApiAccountController@update')->middleware(['role:admin|super_admin']);
    Route::get('/show/{id}', 'Account\ApiAccountController@show')->middleware(['role:admin|super_admin|investor']);
    Route::get('/get-transactions/{id}', 'Account\ApiAccountController@getTransactions')->middleware(['role:admin|super_admin|investor']);
    Route::get('/user', 'Account\ApiAccountController@getUserAccount')->middleware(['role:admin|super_admin|investor']);
});

//Securities
Route::group(['prefix' => 'api/security', 'middleware' => ['auth']], function () {
    Route::post('/search', 'Security\ApiSecurityController@index')->middleware(['role:admin|super_admin|investor']);
    Route::post('/store', 'Security\ApiSecurityController@store')->middleware(['role:admin|super_admin']);
    Route::post('/update', 'Security\ApiSecurityController@update')->middleware(['role:admin|super_admin']);
    Route::post('/modify-shares', 'Security\ApiSecurityController@modifyShares')->middleware(['role:admin|super_admin']);
    Route::post('/get-initial-values', 'Security\ApiSecurityController@getInitialValues');
    Route::post('/get-unblock-amount', 'Security\ApiSecurityController@getUnblockAmount');
    Route::post('/pay-unblock-amount', 'Security\ApiSecurityController@payUnblockAmount');
});

//Holdings
Route::group(['prefix' => 'api/holding', 'middleware' => ['auth']], function () {
    Route::post('/search', 'Holding\ApiHoldingController@index')->middleware(['role:admin|super_admin|investor']);
});

//Withdraws
Route::group(['prefix' => 'api/withdraws', 'middleware' => ['auth']], function () {
    Route::post('/search', 'Admin\ApiAdminController@withdrwasList')->middleware(['role:admin|super_admin']);
    Route::post('/complete', 'Admin\ApiAdminController@completeWithdraws')->middleware(['role:admin|super_admin']);
});

$namespaces = 'Properos\Users\Controllers';

Route::middleware('api')->prefix('api/v1')->group(function(){
    Route::post('login', '\Properos\Users\Controllers\LoginController@apiLogin');
    Route::post('register', '\Properos\Users\Controllers\RegisterController@apiRegister');
    
    Route::post('password/email', '\Properos\Users\Controllers\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', '\Properos\Users\Controllers\ResetPasswordController@reset');

    Route::group(['prefix' => '', 'middleware' => 'auth:api'], function () {
        Route::post('logout', '\Properos\Users\Controllers\LoginController@apiLogout');
        Route::post('/update-profile', '\Properos\Users\Controllers\ApiUserController@updateProfile');
        Route::put('/change-user-password/{id}', '\Properos\Users\Controllers\ApiUserController@changeUserPassword');
    });
});

Route::group(['prefix' => 'api/orders','middleware' => ['web','verify.payment']], function () {

    Route::post('search', '\App\Http\Controllers\OrderController@search');
    Route::post('store', '\App\Http\Controllers\OrderController@store')->middleware(['auth','role:admin']);
    Route::post('store-and-pay', '\App\Http\Controllers\OrderController@storeAndPay')->middleware(['auth']);
    Route::post('update', '\App\Http\Controllers\OrderController@update')->middleware(['auth','role:admin']);
    Route::get('show/{id}', '\App\Http\Controllers\OrderController@details')->middleware(['auth','role:admin']);
    Route::delete('delete/{id}', '\App\Http\Controllers\OrderController@destroy')->middleware(['auth','role:admin']);
    Route::post('refund', '\App\Http\Controllers\OrderController@refund');
    Route::post('void', '\App\Http\Controllers\OrderController@void');
});

