<?php

namespace App\Console\Commands;

use App\Classes\COrder;
use App\Models\Order;
use App\Models\Subscription;
use Illuminate\Console\Command;
use Properos\Accounting\Classes\CPaymentProfile;
use Properos\Accounting\Models\PaymentProfile;
use Properos\Accounting\Models\Transaction;
use Properos\Base\Classes\Theme;
use Properos\Base\Exceptions\ApiException;
use Properos\Commerce\Jobs\SubscriptionExpired;
use Properos\Users\Models\User;

class ChargeSubscriptions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'subscription:charge';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Charge the pending subscriptions';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $subcriptions =  Subscription::whereRaw("substr(`expires_at`, 1, 10) < '".date('Y-m-d')."'")
                                                ->where(function ($query) {
                                                    $query->where('status', 'trial')
                                                            ->orWhere('status', 'active')
                                                            ->orWhere('status', 'pending');
                                                })->where('interval_count','>',0)->get();
            
        if (count($subcriptions)) {
            //Change subscription status to expired and send email to user
            foreach ($subcriptions as $subs) {
                $subs->status = 'expired';
                $subs->save();

                $user = User::where('id',$subs->owner_id)->first();

                // \Mail::send('themes.'.Theme::get().'.emails.subscription-expired', ['user'=>$user], function ($message) use ($user) {
                //     $message->to($user->email);
                //     $message->subject(env('APP_NAME', 'Properos'). ' - Expired Subscription');
                // });
            }
        }

        $subscriptions = Subscription::whereRaw("substr(`next_billing_date`, 1, 10) <= '".date('Y-m-d')."'")
                                        ->where(function ($query) {
                                            $query->where('status', 'trial')
                                                    ->orWhere('status', 'active');
                                        })->with('plan', 'next_plan')->get();
                                        
        if (count($subscriptions) >0) {
        //Charge subscriptions
        
            foreach($subscriptions as $subs){
                if($subs->total_payments == 0 || $subs->total_payments > $subs->payments_made){

                    $user = User::where('id',$subs->owner_id)->first();

                    if(!$user){
                        continue;
                    }
                    $description = 'Subscription';
                   
                    if ($subs->current_plan_id > 0 && ($subs->next_plan_id == null || $subs->next_plan_id == 0)) {
                        $name = $subs->plan->title;
                        $description = $subs->plan->title.' - '.$subs->plan->description;
                    } elseif ($subs->next_plan_id > 0) {
                        $name = $subs->next_plan->title;
                        $description = $subs->next_plan->title.' - '.$subs->next_plan->description;
                        
                    }

                    if ($subs->next_plan_id > 0) {
                        $plan = $subs->next_plan;
                        $subs->free_records  = $subs->next_plan->free_records;
                    } else {
                        $plan = $subs->plan;
                        $plan->price = $subs->price;
                    }

                    $total = ($subs->next_plan_id == 0) ? $subs->price : $subs->next_plan->min_price;

                    if($total <= 0){
                        if ($plan) {
                            switch ($plan->interval) {
                                case 'day':
                                    $subs->next_billing_date = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+1 day'));
                                    break;
                                case 'weekly':
                                    $subs->next_billing_date = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+7 days'));
                                    break;
                                case 'month':
                                    $subs->next_billing_date = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+'.$plan->interval_count.' month'));
                                    break;
                                case 'year':
                                    $subs->next_billing_date = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+'.$plan->interval_count.' year'));
                                    break;
                            }
                        }else{
                            switch ($subs->interval) {
                                case 'day':
                                    $subs->next_billing_date = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+1 day'));
                                    break;
                                case 'weekly':
                                    $subs->next_billing_date = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+7 days'));
                                    break;
                                case 'month':
                                    $subs->next_billing_date = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+'.$subs->interval_count.' month'));
                                    break;
                                case 'year':
                                    $subs->next_billing_date = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+'.$subs->interval_count.' year'));
                                    break;
                            }
                        }
                        
                        $subs->expires_at = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+'.($subs->days_to_pay+$subs->grace_days).' day'));
                        $subs->last_payment_date = date('Y-m-d H:i:s');
                        $subs->next_payment_date = $subs->next_billing_date;

                        if ($subs->next_plan_id != null && $subs->next_plan_id > 0) {
                            $subs->last_plan_id = $subs->current_plan_id;
                            $subs->current_plan_id = $subs->next_plan_id;
                            $subs->next_plan_id = 0;
                        }
                        $subs->free_records_consumed = 0;
                        $subs->data = $plan;
                        $subs->last_payment = $total;
                        $subs->price = $plan->price;

                        $subs->save();

                        continue;
                    }

                    
                    $order = Order::where('order_type','subscription')
                        ->whereRaw("substr(`created_at`, 1, 10) = '".substr($subs->next_billing_date, 0, 10)."'")
                        ->where([['created_at','<=',$subs->expires_at]])
                        ->where('user_id', $subs->owner_id)
                        ->where('paid_amount', '<',1)
                        ->whereHas('orderItems', function($q) use($subs){
                            $q->where('owner_id', $subs->id)->where('owner_type','subscription');
                        })->first();


                    if (!$order) {
                        $items = [];

                        $items[] = [
                            'owner_type' => 'subscription',
                            'owner_id' => $subs->id,
                            'description' => $description,
                            'qty' => 1,
                            'price' => $total,
                            'name' => $name
                        ];
                        
                        $data = [
                            'user_id' => $user->id,
                            'creator_id' => 0,
                            'order_type' => 'subscription',
                            'customer_name' => $user->firstname.' '.$user->lastname,
                            'customer_email' =>  $user->email,
                            'customer_phone' =>  $user->phone,
                            'customer_company' =>  $user->company,
                            'amount' => $total,
                            'order_items'=> $items,
                            'payment_method_id' => ($subs->payment_profile_id > 0) ? $subs->payment_profile_id : null,
                        ];

                        $cOrder = new COrder();
                        $order = $cOrder->create($data);
                    }
                   
                    $payment_profiles = PaymentProfile::where([
                        ['owner_type', 'user'],
                        ['owner_id', $user->id],
                        ])->where('payment_processor', env("CARD_PROCESSOR"))->orderBy('id', 'DESC')->get();

                    if(count($payment_profiles) > 0){
                        $payment_profile = $payment_profiles[0];
                        foreach($payment_profiles as $p_profile){
                            if($p_profile->default == 1){
                                $payment_profile = $p_profile;
                            }
                        }
                        
                        $cPayment = new CPaymentProfile();

                        $payment_data = [
                            'owner_type' => 'user',
                            'owner_id' => $user->id,
                            'payable_type' => 'subscription',
                            'payable_id' => $subs->id,
                            'amount' => $total,
                            'payment_profile_id' => $payment_profile->payment_profile_id,
                            'profile_id' => $payment_profile->profile_id,
                        ];

                        try{
                            $cPayment->payWithProfile($payment_data);
                        }catch(ApiException $error){
                            $transactions = Transaction::where([
                                ['profile_id', $payment_profile->profile_id],
                                ['payment_profile_id', $payment_profile->payment_profile_id],
                                ['status', 'error'],
                            ])->whereRaw("substr(`created_at`, 1, 10) >= '".substr($subs->next_billing_date, 0, 10)."'")
                            ->count();
                               
                            if($transactions > 0){
                                $subs->status = 'expired';
                                $subs->save();

                                continue;
                            }

                            \Mail::send('themes.'.Theme::get().'.emails.subscription-paid-error', ['user'=>$user, "last_4" => $payment_profile->last_4], function ($message) use ($user) {
                                $message->to($user->email);
                                $message->subject(env('APP_NAME', 'Properos'). ' - Subscription Payment Declined');
                            });

                            continue;
                        }
    
                        $order->payment_method_id = $payment_profile->id;
                        $order->billing_firstname = $payment_profile->billing_firstname;
                        $order->billing_lastname = $payment_profile->billing_lastname;
                        $order->billing_address = $payment_profile->billing_address;
                        $order->billing_unit = $payment_profile->billing_unit;
                        $order->billing_state = $payment_profile->billing_state;
                        $order->billing_city = $payment_profile->billing_city;
                        $order->billing_zip = $payment_profile->billing_zip;
                        $order->billing_country = 'usa';
                        $order->paid_amount = $total;
                        $order->status = 'paid';
                        $order->save();

                        if ($plan) {
                            switch ($plan->interval) {
                                case 'day':
                                    $subs->next_billing_date = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+1 day'));
                                    break;
                                case 'weekly':
                                    $subs->next_billing_date = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+7 days'));
                                    break;
                                case 'month':
                                    $subs->next_billing_date = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+'.$subs->interval_count.' month'));
                                    break;
                                case 'year':
                                    $subs->next_billing_date = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+'.$subs->interval_count.' year'));
                                    break;
                            }
                        }else{
                            switch ($subs->interval) {
                                case 'day':
                                    $subs->next_billing_date = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+1 day'));
                                    break;
                                case 'weekly':
                                    $subs->next_billing_date = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+7 days'));
                                    break;
                                case 'month':
                                    $subs->next_billing_date = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+'.$subs->interval_count.' month'));
                                    break;
                                case 'year':
                                    $subs->next_billing_date = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+'.$subs->interval_count.' year'));
                                    break;
                            }
                        }
                        $subs->save();

                        $subs->expires_at = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+'.($subs->days_to_pay+$subs->grace_days).' day'));
                        $subs->last_payment_date = date('Y-m-d H:i:s');
                        $subs->payments_made = $subs->payments_made + 1;
                        
                        $subs->last_payment = $total;
                        
                        $last_order = Order::where('order_type', 'subscription')
                                            ->whereHas('orderItems', function($q) use($subs){
                                                $q->where('owner_id', $subs->id)->where('owner_type','subscription');
                                            })->where('status', 'pending')->first();

                        if($last_order){
                            $subs->next_payment_date = $last_order->created_at;
                        }else{
                            $subs->next_payment_date = $subs->next_billing_date;
                        }

                        
                        if ($subs->next_plan_id != null && $subs->next_plan_id > 0) {
                            $subs->last_plan_id = $subs->current_plan_id;
                            $subs->current_plan_id = $subs->next_plan_id;
                            $subs->next_plan_id = 0;
                            $subs->free_records = $subs->next_plan->free_records;
                        }

                        $subs->free_records_consumed = 0;
                        $subs->data = $plan;
                        
                        if ($subs->status == 'expired') {
                            $subs->status = 'active';
                        }

                        $subs->save();

                        \Mail::send('themes.'.Theme::get().'.emails.subscription-paid', ['user'=>$user], function ($message) use ($user) {
                            $message->to($user->email);
                            $message->subject(env('APP_NAME', 'Properos'). ' - Paid Subscription');
                        });
                    }
                }
            }
        }
    }
}
