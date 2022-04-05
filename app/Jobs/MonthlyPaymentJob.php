<?php

namespace App\Jobs;

use App\Classes\CSecurity;
use App\Classes\CSimulation;
use App\Models\Account;
use App\Models\Holding;
use App\Models\Security;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Properos\Users\Models\User;

class MonthlyPaymentJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Execute the job.
     *
     * @return void
     */

    public function handle()
    {
        $accounts = Account::with('holdings.security')->get();
        $total_sim_all = 0;

        $array_accounts = [];
        $admin_accounts = [];
        foreach ($accounts as $key => $account){

            if($account->account_type == 'nvic' || $account->account_type == 'mdf' || $account->account_type == 'sf'){
                $admin_accounts[$account->account_type] = $account;
                continue;
            }

            $total_security_account = 0;
            $count_security_account = 0;
            $sim_total_price = 0;

            foreach ($account->holdings as $key => $holding){
                if($holding->status == "active"){
                    $sec_remaining_sim = $holding->security->simulations;
                    $sim_total_price += $holding->security->total_price;
                    $total_sim_all += $sec_remaining_sim;
                    $total_security_account += $sec_remaining_sim;
                    $count_security_account ++;
                }
            }

            if($count_security_account > 0 && $total_security_account > 0){
                $array_accounts[$account->id] = [
                        "total_sim"=> $total_security_account,
                        "total_price"=> $sim_total_price
                ];
            }
        }

        $total_payments = 0;

        $cSimulation = new CSimulation();
        $cSecurity = new CSecurity($cSimulation);

        foreach($accounts as $account){
            $interest = 0;
            if(isset($array_accounts[$account->id])){
                $interest = ($array_accounts[$account->id]["total_sim"] / (2*$total_sim_all))*100;
                $account->balance += ($admin_accounts['mdf']->balance * $interest)/100;
                $account->withdrawable += ($admin_accounts['mdf']->balance * $interest)/100;
                $total_payments += ($admin_accounts['mdf']->balance * $interest)/100;
                $data = [
                    'amount' => (float)($admin_accounts['mdf']->balance * $interest) / 100,
                    'creator_id' => $account->user_id,
                    'operation' => 'mdf',
                    'ending_balance' =>  $account->balance,
                    'ending_withdrawable' => $account->withdrawable,
                    'status' => 'settled'
                ];
                $transaction = $cSecurity->buildTransaction($data);
                $account->transactions()->save($transaction);
                $account->save();
            }
        }


        $admin_accounts['nvic']->balance += $total_payments;
        $admin_accounts['nvic']->withdrawable += $total_payments;
        $admin_accounts['mdf']->balance = 0;

        $admin_accounts['nvic']->save();
        $admin_accounts['mdf']->save();

    }
}
