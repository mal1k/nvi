<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();

        $this->mapAccountingRoutes();

        $this->mapPlanRoutes();
        $this->mapSubscriptionRoutes();
        // $this->mapOrderRoutes();

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
             ->namespace($this->namespace)
             ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
             ->middleware('api')
             ->namespace($this->namespace)
             ->group(base_path('routes/api.php'));
    }

    protected function mapAccountingRoutes()
    {
        Route::prefix('')->middleware(['web'])->group(base_path('routes/accounting/accounting-routes.php'));
    }

    protected function mapPlanRoutes()
    {
        Route::prefix('')->middleware(['web', 'verify.payment'])->group(base_path('routes/plan/web.php'));
        
        Route::namespace($this->namespace)
            ->group(base_path('routes/plan/api.php'));

    }

    protected function mapSubscriptionRoutes()
    {
        Route::prefix('')->middleware(['web','verify.payment'])->group(base_path('routes/subscription/web.php'));
        
        Route::namespace($this->namespace)
            ->group(base_path('routes/subscription/api.php'));
    }
}
