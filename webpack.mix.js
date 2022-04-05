let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   //BE
   .js('resources/assets/js/be/modules/users/js/user.js', 'public/be/js/modules/user.js')
   .js('resources/assets/js/be/modules/accounts/js/account.js', 'public/be/js/modules/account.js')
   .js('resources/assets/js/be/modules/securities/js/security.js', 'public/be/js/modules/security.js')
   .js('resources/assets/js/be/modules/holdings/js/holding.js', 'public/be/js/modules/holding.js')
   .js('resources/assets/js/be/modules/dashboard/js/dashboard.js', 'public/be/js/modules/dashboard.js')
   .js('resources/assets/js/be/modules/withdraws/js/withdraws.js', 'public/be/js/modules/withdraws.js')
   .js('resources/js/be/modules/plans/js/plan.js', 'public/be/js/modules/plan.js')
   //FE-UI
   .js('resources/assets/js/be/modules/ui/js/ui.js', 'public/be/js/modules/ui.js')
   //FE
   .js('resources/js/fe/modules/auth/js/auth.js', 'public/fe/js/modules/auth.js')
   .js('resources/assets/js/fe/modules/accounts/js/account.js', 'public/fe/js/modules/account.js')
   .js('resources/assets/js/fe/modules/deposit/js/deposit.js', 'public/fe/js/modules/deposit.js')
   .js('resources/assets/js/fe/modules/profile/js/profile.js', 'public/fe/js/modules/profile.js')
   .js('resources/assets/js/fe/modules/withdraw/js/withdraw.js', 'public/fe/js/modules/withdraw.js')
   .js('resources/assets/js/fe/modules/securities/js/security.js', 'public/fe/js/modules/security.js')
   .js('resources/assets/js/fe/modules/holdings/js/holding.js', 'public/fe/js/modules/holding.js')
   .js('resources/assets/js/fe/modules/simulation/js/simulation.js', 'public/fe/js/modules/simulation.js')
   .js('resources/assets/js/fe/modules/dashboard/js/dashboard.js', 'public/fe/js/modules/dashboard.js')
   .js('resources/assets/js/fe/modules/accounting/js/accounting.js', 'public/fe/js/modules/accounting.js')
   //FE-UI
   .js('resources/assets/js/fe/modules/ui/js/ui.js', 'public/fe/js/modules/ui.js')
   //GLOBAL
   .js('resources/assets/js/bootstrap.js', 'public/be/js/core.js')
   .sass('resources/assets/js/be/sass/app.scss', 'public/be/css')
   .sass('resources/assets/sass/app.scss', 'public/css');

// mix.browserSync({
//    proxy: 'nvi.loc',
// });
