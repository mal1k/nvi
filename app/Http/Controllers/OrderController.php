<?php

namespace App\Http\Controllers;

use App\Classes\COrder;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Subscription;
use Properos\Accounting\Classes\CPaymentProfile;
use Properos\Accounting\Models\PaymentProfile;
use Properos\Accounting\Models\Transaction;
use Properos\Base\Classes\Api;
use Properos\Base\Controllers\ApiController;
use Properos\Base\Exceptions\ApiException;

class OrderController extends ApiController
{
    public function store(Request $request)
    {
        $cOrder = new COrder();
        $data = $request->all();

        if(!\Auth::user()->hasRole('admin')){
            if(!isset($data['user_id'])){
                $data['user_id'] = \Auth::user()->id;
            }
        }

        $data['creator_id'] = \Auth::user()->id;

        $order = $cOrder->create($data);
        return response()->json(Api::success('The order was successfully created', $order));
    }

    public function storeAndPay(Request $request)
    {
        
        $cOrder = new COrder();
        $data = $request->all();
        if(!\Auth::user()->hasRole('admin')){
            $data['user_id'] = \Auth::user()->id;
        }

        if(!isset($data['user_id'])){
            $data['user_id'] = \Auth::user()->id;
        }

        $data['creator_id'] = \Auth::user()->id;

        $order = $cOrder->create($data);

        $data['owner_id'] = $data['user_id'];
        $data['email'] = $order['customer_email'];
        $data['payable_type'] = 'order';
        $data['payable_id'] = $order->id;

        $cPayment = new CPaymentProfile();
        $res = $cPayment->addPaymentProfileAndPay($data);

        $transaction = Transaction::where('transaction_id', $res['transaction_id'])->first();

        if($transaction){
            $payment_profile = PaymentProfile::where([
                ['payment_profile_id', $transaction->payment_profile_id],
                ['payment_processor', $transaction->provider],
            ])->first();
               
            if($payment_profile){
                $order->paid_amount = $data['amount'];
                $order->payment_method_id = $payment_profile->id;
                $order->billing_firstname = $payment_profile->billing_firstname;
                $order->billing_lastname = $payment_profile->billing_lastname;
                $order->billing_address = $payment_profile->billing_address;
                $order->billing_unit = $payment_profile->billing_unit;
                $order->billing_city = $payment_profile->billing_city;
                $order->billing_state = $payment_profile->billing_country;
                $order->billing_country = $payment_profile->billing_state;
                $order->status = 'paid';

                $order->save();
            }

            if(isset($data['order_type']) && $data['order_type'] == 'subscription' && isset($data['order_items'])){
                foreach($data['order_items'] as $item){
                    $subs = Subscription::where('id', $item['owner_id'])->first();
                    
                    if($subs){
                        switch ($subs->plan->interval) {
                            case 'day':
                                $subs->next_billing_date = date('Y-m-d H:i:s', strtotime('+1 day'));
                                break;
                            case 'weekly':
                                $subs->next_billing_date = date('Y-m-d H:i:s', strtotime('+7 days'));
                                break;
                            case 'month':
                                $subs->next_billing_date = date('Y-m-d H:i:s', strtotime('+'.$subs->interval_count.' month'));
                                break;
                            case 'year':
                                $subs->next_billing_date = date('Y-m-d H:i:s', strtotime('+'.$subs->interval_count.' year'));
                                break;
                        }
                        $subs->status = 'active';
                        $subs->expires_at = date('Y-m-d H:i:s', strtotime($subs->next_billing_date . '+'.($subs->days_to_pay+$subs->grace_days).' day'));
                        $subs->last_payment_date = date('Y-m-d H:i:s');
                        $subs->next_payment_date = $subs->next_billing_date;
                        $subs->last_payment = $data['amount'];
                        $subs->payment_profile_id = $payment_profile->id;
                        $subs->payments_made = 1;
                        $subs->save();
                    }
                }
            }
    
            return response()->json(Api::success('The order was successfully created', $order));
        }

        return response()->json(Api::error('Transaction No Found', []));

    }

    public function refund(Request $request){
        $data = $request->all();
        return $this->respondData('Refund was successfully processed.', (new COrder())->refundTransaction($data));
    }

    public function void(Request $request){
        $data = $request->all();
        return $this->respondData('Void was successfully processed.', (new COrder())->voidTransaction($data));
    }

}
