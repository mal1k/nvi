<?php

namespace App\Classes;

use App\Events\SimJobUpdated;
use App\Models\Account;
use App\Models\Security;
use Illuminate\Support\Facades\Validator;
use Properos\Base\Classes\Base;
use Properos\Base\Exceptions\ApiException;

class CSimulation extends Base
{
    protected $strike_10_50x;
    protected $strike_10_00x;
    protected $D1_A_10_50x;
    protected $D2_A_10_50x;
    protected $D1_B_10_50x;
    protected $D2_B_10_50x;
    protected $D1_A_10_00x;
    protected $D2_A_10_00x;
    protected $D1_B_10_00x;
    protected $D2_B_10_00x;
    protected $Ay_A;
    protected $Bx_A;
    protected $Ay_B;
    protected $Bx_B;
    protected $volatility;

    protected $X;
    protected $A;
    protected $WA;
    protected $S;
    protected $EV;

    protected $stock_price;
    protected $interest_rate;
    protected $time_value;

    function __construct()
	{

    }

    public function getInitialValues(array $data) {

        $this->stock_price = (float)$data['stock_price'];
        $this->interest_rate = (float)$data['interest_rate'];
        $this->time_value = (float)$data['time_value'];

        $values = [
            'strike_10_00x' => $this->getStrike_10_00x_initial(),
            'strike_10_50x' => $this->getStrike_10_50x_initial(),
            'time_value' => $this->getTimeValue(),
            'volatility' => $this->getInitialVolatility(),
            'D1_A_10_50x' => $this->getD1_A_10_50x_initial(),
            'D2_A_10_50x' => $this->getD2_A_10_50x_initial(),
            'D1_B_10_50x' => $this->getD1_B_10_50x_initial(),
            'D2_B_10_50x' => $this->getD2_B_10_50x_initial(),
            'D1_A_10_00x' => $this->getD1_A_10_00x_initial(),
            'D2_A_10_00x' => $this->getD2_A_10_00x_initial(),
            'D1_B_10_00x' => $this->getD1_B_10_00x_initial(),
            'D2_B_10_00x' => $this->getD2_B_10_00x_initial(),
            'Ay_A' => $this->getAy_A_initial(),
            'Bx_A' => $this->getBx_A_initial(),
            'Ay_B' => $this->getAy_B_initial(),
            'Bx_B' => $this->getBx_B_initial(),

            'simulations' => $this->getSimulations(),
            'put' => $this->getPutA_initial(),
            'straddle' => $this->getStraddleA_initial(),
            'expected_value' => $this->getEV(),
            'total_price' => $this->getTotalPrice(),

            'interest_rate' => $this->interest_rate,
            'time_value' => $this->time_value
        ];

        return $values;
    }

    public function getStrike_10_50x_initial() {
        return round($this->getStrike_10_00x_initial() + $this->getStrike_10_00x_initial() * 0.05, 2);
    }
    public function getStrike_10_00x_initial() {
        return $this->getX();
    }
    public function getD1_A_10_50x_initial() {
        return round(($this->getX() < 0 ? (log(-$this->getX() / $this->getStrike_10_50x_initial()) + (1 + (log($this->getVolatility(), 2)) / 2) * 1) / ($this->getVolatility() * sqrt(1)) : (log($this->getX() / $this->getStrike_10_50x_initial()) + ($this->getInterestRate() + (pow($this->getVolatility(), 2)) / 2) * 1) / ($this->getVolatility() * sqrt(1))), 4);
    }
    public function getD1_B_10_50x_initial() {
        return round(($this->getX() < 0 ? (log(-$this->getX() / $this->getStrike_10_50x_initial()) + (1 + pow($this->getVolatility(), 2) / 2) * 1) / ($this->getVolatility() * sqrt(1)) : (log($this->getX() / $this->getStrike_10_50x_initial()) + ($this->getInterestRate() + pow($this->getVolatility(), 2) / 2) * 1) / ($this->getVolatility() * sqrt(1))), 4);
    }
    public function getD2_B_10_50x_initial() {
        return round($this->getD1_B_10_50x_initial() - $this->getVolatility() * sqrt(1), 4);
    }
    public function getD2_A_10_50x_initial() {
        return round($this->getD1_A_10_50x_initial() - $this->getVolatility() * sqrt(1), 4);
    }
    public function getD1_A_10_00x_initial() {
        return round(($this->getX() < 0 ? (log(-$this->getX() / $this->getStrike_10_00x_initial()) + ($this->getInterestRate() + pow($this->getVolatility(), 2) / 2) * 1) / ($this->getVolatility() * sqrt(1)) : (log($this->getX() / $this->getStrike_10_00x_initial()) + ($this->getInterestRate() + pow($this->getVolatility(), 2) / 2) * 1) / ($this->getVolatility() * sqrt(1))), 4);
    }
    public function getD2_A_10_00x_initial() {
        return round($this->getD1_A_10_00x_initial() - $this->getVolatility() * sqrt(1), 4);
    }
    public function getD1_B_10_00x_initial() {
        return round(($this->getX() < 0 ? (log(-$this->getX() / $this->getStrike_10_00x_initial()) + ($this->getInterestRate() + pow($this->getVolatility(), 2) / 2) * 1) / ($this->getVolatility() * sqrt(1)) : (log($this->getX() / $this->getStrike_10_00x_initial()) + ($this->getInterestRate() + pow($this->getVolatility(), 2) / 2) * 1) / ($this->getVolatility() * sqrt(1))), 4);
    }
    public function getD2_B_10_00x_initial() {
        return round($this->getD1_B_10_00x_initial() - $this->getVolatility() * sqrt(1), 4);
    }
    public function getAy_A_initial() {
        return round($this->getX() * stats_cdf_normal($this->getD1_A_10_00x_initial(),0, 1, 1) - $this->getStrike_10_00x_initial() * exp(-$this->getInterestRate() * 1) * stats_cdf_normal($this->getD2_A_10_00x_initial(),0, 1, 1), 2);
    }
    public function getAy_B_initial() {
        return round($this->getX() * stats_cdf_normal($this->getD1_B_10_00x_initial(),0, 1, 1) - $this->getStrike_10_00x_initial() * exp(-$this->getInterestRate() * 1) * stats_cdf_normal($this->getD2_B_10_00x_initial(),0, 1, 1), 2);
    }
    public function getBx_A_initial() {
        return round($this->getStrike_10_00x_initial() * exp(-$this->getInterestRate() * 1) * stats_cdf_normal(-$this->getD2_A_10_00x_initial(),0, 1, 1) - $this->getX() * stats_cdf_normal(-$this->getD1_A_10_00x_initial(),0, 1, 1), 2);
    }
    public function getBx_B_initial() {
        return round($this->getStrike_10_00x_initial() * exp(-$this->getInterestRate() * 1) * stats_cdf_normal(-$this->getD2_B_10_00x_initial(),0, 1, 1) - $this->getX() * stats_cdf_normal(-$this->getD1_B_10_00x_initial(),0, 1, 1), 2);
    }
    public function getInitialVolatility() {
        return round(((((0.0048 * pow($this->getA(), 2)) - (0.0009 * $this->getA()) + 0.0024) * (pow($this->getSimulations(), ((0.0228 * pow($this->getA(), 2))) - (0.1961 * $this->getA()) + 0.6277)) / pow(10, -1)) * pow($this->getX(), -1)), 4);
    }
    public function getVolatility() {
        return round(((((0.0048 * pow($this->getA(), 2)) - (0.0009 * $this->getA()) + 0.0024) * (pow($this->getSimulations(), ((0.0228 * pow($this->getA(), 2)) - (0.1961 * $this->getA()) + 0.6277))) / pow(10, -1)) * pow($this->getX(), -1)), 4);
    }
    public function getA() {
        return 0.02 * (float)($this->stock_price) - 0.1434;
    }
    public function getX() {
        return round($this->stock_price, 2);
    }
    public function getWA() {
        return round(0.0009 * $this->getX() + 0.053, 2);
    }
    public function getEV() {
        return round(0.02 * pow($this->getX(), 1.4), 2);
    }
    public function getSimulations() {
        return round(((0.02 * pow((float)($this->stock_price), 1.4) - 0.0066 * (float)($this->stock_price) - 0.0734) / 0.000950), 0);
    }
    public function getInterestRate() {
        return round(($this->interest_rate / 100), 2);
    }
    public function getTimeValue() {
        return round($this->time_value, 2);
    }
    public function getPutA_initial() {
        return round($this->getStrike_10_50x_initial() * exp(- $this->getInterestRate() * $this->getTimeValue()) * stats_cdf_normal(-$this->getD2_A_10_50x_initial(),0, 1, 1) - $this->getX() * stats_cdf_normal(-$this->getD1_A_10_50x_initial(),0, 1, 1), 2);
    }
    public function getStraddleA_initial() {
        return round($this->getAy_A_initial() + $this->getBx_A_initial(), 2);
    }
    public function getTotalPrice(){
        return round($this->stock_price + $this->getStraddleA_initial() + $this->getPutA_initial(), 2);
    }

    public function getSimValues(array $data) {

        $validator = Validator::make($data, [
            'time_value' => 'required|numeric',
            'stock_price' => 'required|numeric|between:1,1900',
            'initial_stock_price' => 'required|numeric|between:1,1900',
            'interest_rate' => 'required|numeric',
            'A' => 'required|numeric',
            'initial_sim' => 'required|numeric'
        ]);

        if ($validator->passes()) {
            $this->stock_price = (float)$data['stock_price'];
            $this->initial_stock_price = (float)$data['initial_stock_price'];
            $this->interest_rate = round((float)$data['interest_rate']/100,2);
            $this->time_value = (float)$data['time_value'];
            $this->A = (float)$data['A'];
            $this->initial_sim = (float)$data['initial_sim'];

            $values = [
                'strike_10_00x' => $this->getStrike_10_00x_sim(),
                'strike_10_50x' => $this->getStrike_10_50x_sim(),
                'time_value' => $this->time_value,
                'volatility' => $this->getSimVolatility(),
                'D1_A_10_50x' => $this->getD1_A_10_50x_sim(),
                'D2_A_10_50x' => $this->getD2_A_10_50x_sim(),
                // 'D1_B_10_50x' => $this->getD1_B_10_50x_sim(),
                // 'D2_B_10_50x' => $this->getD2_B_10_50x_sim(),
                'D1_A_10_00x' => $this->getD1_A_10_00x_sim(),
                'D2_A_10_00x' => $this->getD2_A_10_00x_sim(),
                // 'D1_B_10_00x' => $this->getD1_B_10_00x_sim(),
                // 'D2_B_10_00x' => $this->getD2_B_10_00x_sim(),
                'Ay_A' => $this->getAy_A_sim(),
                'Bx_A' => $this->getBx_A_sim(),
                // 'Ay_B' => $this->getAy_B_sim(),
                // 'Bx_B' => $this->getBx_B_sim(),

                'put' => $this->getPutA_sim(),
                'straddle' => $this->getStraddleA_sim(),
                'total_price' => $this->getSimTotalPrice(),

                'interest_rate' => $this->interest_rate,
                'time_value' => $this->time_value
            ];
            return $values;
        } else {
            throw new ApiException($validator->errors(), '004', $data);
        }

    }

    public function getStrike_10_50x_sim() {
        return round($this->getStrike_10_00x_sim() + $this->getStrike_10_00x_sim() * 0.05, 2);
    }
    public function getStrike_10_00x_sim() {
        return $this->getSimX();
    }
    public function getD1_A_10_50x_sim() {
        return round(($this->stock_price < 0 ? (log(-$this->stock_price / $this->getStrike_10_50x_sim()) + ($this->interest_rate + pow($this->getSimVolatility(),2)*$this->time_value)/($this->getSimVolatility()*sqrt($this->time_value))) : (log($this->stock_price / $this->getStrike_10_50x_sim()) + ($this->interest_rate + (pow($this->getSimVolatility(), 2)) / 2) * $this->time_value) / ($this->getSimVolatility() * sqrt($this->time_value))), 4);
    }
    // public function getD1_B_10_50x_sim() {
    //     return round(($this->getSimX() < 0 ? (log(-$this->getSimX() / $this->getStrike_10_50x_sim()) + (1 + pow($this->getSimVolatility(), 2) / 2) * 1) / ($this->getSimVolatility() * sqrt(1)) : (log($this->getSimX() / $this->getStrike_10_50x_sim()) + ($this->interest_rate + pow($this->getSimVolatility(), 2) / 2) * 1) / ($this->getSimVolatility() * sqrt(1))), 4);
    // }
    // public function getD2_B_10_50x_sim() {
    //     return round($this->getD1_B_10_50x_sim() - $this->getSimVolatility() * sqrt(1), 4);
    // }
    public function getD2_A_10_50x_sim() {
        return round($this->getD1_A_10_50x_sim() - $this->getSimVolatility() * sqrt($this->time_value), 4);
    }
    public function getD1_A_10_00x_sim() {
        return round(($this->stock_price < 0 ? (log(-$this->stock_price / $this->getStrike_10_00x_sim()) + ($this->interest_rate + pow($this->getSimVolatility(), 2) / 2) * $this->time_value) / ($this->getSimVolatility() * sqrt($this->time_value)) : (log($this->stock_price / $this->getStrike_10_00x_sim()) + ($this->interest_rate + pow($this->getSimVolatility(), 2) / 2) * $this->time_value) / ($this->getSimVolatility() * sqrt($this->time_value))), 4);
    }
    public function getD2_A_10_00x_sim() {
        return round($this->getD1_A_10_00x_sim() - $this->getSimVolatility() * sqrt($this->time_value), 4);
    }
    // public function getD1_B_10_00x_sim() {
    //     return round(($this->getSimX() < 0 ? (log(-$this->getSimX() / $this->getStrike_10_00x_sim()) + ($this->interest_rate + pow($this->getSimVolatility(), 2) / 2) * 1) / ($this->getSimVolatility() * sqrt(1)) : (log($this->getSimX() / $this->getStrike_10_00x_sim()) + ($this->interest_rate + pow($this->getSimVolatility(), 2) / 2) * 1) / ($this->getSimVolatility() * sqrt(1))), 4);
    // }
    // public function getD2_B_10_00x_sim() {
    //     return round($this->getD1_B_10_00x_sim() - $this->getSimVolatility() * sqrt(1), 4);
    // }
    public function getAy_A_sim() {
        return round($this->stock_price * stats_cdf_normal($this->getD1_A_10_00x_sim(),0, 1, 1) - $this->getStrike_10_00x_sim() * exp(-$this->interest_rate * $this->time_value) * stats_cdf_normal($this->getD2_A_10_00x_sim(),0, 1, 1), 2);
    }
    // public function getAy_B_sim() {
    //     return round($this->getSimX() * stats_cdf_normal($this->getD1_B_10_00x_sim(),0, 1, 1) - $this->getStrike_10_00x_sim() * exp(-$this->interest_rate * 1) * stats_cdf_normal($this->getD2_B_10_00x_sim(),0, 1, 1), 2);
    // }
    public function getBx_A_sim() {
        return round($this->getStrike_10_00x_sim() * exp(-$this->interest_rate * $this->time_value) * stats_cdf_normal(-$this->getD2_A_10_00x_sim(),0, 1, 1) - $this->stock_price * stats_cdf_normal(-$this->getD1_A_10_00x_sim(),0, 1, 1), 2);
    }
    // public function getBx_B_sim() {
    //     return round($this->getStrike_10_00x_sim() * exp(-$this->interest_rate * 1) * stats_cdf_normal(-$this->getD2_B_10_00x_sim(),0, 1, 1) - $this->getSimX() * stats_cdf_normal(-$this->getD1_B_10_00x_sim(),0, 1, 1), 2);
    // }
    public function getSimVolatility() {
        return round(((((0.0048 * pow($this->getSimA(), 2)) - (0.0009 * $this->getSimA()) + 0.0024) * (pow($this->initial_sim, ((0.0228 * pow($this->getSimA(), 2)) - (0.1961 * $this->getSimA()) + 0.6277))) / pow(10, -1)) * pow($this->getSimX(), -1)), 4);
    }
    public function getSimA() {
        return $this->A;
    }
    public function getSimX() {
        return round($this->initial_stock_price, 2);
    }
    // public function getWA() {
    //     return round(0.0009 * $this->getSimX() + 0.053, 2);
    // }
    // public function getEV() {
    //     return round(0.02 * pow($this->getSimX(), 1.4), 2);
    // }
    // public function getSimulations() {
    //     return round(((0.02 * pow((float)($this->stock_price), 1.4) - 0.0066 * (float)($this->stock_price) - 0.0734) / 0.000950), 0);
    // }

    public function getPutA_sim() {
        return round($this->getStrike_10_50x_sim() * exp(- $this->interest_rate * $this->time_value) * stats_cdf_normal(-$this->getD2_A_10_50x_sim(),0, 1, 1) - $this->stock_price * stats_cdf_normal(-$this->getD1_A_10_50x_sim(),0, 1, 1), 2);
    }
    public function getStraddleA_sim() {
        return round($this->getAy_A_sim() + $this->getBx_A_sim(), 2);
    }
    public function getSimTotalPrice(){
        return round($this->stock_price + $this->getStraddleA_sim() + $this->getPutA_sim(), 2);
    }
    public function simulate(array $data, $trigger_event=false){

        $win_amount = round(0.0009 * $data['initial_stock_price'] + 0.053, 2);
        $A = 0.02 * $data['initial_stock_price'] - 0.1434;
        $partB = Security::where('security_number', $data['security_number'])->where('type', 'B')->first();
        $partA = Security::where('security_number', $data['security_number'])->where('type', 'A')->first();
        $_random = rand(0, 1);

        $old_total_amount_partA = (1.3 * $partA->total_price);
        $old_total_amount_partB = (1.3 * $partB->total_price);
        $old_total_amount = $old_total_amount_partA + $old_total_amount_partB;

        if ($_random == 0) {
            if ($data['simulations'] == 1) {
                $partA->stock_price += $win_amount;
                $partB->stock_price -= $win_amount + round($A, 2);
            } else {
                $partA->stock_price += $win_amount;
                $partB->stock_price -= $win_amount;
            }
        } else {
            if ($data['simulations'] == 1) {
                $partA->stock_price -= $win_amount + round($A, 2);
                $partB->stock_price += $win_amount;
            } else {
                $partA->stock_price -= $win_amount;
                $partB->stock_price += $win_amount;
            }
        }

        if($partA->simulations == 0 ||$partB->simulations ==0){
            return;
        }
        $partA->simulations -= 1;
        $partB->simulations -= 1;


        $done_sim = 0;
        $done_sim = $data['initial_sim'] - $partA->simulations;

        if ($done_sim < $data['initial_sim']) {
            $data['time_value'] = ($partA->simulations) / $data['initial_sim'];
        } else {
            $data['time_value'] = 0.000000000001;
        }
        // $partB['time_value'] = 1;

        $_new_values_security_partA = $this->getSimValues([
            'time_value' => $data['time_value'],
            'stock_price' => $partA->stock_price,
            'initial_stock_price' => $partA->initial_stock_price,
            'interest_rate' => $partA->interest_rate,
            'A' => $A,
            'initial_sim' => $partA->initial_sim
        ]);
        $_new_values_security_partB = $this->getSimValues(
            [
                'time_value' => $data['time_value'],
                'stock_price' => $partB->stock_price,
                'initial_stock_price' => $partB->initial_stock_price,
                'interest_rate' => $partB->interest_rate,
                'A' => $A,
                'initial_sim' => $partB->initial_sim

            ]
        );
        $partA->put = $_new_values_security_partA['put'];
        $partA->straddle = $_new_values_security_partA['straddle'];
        $partA->total_price = $_new_values_security_partA['total_price'];

        $partB->put = $_new_values_security_partB['put'];
        $partB->straddle = $_new_values_security_partB['straddle'];
        $partB->total_price = $_new_values_security_partB['total_price'];



        $_partA = $partA->toArray();
        $_partA["security_id"] = $partA->id;
        $_partB = $partB->toArray();
        $_partB["security_id"] = $partB->id;


        //Rebalance SF

        $new_total_amount_partA = (1.3 * $partA->total_price);
        $new_total_amount_partB = (1.3 * $partB->total_price);
        $new_total_amount = $new_total_amount_partA + $new_total_amount_partB;

        $difference = $new_total_amount - $old_total_amount;
        $nvic = Account::where('account_type', 'nvic')->first();
        $sf = Account::where('account_type', 'sf')->first();
        if($difference < $nvic->balance){
            $partA->save();
            $partB->save();
            $cSecurityLog = new CSecurityLog();
            $cSecurityLog->create($_partA);
            $cSecurityLog->create($_partB);

            $nvic->balance = $nvic->balance - $difference;
            $nvic->withdrawable = $nvic->withdrawable - $difference;
            $sf->balance = $sf->balance + $difference;
            $sf->withdrawable = $sf->withdrawable + $difference;
            $nvic->save();
            $sf->save();

            if ($trigger_event == true) {
                $event_data = [

                    'partA' => $partA,
                    'partB' => $partB
                ];
                event(new SimJobUpdated($event_data));
            }
            return $partA;
        }else {
            throw new ApiException("We can't run the simulation at the moment.", '004', []);
        }

    }

}
