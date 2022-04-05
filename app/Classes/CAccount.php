<?php

namespace App\Classes;

use App\Events\AccountUpdated;
use App\Events\DashboardUpdated;
use App\Models\Account;
use App\Models\TransactionHistory;
use Illuminate\Support\Facades\Validator;
use Properos\Base\Classes\Base;
use Properos\Base\Exceptions\ApiException;
use Properos\Users\Models\UserAddress;
use Illuminate\Support\Str;
use Properos\Accounting\Classes\CPaymentProfile;
use Properos\Accounting\Models\PaymentProfile;
use Properos\Accounting\Models\Transaction;

class CAccount extends Base
{
    function __construct()
	{
		parent::__construct(Account::class, 'Account');
	}

	public function init_fillable()
    {
        foreach ($this->model->getFillable() as $key) {
            $this->fillable[$key] = null;
        }
    }

    public function store($data,$user)
    {
        $validator = Validator::make($data, [
            'user' => 'required',
            'creator' => 'required',
            'account_type' => 'required|max:255'
        ]);
        if ($validator->passes()) {
            $roles = $user->getCurrentRoles();
            $is_admin = false;
            foreach ($roles as $role){
                if($role->name == 'admin'|| $role->name == 'super_admin' ){
                    $is_admin = true;
                }

            }
            if($is_admin == true){
                $account = new Account();
                $account->account_type = $data['account_type'];
                $account->user_id = $data['user']->id;
                $account->creator_id = $data['creator']->id;
                if (isset($data['status'])) {
                    $account->status = $data['status'];
                } else {
                    $account->status = 'active';
                }
                if (isset($data['name'])) {
                    $account->name = $data['name'];
                }
                $account->balance = 0.00;
                $account->account_number = $this->generateAccountNumber(9);
                if ($account->save()) {
                    if($account->account_type != 'nvic' && $account->account_type != 'mdf' && $account->account_type != 'sf'  ){
                        $cDashboard = new CDashboard();
                        $data_dash['account_id'] = $account->id;
                        $cDashboard->create($data_dash);
                    }
                    return $account;
                }
            }else{
                $existing = Account::where('user_id', $data['user']->id)->first();
                if(!$existing){
                    if($data['account_type'] == 'NVIC' || $data['account_type'] == 'MDF' || $data['account_type']=='SF'){
                        $_account = Account::where('account_type',$data['account_type'])->first();
                        if($_account){
                            throw new ApiException("The account {$data['account_type']} already exist.", '006', $_account->toArray());
                        }
                    }
                    $account = new Account();
                    $account->account_type = $data['account_type'];
                    $account->user_id = $data['user']->id;
                    $account->creator_id = $data['creator']->id;
                    if(isset($data['status'])){
                        $account->status = $data['status'];
                    } else {
                        $account->status = 'active';
                    }
                    if(isset($data['name'])){
                        $account->name = $data['name'];
                    }
                    $account->balance = 0.00;
                    $account->account_number = $this->generateAccountNumber(9);
                    if($account->save()){
                        $cDashboard = new CDashboard();
                        $data_dash['account_id'] = $account->id;
                        $cDashboard->create($data_dash);
                        return $account;
                    }
                } else {
                    throw new ApiException('User already has a registered account ', '004', $data);
                }

            }

        } else {
            throw new ApiException($validator->errors(), '004', $data);
        }
    }

    public function update($data)
    {
        $validator = Validator::make($data, [
            'id' => 'required',
            'user' => 'required',
            'account_type' => 'required|max:255',
            'status' => 'required|max:255',
            'amount' => 'sometimes|required|numeric',
            'addresses' => 'sometimes|required|array'
        ]);
        if ($validator->passes()) {
            $editable_account = Account::find($data['id']);
            if($editable_account){
                if(isset($data['name'])){
                    $editable_account->name = $data['name'];
                }
                $editable_account->account_type = $data['account_type'];
                $editable_account->status = $data['status'];
                if(isset($data['amount']) && (float)$data['amount']){
                    $editable_account->balance += (float)$data['amount'];
                }
                if($editable_account->save()){
                    if(isset($data['addresses']) && count($data['addresses']) > 0){
                        $editable_account->user->addresses()->delete();
                        foreach ($data['addresses'] as $add) {
                            $address = UserAddress::create([
                                'user_id' =>  $data['user']->id,
                                'state' =>  $add['state'],
                                'country' =>  $add['country']
                            ]);
                            $editable_account->user->addresses()->save($address);
                        }
                    }
                    return $editable_account->load(['user.addresses']);
                }
            } else {
                throw new ApiException('Account not found', '404', $data);
            }
        } else {
            throw new ApiException($validator->errors(), '004', $data);
        }
    }

    public function addFunds($data)
    {
        $validator = Validator::make($data, [
            'id' => 'required',
            'amount' => 'required|numeric',
            'user' => 'required'
        ]);
        if ($validator->passes()) {
            $account = Account::find($data['id']);
            if($account){
                $cOrder = new COrder();
                $data['user_id'] = $data['user']->id;

                $order = $cOrder->create($data);

                $data['email'] = $data['user']->email;
                $data['payable_id'] = $order->id;
                $data['payable_type'] = 'order';
                $data['owner_id'] = $data['user']->id;

                $cPayment = new CPaymentProfile();

                if(isset($data['payment_id'])){
                    $profile = PaymentProfile::where('owner_id', $data['user']->id)->where('owner_type','user')->where('id', $data['payment_id'])
                        ->where('payment_processor', env("CARD_PROCESSOR"))->first();

                    if(!$profile){
                        throw new ApiException("Invalid Payment Information", '400', $data);
                    }

                    $payment = [
                        'owner_type' => 'user',
                        'owner_id' => $data['user']->id,
                        'payable_type' => 'order',
                        'payable_id' => $order->id,
                        'amount' => $data['amount'],
                        'payment_method_type' => $profile->payment_method_type,
                        'payment_profile_id' => $profile->payment_profile_id,
                        'profile_id' => $profile->profile_id,
                    ];
            
                    $cPayment->payWithProfile($payment);

                    $order->payment_method_id = $profile->id;
                    $order->billing_firstname = $profile->billing_firstname;
                    $order->billing_lastname = $profile->billing_lastname;
                    $order->billing_address = $profile->billing_address;
                    $order->billing_unit = $profile->billing_unit;
                    $order->billing_city = $profile->billing_city;
                    $order->billing_state = $profile->billing_country;
                    $order->billing_country = $profile->billing_state;

                }else{
                    if(isset($data['save']) && $data['save'] == true){
                        $res = $cPayment->addPaymentProfileAndPay($data);
    
                        $transaction = Transaction::where('transaction_id', $res['transaction_id'])->first();
    
                        if($transaction){
                            $payment_profile = PaymentProfile::where([
                                ['payment_profile_id', $transaction->payment_profile_id],
                                ['payment_processor', $transaction->provider],
                            ])->first();
    
                            if($payment_profile){
                                $order->payment_method_id = $payment_profile->id;
                                $order->billing_firstname = $payment_profile->billing_firstname;
                                $order->billing_lastname = $payment_profile->billing_lastname;
                                $order->billing_address = $payment_profile->billing_address;
                                $order->billing_unit = $payment_profile->billing_unit;
                                $order->billing_city = $payment_profile->billing_city;
                                $order->billing_state = $payment_profile->billing_country;
                                $order->billing_country = $payment_profile->billing_state;
                            }
                        }
                    }else{
                        $res = $cPayment->payWithoutProfile($data);
                    }
                }
                    
                $order->paid_amount = $data['amount'];
                $order->status = 'paid';
                $order->save();

                $account->balance += (double)$data['amount'];
                $account->withdrawable += ((double)$data['amount']);
                if($account->save()){
                    event(new AccountUpdated($account));
                    event(new DashboardUpdated());
                    $transaction = $this->buildTransaction([
                        'amount' => (double)$data['amount'],
                        'creator_id' => $data['user']->id,
                        'operation' => 'deposit',
                        'ending_balance' => $account->balance,
                        'ending_withdrawable' => $account->withdrawable,
                        'status' => 'success'
                    ]);
                    if($account->transactions()->save($transaction)){
                        return $account->load(['transactions']);
                    }
                }
            } else {
                throw new ApiException('Account not found', '404', $data);
            }
        } else {
            throw new ApiException($validator->errors(), '004', $data);
        }
    }

    public function withdrawCash($data)
    {
        $validator = Validator::make($data, [
            'id' => 'required',
            'withdraw' => 'required|numeric',
            'user' => 'required'
        ]);
        if ($validator->passes()) {
            $account = Account::find($data['id']);
            if($account){
                if($account->user->id == $data['user']->id || $data['user']->hasAnyRole('admin|super_admin')){
                    $account->balance -= (double)$data['withdraw'];
                    $account->withdrawable -= (double)$data['withdraw'];
                    if($account->save()){
                        event(new AccountUpdated($account));

                        $transaction = $this->buildTransaction([
                            'amount' => (double)$data['withdraw'],
                            'creator_id' => $data['user']->id,
                            'operation' => 'withdraw',
                            'ending_balance' => $account->balance,
                            'ending_withdrawable' => $account->withdrawable,
                            'status' => 'pending'
                        ]);
                        if($account->transactions()->save($transaction)){
                            event(new DashboardUpdated());
                            return $account->load(['transactions']);
                        }
                    }
                } else {
                    throw new ApiException('Forbidden action', '403', []);
                }
            } else {
                throw new ApiException('Account not found', '404', $data);
            }
        } else {
            throw new ApiException($validator->errors(), '004', $data);
        }
    }

    public function generateAccountNumber($length)
    {
        $number = '06';
        for($i = 0; $i < $length; $i++) {
            $number .= mt_rand(0, 9);
        }

        $existing = Account::where('account_number', $number)->first();

        if(!$existing){
            return $number;
        } else {
            $this->generateAccountNumber($length);
        }
    }

    public function buildTransaction($data)
    {
       $transaction = new TransactionHistory();
       $transaction->transaction_id = (string) Str::uuid();
       $transaction->amount = $data['amount'];
       $transaction->creator_id = $data['creator_id'];
       $transaction->operation = $data['operation'];
       $transaction->ending_balance = $data['ending_balance'];
       $transaction->ending_withdrawable = $data['ending_withdrawable'];
       $transaction->status = $data['status'];

       return $transaction;
    }
}
