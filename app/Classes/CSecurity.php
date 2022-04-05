<?php

namespace App\Classes;

use App\Events\DashboardUpdated;
use App\Events\HoldingsUpdated;
use App\Events\SecurityUpdated;
use App\Events\SimJobUpdated;
use App\Models\Account;
use App\Models\HoldingHistory;
use App\Models\Holding;
use App\Models\Security;
use App\Models\SecurityLog;
use App\Models\TransactionHistory;
use Illuminate\Support\Facades\Validator;
use Properos\Base\Classes\Base;
use Properos\Base\Exceptions\ApiException;
use Illuminate\Support\Str;

class CSecurity extends Base
{
    protected $cSimulation;

    function __construct(CSimulation $cSimulation)
	{
        parent::__construct(Security::class, 'Security');
        $this->cSimulation = $cSimulation;
	}
    // function __construct()
	// {
    //     parent::__construct(Security::class, 'Security');
    //     // $this->cSimulation = $cSimulation;
	// }

	public function init_fillable()
    {
        foreach ($this->model->getFillable() as $key) {
            $this->fillable[$key] = null;
        }
    }

    public function store($data)
    {
        $validator = Validator::make($data, [
            'stock_price' => 'required|numeric|between:1,1900',
            'simulations' => 'required|integer',
            'put' => 'required|numeric',
            'straddle' => 'required|numeric',
            'status' => 'required|max:255',
            'creator' => 'required',
            'expected_value'=> 'required|numeric'
        ]);
        if ($validator->passes()) {
            $total_price = (float)round((float)$data['stock_price'] + (float)$data['put'] + (float)$data['straddle'], 2);
            $total_amount_NVIC = 2 * $data["quantity"] * (1.3*$total_price);
            $account_NVIC = Account::where('account_type', 'nvic')->first();
            $account_SF = Account::where('account_type', 'sf')->first();

                $cSecurityLog = new CSecurityLog();
                for($i=0;$i < $data["quantity"];$i++){

                    $_data = [
                        'creator_id' => $data['creator']->id,
                        'security_number' => $this->generateSecurityNumber(),
                        'stock_price' => $data['stock_price'],
                        'initial_stock_price' => $data['stock_price'],
                        'interest_rate' => $data['interest_rate'],
                        'simulations' => $data['simulations'],
                        'initial_sim' => $data['simulations'],
                        'maturity_date' => $data['maturity_date'],
                        'initial_maturity_date' => $data['maturity_date'],
                        'type' => 'A',
                        'put' =>  $data['put'],
                        'straddle' => $data['straddle'],
                        'expected_value' => $data['expected_value'],
                        'total_price' => $total_price,
                        'sim_status' => 'unblocked'
                    ];

                    if (isset($data['status'])) {
                        $_data['status'] = $data['status'];
                    } else {
                        $_data['status'] = 'active';
                    }
                    $s_logs = [
                        'stock_price' => $_data['stock_price'],
                        'security_number' => $_data['security_number'],
                        'put' => $_data['put'],
                        'straddle' => $_data['straddle'],
                        'type' => $_data['type'],
                        'total_price' => $_data['total_price'],
                        'status' => $_data['status'],
                    ];
                    if ($i == 0) {
                        $security = $this->createModel($_data);
                        $s_logs['security_id'] = $security->id;
                        $cSecurityLog->create($s_logs);

                        $_data['type'] = 'B';
                        $s_b = $this->createModel($_data);

                        $s_logs['security_id'] = $s_b->id;
                        $s_logs['type'] = 'B';

                        $cSecurityLog->create($s_logs);

                        event(new SecurityUpdated($security));
                    }else{
                        $security = $this->createModel($_data);

                        $s_logs['security_id'] = $security->id;
                        $cSecurityLog->create($s_logs);

                        $_data['type'] = 'B';
                        $s_b = $this->createModel($_data);

                        $s_logs['security_id'] = $s_b->id;
                        $s_logs['type'] = 'B';

                        $cSecurityLog->create($s_logs);
                    }

                    if ($account_NVIC->balance > $total_amount_NVIC) {
                        $account_NVIC->balance=$account_NVIC->balance - $total_amount_NVIC;
                        $account_NVIC->withdrawable=$account_NVIC->withdrawable - $total_amount_NVIC;
                        $account_SF->balance=$account_SF->balance + $total_amount_NVIC;
                        $account_SF->withdrawable=$account_SF->withdrawable + $total_amount_NVIC;
                        $account_NVIC->save();
                        $account_SF->save();
                    }else{
                        $security->status = 'blocked';
                        $s_b->status = 'blocked';
                        // dd($security,$s_b);
                        $security->save();
                        $s_b->save();
                    }

                }




                return $security;

            // }else{
            //     throw new ApiException('The NVIC account has insufficient funds.','003', []);

            // }
        } else {
            throw new ApiException($validator->errors(), '004', $data);
        }
    }

    public function update($data)
    {
        $validator = Validator::make($data, [
            'id' => 'required',
            'stock_price' => 'required|numeric|between:1,1900',
            'simulations' => 'required|integer',
            'put' => 'required|numeric',
            'straddle' => 'required|numeric',
            'status' => 'required|max:255',
            'expected_value'=> 'required|numeric'
        ]);
        if ($validator->passes()) {
            // $security = Security::find($data['id']);
            $securities = Security::where('security_number', $data['security_number'])->get();
            // dd($security);
            if(count($securities) > 0){
                // $cSecurityLog = new CSecurityLog();
                foreach($securities as $key => $security) {
                    if(!$security->security_number || $security->security_number == 0){
                        $security->security_number = $this->generateSecurityNumber();
                    }
                    $current_stock_price = $security->stock_price;
                    $current_total_price_transfer = 2 * $data["quantity"] * (1.3 * $security->total_price);
                    $security->stock_price = $data['stock_price'];
                    $security->interest_rate = $data['interest_rate'];
                    $security->simulations = $data['simulations'];
                    $security->initial_sim = $data['simulations'];
                    $security->maturity_date = $data['maturity_date'];
                    $security->initial_maturity_date = $data['maturity_date'];
                    $security->status = $data['status'];

                    if($current_stock_price !=  $security->stock_price){
                        $security->put =  $data['put'];
                        $security->straddle = $data['straddle'];
                        $security->expected_value = $data['expected_value'];
                        $security->total_price = (double)round((double)$security->stock_price + (double)$security->put + (double)$security->straddle, 2);
                        $new_total_price_transfer = 2 * $data["quantity"] * (1.3 * $security->total_price);
                        //Rebalance
                        $account_NVIC = Account::where('account_type', 'nvic')->first();
                        $account_SF = Account::where('account_type', 'sf')->first();
                        $difference = $new_total_price_transfer - $current_total_price_transfer;
                        if ($difference > 0) {
                            if ($account_NVIC->balance > $difference) {
                                $account_NVIC->balance = $account_NVIC->balance - $difference;
                                $account_NVIC->withdrawable = $account_NVIC->withdrawable - $difference;
                                $account_SF->balance = $account_SF->balance + $difference;
                                $account_SF->withdrawable = $account_SF->withdrawable + $difference;
                                $account_NVIC->save();
                                $account_SF->save();
                            } else {
                                $security->status = 'blocked';
                                $security->save();
                            }
                        }
                    }
                    // $security->save();
                    if($security->save()){

                        $security_log = SecurityLog::where('security_number',$security->security_number)->where('type',$security->type)->first();
                        $security_log->stock_price = $security->stock_price;
                        $security_log->put = $security->put;
                        $security_log->straddle = $security->straddle;
                        $security_log->total_price = $security->total_price;

                        $security_log->save();
                        event(new SecurityUpdated($security));
                        event(new DashboardUpdated());
                        if($key == 0){
                            $_security = $security;
                        }
                    }
                }
                return $_security;
            }else {
                throw new ApiException('Security not found', '404', $data);
            }


        } else {
            throw new ApiException($validator->errors(), '004', $data);
        }
    }

    public function generateSecurityNumber($length = 8){
        $number = '1';
        for($i = 0; $i < $length; $i++) {
            $number .= mt_rand(0, 9);
        }
        $existing = Account::where('account_number', $number)->first();
        if(!$existing){
            return $number;
        } else {
            $this->generateSecurityNumber($length);
        }
    }

    public function getPutValue($stock_price){
        return 1;
    }

    public function getStraddleValue($stock_price){
        return 1;
    }

    public function getExpectedValue($security){
        return 1;
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

    public function buildHoldingHistory($data)
    {
       $record = new HoldingHistory();
       $record->holding_id = $data['holding_id'];
       $record->security_id = $data['security_id'];
       $record->operation = $data['operation'];
       $record->price = $data['price'];
    //    $record->quantity = $data['quantity'];
       $record->quantity = 1;

       return $record;
    }

    public function buySecurity($data)
    {
        $validator = Validator::make($data, [
            'id' => 'required',
            'user' => 'required',
            'account_id' => 'required',
            // 'total_price' => 'required',
            // 'interest_rate' => 'required',
            // 'expected_value' => 'required'
        ]);
        if ($validator->passes()) {
            $security = Security::find($data['id']);
            if($security){
                $account = Account::find($data['account_id']);
                if($account){
                    if($account->user_id == $data['user']->id){
                        // if($account->balance >= ((double)$security->share_price * (double)$data['shares_qty'])){
                        if($account->balance >= $security->total_price){
                            // if($security->available_shares >= $data['shares_qty']){
                                $holding_for_security = Holding::where('security_id', $security->id)
                                ->where('account_id', $account->id)
                                ->first();
                                if($holding_for_security){
                                    $holding = $holding_for_security;
                                    $holding->status = 'active';
                                } else {
                                    $holding = new Holding();
                                    $holding->account_id = $account->id;
                                    $holding->security_id = $security->id;
                                    $holding->security_part += 1;
                                    $holding->shares_qty += 1;
                                    $holding->cost += 1;
                                    $holding->average_cost += 1;
                                    $holding->status = 'active';
                                }
                                if($holding->save()){
                                    $holding_history = $this->buildHoldingHistory([
                                        'holding_id' => $holding->id,
                                        'security_id' => $security->id,
                                        'operation' => 'buy',
                                        // 'price' => (double)$security->share_price,
                                        'price' => $security->total_price,
                                    ]);
                                    $holding_history->save();

                                    $updated_account = $this->updateAccountOnBuy($account, $security, $data);
                                    $updated_security = $this->updateSecurityOnBuy($security, $data);

                                     $transaction = $this->buildTransaction([
                                        // 'amount' => (double)$updated_security->share_price * (double)$data['shares_qty'],
                                        'amount' => (double)$updated_security->total_price,
                                        'creator_id' => $data['user']->id,
                                        'operation' => 'buy',
                                        'ending_balance' => $updated_account->balance,
                                        'ending_withdrawable' => $updated_account->withdrawable,
                                        'status' => 'settled'
                                    ]);
                                    $account->transactions()->save($transaction);
                                    event(new DashboardUpdated());
                                    $holding->load(['security', 'account.user']);
                                    event(new HoldingsUpdated($holding));
                                }
                                return $holding;
                            // } else {
                            //     throw new ApiException('No sufficient shares available to fullfil this request ', '002', []);
                            // }
                        } else {
                            throw new ApiException('This account has not enough balance to fulfill this request', '003', []);
                        }
                    } else {
                        throw new ApiException('Forbidden action', '403', []);
                    }
                } else {
                    throw new ApiException('Account not found', '404', $data);
                }
            } else {
                throw new ApiException('Security not found', '404', $data);
            }
        } else {
            throw new ApiException($validator->errors(), '004', $data);
        }
    }

    public function sellHolding($data)
    {
        $validator = Validator::make($data, [
            'id' => 'required',
            'user' => 'required',
            'account_id' => 'required',
        ]);
        if ($validator->passes()) {
            $holding = Holding::with('account', 'security')->find($data['id']);
            if($holding){
                if($holding->security->sim_status == "unblocked"){
                    $account = Account::find($data['account_id']);
                    if($account){
                        if($holding->account->user_id == $data['user']->id){
                            $account_holding = Account::find($holding->account_id);
                            if($account_holding){
                                if($account_holding->user_id == $data['user']->id){
                                    // if($holding->shares_qty >= $data['shares_sold_qty']){
                                        $security = Security::find($holding->security_id);
                                        if($security){

                                            $updated_account = $this->updateAccountOnSell($account_holding, $security);
                                            $updated_security = $this->updateSecurityOnSell($security);
                                            $updated_holdings = $this->updateHoldingOnSell($holding);

                                                $transaction = $this->buildTransaction([
                                                'amount' => (double)$updated_security->total_price,
                                                'creator_id' => $data['user']->id,
                                                'operation' => 'sale',
                                                'ending_balance' => $updated_account->balance,
                                                'ending_withdrawable' => $updated_account->withdrawable,
                                                'status' => 'settled'
                                            ]);
                                            $account->transactions()->save($transaction);
                                            event(new DashboardUpdated());
                                            $updated_holdings->load(['security','account.user']);
                                            event(new HoldingsUpdated($updated_holdings));

                                            return $holding;
                                        } else {
                                            throw new ApiException('Security information for this holding could not be retrieved', '002', []);
                                        }

                                    // else {
                                    //     throw new ApiException('You are trying to sell more shares than you have in this holding', '002', []);
                                    // }
                                }
                                else {
                                    throw new ApiException('Forbidden action', '403', []);
                                }
                            } else {
                                throw new ApiException('Account information for this holding could not be retrieved', '002', []);
                            }
                        } else {
                            throw new ApiException('Forbidden action', '403', []);
                        }
                    } else {
                        throw new ApiException('Account not found', '404', $data);
                    }
                }else{
                    throw new ApiException('The security is blocked', '404', $data);
                }
            } else {
                throw new ApiException('Holding not found', '404', $data);
            }
        } else {
            throw new ApiException($validator->errors(), '004', $data);
        }
    }

    public function updateAccountOnBuy($account, $security, $data)
    {
      $differene = (double)$account->balance - (double)$account->withdrawable;
    //   $buy_cost = (double)$security->share_price * (double)$data['shares_qty'];
      $buy_cost = (double)$security->total_price;
      $account->balance = $account->balance - $buy_cost;
      $account->withdrawable = $account->withdrawable - ($buy_cost - $differene);
      $mdf = Account::where('account_type', 'mdf')->first();
      $mdf->balance= $mdf->balance + $buy_cost;

      $account->save();
      $mdf->save();
      return $account;
    }

    public function updateAccountOnSell($account, $security)
    {
    //   $account->balance += ((double)$security->share_price * (double)$shares_sold_qty);
      $account->balance += ((double)$security->total_price);
      $account->withdrawable += ((float)$security->total_price);
      $securityB = Security::where('security_number', $security->security_number)->where('type', 'B')->first();
      $nvic=Account::where('account_type','nvic')->first();
      $sf=Account::where('account_type','sf')->first();
      $nvic->balance= $nvic->balance + $securityB->total_price;
      $nvic->withdrawable= $nvic->withdrawable + $securityB->total_price;
      $sf->balance= $sf->balance - $securityB->total_price - $security->total_price;
      $sf->withdrawable= $sf->withdrawable - $securityB->total_price - $security->total_price;
      $nvic->save();
      $sf->save();
      $account->save();
      return $account;
    }

    public function modifyShares($data)
    {
        $validator = Validator::make($data, [
            'id' => 'required',
            'shares_qty' => 'required'
        ]);
        if ($validator->passes()) {
            $security = Security::find($data['id']);
            if($security){
                if(((integer)$security->shares + (integer)$data['shares_qty']) > 0){
                    $security->shares = (integer)$security->shares + (integer)$data['shares_qty'];
                    $security->available_shares = (integer)$security->available_shares + (integer)$data['shares_qty'];
                    if($security->save()){
                        event(new SecurityUpdated($security));
                        event(new DashboardUpdated());
                        return $security;
                    }
                } else {
                    throw new ApiException('Invalid total quantity of shares', '002', $data);
                }
            } else {
                throw new ApiException('Security not found', '404', $data);
            }
        } else {
            throw new ApiException($validator->errors(), '004', $data);
        }
    }

    public function getAverageCost($holding){

        $total = $holding->cost;
        $total_shares = $holding->shares_qty;
        if($total_shares > 0){
            $average_cost = round($total / $total_shares, 2);
        } else {
            $average_cost = round($total, 2);
        }
        return $average_cost;
    }

    public function updateSecurityOnBuy($security)
    {
        $security->status = 'sold';
        $security->save();
        event(new SecurityUpdated($security));
       return $security;
    }

    public function updateSecurityOnSell($security)
    {
    //    $security->available_shares += $shares_sold_qty;
    //    $security->total_price += ((double)$security->total_price);s
        $security->status = 'active';
        $security->stock_pice = $security->total_price;
        $get_new_values_security = $this->getInitialValues(
            [
                'stock_price' => $security->stock_pice,
                'interest_rate' => $security->interest_rate,
                'time_value' => 1
            ]
        );
        $security->put = $get_new_values_security['put'];
        $security->straddle = $get_new_values_security['straddle'];
        $security->total_price = $security->put + $security->straddle + $security->stock_price;

        $sec_part_B = Security::where('security_number', $security->security_number)->where('type','B')->first();
        $sec_part_B->stock_pice = $sec_part_B->total_price;
        $get_new_values_security_partB = $this->getInitialValues(
            [
                'stock_price' => $sec_part_B->stock_pice,
                'interest_rate' => $sec_part_B->interest_rate,
                'time_value' => 1
                ]
            );
        $sec_part_B->put = $get_new_values_security_partB['put'];
        $sec_part_B->straddle = $get_new_values_security_partB['straddle'];
        $sec_part_B->total_price = $sec_part_B->put + $sec_part_B->straddle + $sec_part_B->stock_price;

        dd($security, $sec_part_B);
    //    $security->sold_shares -= $shares_sold_qty;
       $security->save();
       $sec_part_B->save();
       event(new SecurityUpdated($security));
       return $security;
    }

    public function updateHoldingOnSell($holding)
    {
    //    $holding->shares_qty -= $shares_sold_qty;
          $holding->status = 'sold';
       /* $holding->cost -= $holding->security->share */
    //    $holding->average_cost = $this->getAverageCost($holding);
          $holding->save();

       return $holding;
    }

    public function getInitialValues($data)
    {
        $validator = Validator::make($data, [
            'stock_price' => 'required|numeric|between:1,1900',
            'interest_rate' => 'required|numeric',
            'time_value' => 'required|numeric'
        ]);
        if ($validator->passes()) {
            return $this->cSimulation->getInitialValues($data);
        } else {
            throw new ApiException($validator->errors(), '004', $data);
        }
    }

    public function getSimValues($data)
    {
        $validator = Validator::make($data, [
            'time_value' => 'required|numeric',
            'stock_price' => 'required|numeric|between:1,1900',
            'initial_stock_price' => 'required|numeric|between:1,1900',
            'interest_rate' => 'required|numeric',
            'A' => 'required|numeric',
            'initial_sim' => 'required|numeric'
        ]);
        if ($validator->passes()) {
            return $this->cSimulation->getSimValues($data);
        } else {
            throw new ApiException($validator->errors(), '004', $data);
        }
    }

    public function simulate($data,$trigger_event=false)
    {
        $validator = Validator::make($data, [
            'stock_price' => 'required|numeric|between:1,1900',
        ]);
        if($validator->passes()){
            return $this->cSimulation->simulate($data, $trigger_event);
        }else{
            throw new ApiException($validator->errors(), '004', $data);
        }

    }

    public function new_pairs($part_A, $part_B)
    {
        $max_total_price = max(array($part_A->total_price_A, $part_B->total_price_B));
        if($max_total_price == $part_A->total_price_A ){
            $interest_rate = $part_A->interest_rate;
        }else{
            $interest_rate = $part_B->interest_rate;
        }

        $_new_values_security = $this->getInitialValues(
            [
                'stock_price' => $max_total_price,
                'interest_rate' => $interest_rate,
                'time_value' => 1
            ]
        );

        return $this->store($_new_values_security);


    }

    public function getUnblockAmount($data)
    {
        $validator = Validator::make($data, [
            'id' => 'required|numeric',
        ]);
        if ($validator->passes()) {
            $security = Security::where('id',$data['id'])->first();
            $value = 2*($security->total_price * 0.3 + $security->total_price);
            $amount = [
                'amount' => $value
            ];

            return $amount;
        } else {
            throw new ApiException($validator->errors(), '004', $data);
        }
    }

    public function payUnblockAmount($data)
    {
        $validator = Validator::make($data, [
            'id' => 'required|numeric',
            'amount' => 'required|numeric',
        ]);
        if ($validator->passes()) {
            // $nvic = Account::where('account_type','nvic');
            // $nvic->balance += (float)$data['amount'];
            // $nvic->withdrawable += ((float)$data['amount']);
            $sf = Account::where('account_type','sf')->first();
            if($sf){
                $sf->balance += (float)$data['amount'];
                $sf->withdrawable += ((float)$data['amount']);
                $sf->save();
                $sec = Security::where('id', $data['id'])->first();
                $securities = Security::where('security_number', $sec->security_number)->get();
                foreach($securities as $security){
                    $security->status = 'active';
                    $security->save();
                }
                return true;
            }else{
                return null;
            }
        } else {
            throw new ApiException($validator->errors(), '004', $data);
        }
    }


}
