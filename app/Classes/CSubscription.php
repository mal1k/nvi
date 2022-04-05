<?php

namespace App\Classes;

use App\Models\Plan;
use App\Models\Subscription;
use App\Models\Website;
use Properos\Accounting\Classes\CPaymentProfile;
use Properos\Accounting\Models\PaymentProfile;
use Properos\Base\Classes\Base;
use Properos\Base\Classes\Helper;
use Properos\Base\Exceptions\ApiException;
use Properos\Users\Models\User;

/**
 * Description of
 *
 * @author @RAHG
 */

class CSubscription extends Base
{
    public function __construct()
    {
        parent::__construct(Subscription::class, 'Subscription');
    }

    public function init_fillable()
    {
        foreach ($this->model->getFillable() as $key) {
            switch ($key) {
                case 'last_plan_id':
                case 'plan_id':
                case 'next_plan_id':
                case 'last_payment':
                    $this->fillable[$key] = '0';
                    break;
                case 'payments_made':
                case 'total_payments':
                case 'payment_profile_id':
                case 'days_to_pay':
                    $this->fillable[$key] = 1;
                    break;
                case 'grace_days':
                    $this->fillable[$key] = 0;
                    break;
                case 'status':
                    $this->fillable[$key] = 'trial';
                    break;
                case 'expires_at':
                    $this->fillable[$key] = date('Y-m-d H:i' , strtotime(date('Y-m-d H:i'). '+1 day'));
                    break;
                case 'next_payment_date':
                case 'next_billing_date':
                    $this->fillable[$key] = date('Y-m-d H:i');
                    break;
                case 'last_payment_date':
                case 'started_trial_at':
                case 'data':
                    $this->fillable[$key] = null;
                    break;
                default:
                    $this->fillable[$key] = '';
                    break;
            }
        }
    }

    public function create(array $data)
    {
        $rules = [
            'owner_id' => 'required|integer',
            'status' => 'nullable|in:expired,trial,active,locked,pending',
        ];

        if(isset($data['current_plan_id']) && $data['current_plan_id'] > 0){
            $plan = Plan::where('id', $data['current_plan_id'])->first();
            if($plan){
                $data['data'] = $plan;
                $data['interval_count'] = $plan->interval_count;
                $data['interval'] = $plan->interval;
                $data['price'] = $plan->min_price;
                $data['status'] = 'active';

                if($plan->title == 'Trial'){
                    $data['status'] = 'trial';
                    $data['started_trial_at'] = date('Y-m-d H:i:s');
                    $next_plan = Plan::select('id')->where('title','Basic')->first();
                    $data['next_plan_id'] = $next_plan->id;
                }else{
                    if($data['price'] > 0){
                        $data['status'] = 'pending';
                    }
                    
                }


            }else{
                throw new ApiException("Plan No Found", '003', $data['current_plan_id']);
            }
        }
        if(isset($data['expires_at'])){
            $data['expires_at'] = date('Y-m-d H:i:s', strtotime($data['expires_at']));
        }else{
            $data['expires_at'] = date('Y-m-d H:i:s', strtotime(date('Y-m-d H:i:s') . '+7 days'));
        }
        $data['type'] = Helper::getValue($data, 'type', null);

        $subscription = Subscription::where('type', $data['type'])->where('owner_id', $data['owner_id'])
                                    ->where([['status', '<>', 'expired']])->first();

        if(!$subscription){
            Subscription::where([
                ['owner_type', 'user'],
                ['owner_id', $data['owner_id']]
            ])->delete();
            $result = $this->createModel($data, $rules);
            return $result;
        }
        $data['id'] = $subscription->id;

        $this->update($data);
        return  $subscription;
        
    }

    public function update(array $data)
    {
        $rules = [
            'id' => 'required|integer',
            'user_id' => 'required|integer',
            'status' => 'nullable|in:expired,trial,active,locked,pending',
        ];

        if(isset($data['current_plan_id']) && $data['current_plan_id'] > 0){
            $plan = Plan::where('id', $data['current_plan_id'])->first();
            if($plan){
                $data['data'] = $plan;
                $data['interval_count'] = $plan->interval_count;
                $data['interval'] = $plan->interval;
                $data['price'] = $plan->min_price;
                $data['status'] = 'active';

                if($plan->title == 'Trial'){
                    $data['status'] = 'trial';
                    $data['started_trial_at'] = date('Y-m-d H:i:s');
                    $next_plan = Plan::select('id')->where('title','Basic')->first();
                    $data['next_plan_id'] = $next_plan->id;
                }else{
                    if($data['price'] > 0){
                        $data['status'] = 'pending';
                    }
                }

            }else{
                throw new ApiException("Plan No Found", '003', $data['current_plan_id']);
            }
        }

        if(isset($data['expires_at'])){
            $data['expires_at'] = date('Y-m-d H:i:s', strtotime($data['expires_at']));
        }else if(isset($data['next_payment_date'])){
            $data['expires_at'] = date('Y-m-d H:i:s', strtotime($data['next_payment_date'] . '+7 days'));
        }
        
        $update = $this->updateModel($data, $rules);

        return $update;
    }

    public function changeSubscription(array $data)
    {
        $rules = [
            'subscription_id' => 'required|integer',
            'plan_id' => 'required|integer',
            'user_id' => 'required|integer'
        ];

        $validator = \Validator::make($data, $rules);

        if($validator->fails()){
            throw new ApiException($validator->errors(), '003', $data);
        }

        $subscription = Subscription::where('id', $data['subscription_id'])->with('plan')->first();

        if(!$subscription){
            throw new ApiException('Subscription no found', '003', $data);
        }

        $plan = Plan::where('id', $data['plan_id'])->first();

        if(!$plan){
            throw new ApiException('Plan no found', '003', $data);
        }

        session(['registered' => 0]);

        if($subscription->status == 'expired' || $subscription->status == 'pending'){
            $subscription->current_plan_id = $plan->id;
            $subscription->interval = $plan->interval;
            $subscription->interval_count = $plan->interval_count;
            $subscription->price = $plan->min_price;
            $subscription->next_plan_id = 0;
            $subscription->data = $plan;


            if(!$plan->min_price > 0){
                $subscription->status = 'active';
            }

            $subscription->save();

            return $subscription;
        }

        if($subscription->price > $plan->min_price){
            $subscription->next_plan_id = $plan->id;
            $subscription->save();
            return $subscription;
        }

        if($subscription->price < $plan->min_price){

            $user = User::where('id', $data['user_id'])->first();
            $profile = PaymentProfile::where('owner_id', $data['user_id'])->where('owner_type','user')->where('default', 1)
                        ->where('payment_processor', env("CARD_PROCESSOR"))->first();
                        
            
            if(!$profile){
                throw new ApiException("You don't have a registered payment method, please register it before change the plan", '002', []);
            }
            
            $amount = $plan->min_price - $subscription->price; 

            $cOrder = new COrder();
            $order = $cOrder->create([
                'user_id' => $user->id,
                'creator_id' => $user->id,
                'customer_name' => $user->firstname . ' ' . $user->lastname,
                'customer_email' => $user->email,
                'customer_phone' => $user->phone,
                'order_type' => 'subscription',
                'amount' => $amount,
                'payment_method_id' => $profile->id,
                'billing_firstname' => $profile->billing_firstname,
                'billing_lastname' => $profile->billing_lastname,
                'billing_address' => $profile->billing_address,
                'billing_unit' => $profile->billing_unit,
                'billing_city' => $profile->billing_city,
                'billing_state' => $profile->billing_country,
                'billing_country' => $profile->billing_state,
                'order_items' => [
                    [
                    'owner_type' => 'subscription', 
                    'owner_id' => $subscription->id, 
                    'name' => $subscription->plan->title . ' - ' . $plan->title,
                    'description' => 'Upgrade Plan',
                    'qty' => 1,
                    'price' => $amount
                    ]
                ]
            ]); 
            $payment = [
                'owner_type' => 'user',
                'owner_id' => $user->id,
                'payable_type' => 'order',
                'payable_id' => $order->id,
                'amount' => $amount,
                'payment_method_type' => $profile->payment_method_type,
                'payment_profile_id' => $profile->payment_profile_id,
                'profile_id' => $profile->profile_id,
            ];

            $cPayment = new CPaymentProfile();
            $cPayment->payWithProfile($payment);

            $order->status = 'paid';
            $order->paid_amount = $amount;
            $order->payment_method_id = $profile->id;
            $order->save();

        }

        $subscription->last_plan_id = $subscription->plan->id;
        $subscription->current_plan_id = $plan->id;
        $subscription->interval = $plan->interval;
        $subscription->interval_count = $plan->interval_count;
        $subscription->price = $plan->min_price;
        $subscription->status = 'active';
        $subscription->next_plan_id = 0;
        $subscription->data = $plan;
        $subscription->last_payment = $plan->min_price;
        $subscription->save();

        return $subscription;
    }

    public function delete($id)
    {
        return $this->deleteModel($id);
    }

    public function payWithProfile($data){
        $rules = [
            'id' => 'required|integer',
            'user_id' => 'required|integer',
        ];

        $validator = \Validator::make($data, $rules);

        if($validator->fails()){
            throw new ApiException($validator->errors(), '003', $data);
        }

        $subscription = Subscription::where('id', $data['id'])->with('plan')->first();

        $user = User::where('id', $data['user_id'])->first();
        $profile = PaymentProfile::where('owner_id', $data['user_id'])->where('owner_type','user')->where('default', 1)
                    ->where('payment_processor', env("CARD_PROCESSOR"))->first();
                    
        
        if(!$profile){
            throw new ApiException("You don't have a registered payment method, please register it before change the plan", '002', []);
        }

        $cOrder = new COrder();
        $order = $cOrder->create([
            'user_id' => $user->id,
            'creator_id' => $user->id,
            'customer_name' => $user->firstname . ' ' . $user->lastname,
            'customer_email' => $user->email,
            'customer_phone' => $user->phone,
            'order_type' => 'subscription',
            'amount' => $subscription->price,
            'payment_method_id' => $profile->id,
            'billing_firstname' => $profile->billing_firstname,
            'billing_lastname' => $profile->billing_lastname,
            'billing_address' => $profile->billing_address,
            'billing_unit' => $profile->billing_unit,
            'billing_city' => $profile->billing_city,
            'billing_state' => $profile->billing_country,
            'billing_country' => $profile->billing_state,
            'order_items' => [
                [
                'owner_type' => 'subscription', 
                'owner_id' => $subscription->id, 
                'name' => $subscription->plan->title,
                'description' => 'Change Plan',
                'qty' => 1,
                'price' => $subscription->price
                ]
            ]
        ]); 
        $payment = [
            'owner_type' => 'user',
            'owner_id' => $user->id,
            'payable_type' => 'order',
            'payable_id' => $order->id,
            'amount' => $subscription->price,
            'payment_method_type' => $profile->payment_method_type,
            'payment_profile_id' => $profile->payment_profile_id,
            'profile_id' => $profile->profile_id,
        ];

        $cPayment = new CPaymentProfile();
        $cPayment->payWithProfile($payment);

        $order->status = 'paid';
        $order->paid_amount = $subscription->price;
        $order->payment_method_id = $profile->id;
        $order->save();

        return $this->reNewSubscription($subscription);
    }

    public function payWithOutProfile($data){
        $rules = [
            'id' => 'required|integer',
            'user_id' => 'required|integer',
            'token' => 'required',
            'type' => 'required',
        ];


        $validator = \Validator::make($data, $rules);

        if ($validator->fails()) {
            throw new ApiException($validator->errors(), '003', $data);
        }

        $subscription = Subscription::where('id', $data['id'])->with('plan')->first();
        $user = User::where('id', $data['user_id'])->first();

        $cOrder = new COrder();
        $order = $cOrder->create([
            'user_id' => $user->id,
            'creator_id' => $user->id,
            'customer_name' => $user->firstname . ' ' . $user->lastname,
            'customer_email' => $user->email,
            'customer_phone' => $user->phone,
            'order_type' => 'subscription',
            'amount' => $subscription->price,
            'order_items' => [
                [
                'owner_type' => 'subscription', 
                'owner_id' => $subscription->id, 
                'name' => $subscription->plan->title,
                'description' => 'Change Plan',
                'qty' => 1,
                'price' => $subscription->price
                ]
            ]
        ]); 

        $info = [
            'owner_type' => 'user',
            'owner_id' => $data['user_id'],
            'payable_type' => 'subscription',
            'payable_id' => $subscription->id,
            'token' => $data['token'],
            'type' => $data['type'],
            'name' => $user->firstname . ' ' . $user->lastname,
            'email' => $user->email,
            'expiration_date' => $data['expiration_date'],
            'billing_zip' => $data['billing_zip'],
            'last_4' => $data['last_4'],
            'amount' => $subscription->price,
        ];

        $cPayment = new CPaymentProfile();
        $payment = $cPayment->addPaymentProfileAndPay($info);

        $order->billing_firstname = $payment['payment_profile']['billing_firstname'];
        $order->billing_lastname = $payment['payment_profile']['billing_lastname'];
        $order->billing_address = $payment['payment_profile']['billing_address'];
        $order->billing_city = $payment['payment_profile']['billing_city'];
        $order->billing_state = $payment['payment_profile']['billing_state'];
        $order->billing_zip = $payment['payment_profile']['billing_zip'];

        $order->paid_amount = $subscription->price;
        $order->status = 'paid';
        $order->save();


        return $this->reNewSubscription($subscription);

    }

    public function reNewSubscription($subscription){
        switch ($subscription->plan->interval) {
            case 'day':
                $subscription->next_billing_date = date('Y-m-d H:i:s', strtotime(date('Y-m-d H:i'). '+1 day'));
                break;
            case 'weekly':
                $subscription->next_billing_date = date('Y-m-d H:i:s', strtotime(date('Y-m-d H:i'). '+7 days'));
                break;
            case 'month':
                $subscription->next_billing_date = date('Y-m-d H:i:s', strtotime(date('Y-m-d H:i'). '+'.$subscription->plan->interval_count.' month'));
                break;
            case 'year':
                $subscription->next_billing_date = date('Y-m-d H:i:s', strtotime(date('Y-m-d H:i'). '+'.$subscription->plan->interval_count.' year'));
                break;
        }

        $subscription->expires_at = date('Y-m-d H:i:s', strtotime($subscription->next_billing_date . '+'.($subscription->days_to_pay+$subscription->grace_days).' day'));
        $subscription->last_payment_date = date('Y-m-d H:i:s');
        $subscription->next_payment_date = $subscription->next_billing_date;
        
        $subscription->status = 'active';
        $subscription->last_payment = $subscription->price;
        $subscription->payments_made = $subscription->payments_made +1;
        $subscription->save();
    }


}
