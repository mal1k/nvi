<?php

namespace App\Http\Middleware;

use App\Models\Subscription;
use Closure;
use Properos\Accounting\Models\PaymentProfile;
use Properos\Base\Classes\Api;
use Properos\Base\Exceptions\ApiException;

class CheckPaymentMethod
{
    protected $except = [
        '/',
        '/register/*',
        '/login',
        '/api/plans/*',
        '/api/subscriptions/*',
        '/api/orders/store-and-pay',
        '/api/my/payment/profile',
        '/logout'
    ];

    /**
     * Determine if the request has a URI that should pass through CSRF verification.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return bool
     */
    protected function inExceptArray($request)
    {
        foreach ($this->except as $except) {
            if ($except !== '/') {
                $except = trim($except, '/');
            }
            if ($request->fullUrlIs($except) || $request->is($except)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $this->except = [
            '/',
            '/register/*',
            '/login',
            '/logout',
            '/password/reset',
            '/password/reset/*',
            '/password/email',
            '/locked'
        ];

        if($this->inExceptArray($request)){
            return $next($request);
        }

        if(\Auth::check()){

            $this->except = [
                '/',
                '/register/*',
                '/login',
                '/api/plans/*',
                '/api/subscriptions/*',
                '/api/orders/store-and-pay',
                '/api/my/payment/profile/*',
                '/logout',
                '/password/reset',
                '/password/reset/*',
                '/password/email',
                '/locked',
                '/api/profiles'
            ];

            if(\Auth::user()->hasRole('super_admin') || \Auth::user()->hasRole('admin') || $this->inExceptArray($request)){
                return $next($request);
            }
            
            if(!session('registered') || session('registered') == 0){

                session(['registered' => 0]);

                $subscription = Subscription::where([
                    ['owner_type', 'user'],
                    ['owner_id', \Auth::user()->id],
                ])->orderBy('created_at', 'DESC')->first();

                if(!$subscription){
                    return redirect('/auth/plans')->send();
                }

                if($subscription->status == 'locked'){
                    return redirect('/locked');
                }
                
                $payment_method = PaymentProfile::where([
                    ['owner_type', 'user'],
                    ['owner_id', \Auth::user()->id]
                ])->where('payment_processor', env("CARD_PROCESSOR"))->first();
                
                if(!$payment_method && $subscription->price > 0 && !($subscription->status == 'active' || $subscription->status == 'trial')){
                    return redirect('/auth/payment-method/'.$subscription->id)->send();
                }

                if($subscription->status == 'expired' || $subscription->status == 'pending'){
                    return redirect('/auth/pay-subscription/'.$subscription->id);
                }

                if($payment_method && !($subscription->status == 'active' || $subscription->status == 'trial')){
                    return redirect('/locked');
                }

                session(['registered' => 1]);
            }
            return $next($request);
        }

        if($request->ajax()){
            throw new ApiException('Unathutenticated', '401', [], [], 401);
        }
        return redirect('/login');
    }
}
