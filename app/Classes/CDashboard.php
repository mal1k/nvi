<?php

namespace App\Classes;

use App\Models\Account;
use App\Models\Dashboard;
use App\Models\Holding;
use App\Models\Security;
use App\Models\TransactionHistory;
use Properos\Base\Exceptions\ApiException;

class CDashboard
{
    public function create(array $data)
    {
        $rules = [
            'account_id' => 'required'
        ];

        $validator = \Validator::make($data, $rules);

        if ($validator->fails()) {
            throw new ApiException($validator->errors(), '003', []);
        }

        $account_dashboard = Dashboard::where('account_id', $data['account_id'])->first();


        if(!$account_dashboard){
            $account_dashboard = new Dashboard();
        }

        /****ACCOUNT BOX */

        $account = Account::where('id', $data['account_id'])->first();
        $account_dashboard->account_id = $data['account_id'];
        $account_dashboard->user_id = $account->user_id;
        $account_box['balance'] = $account->balance;

        $holdings = Holding::where('account_id', $data['account_id'])->where('status', 'active')->where('security_id', '>', 0)->get();

        $total_sims_owned = 0;
        $total_sims_actual = 0;
        $unrealized_value = 0;
        foreach ($holdings as $holding) {
            $security = Security::where('id', $holding->security_id)->first();
            $total_sims_owned += $security->simulations;
            $total_sims_actual += $security->initial_sim;
            $unrealized_value += $security->initial_stock_price;
        }

        $account_box['unrealized'] = $unrealized_value;


        /****HOLDING BOX */
        $holdings_box['sims_owned'] = $total_sims_owned;

        //GET TOTAL SIMS OWNED
        $all_accounts = Account::with('holdings.security')->get();
        $total_sim_all = 0;

        $array_accounts = [];
        $admin_accounts = [];
        foreach ($all_accounts as $key => $all_account) {

            if ($all_account->account_type == 'nvic' || $all_account->account_type == 'mdf' || $all_account->account_type == 'sf') {
                $admin_accounts[$all_account->account_type] = $all_account;
                continue;
            }

            $total_security_account = 0;
            $count_security_account = 0;
            $sim_total_price = 0;

            foreach ($all_account->holdings as $key => $holding) {
                if ($holding->status == "active") {
                    $sec_remaining_sim = $holding->security->simulations;
                    $sim_total_price += $holding->security->total_price;
                    $total_sim_all += $sec_remaining_sim;
                    $total_security_account += $sec_remaining_sim;
                    $count_security_account++;
                }
            }

            // if ($count_security_account > 0 && $total_security_account > 0) {
                $array_accounts[$all_account->id] = [
                    "total_sim" => $total_security_account,
                    "total_price" => $sim_total_price
                ];
            // }
        }


        foreach ($all_accounts as $all_account) {
            $ownership = 0;
            if (isset($array_accounts[$all_account->id])) {
                if($total_sim_all == 0){
                    $ownership = 0;
                }else{
                    $ownership = ($array_accounts[$all_account->id]["total_sim"] / (2 * $total_sim_all)) * 100;
                }
                $array_accounts[$all_account->id]["ownership"] = round($ownership,2, PHP_ROUND_HALF_DOWN);
                $array_owners[$all_account->id] = $array_accounts[$all_account->id]['ownership'];

            }
        }

        // foreach ($array_accounts as $key => $a_account){

        // }
        if(isset($array_owners)){
            arsort($array_owners);
            $rank = 1;
            foreach($array_owners as $key => $array_owner){
                if(isset($array_accounts[$key])){
                    $array_accounts[$key]['rank'] = $rank;
                    $rank = $rank + 1;
                }
            }
        }


        if(isset($array_accounts[$data["account_id"]])){
            $holdings_box['ownership'] = $array_accounts[$data["account_id"]]["ownership"];
            $holdings_box['rank'] = $array_accounts[$data["account_id"]]["rank"];
        }

        $holdings_box['sec_owned'] = Holding::where('account_id', $data["account_id"])->where('status', 'active')->count();


        /********Available Box */

        $available_securities = Security::where('status', 'active')->where('type', 'A')
        ->get();
        $total_available_sims = 0;
        $dollar_amount = 0;
        foreach ($available_securities as $available_security) {
            $total_available_sims += $available_security->simulations;
            $dollar_amount += $available_security->total_price;
        }
        $securities_box['sims']= $total_available_sims;
        $securities_box['dollar_amount']= $dollar_amount;
        $number_available_securities = Security::where('status', 'active')->where('type', 'A')
            ->count();
        $securities_box['number_sec']= $number_available_securities;


        /******MDF BOX */
        $mdf = Account::where('account_type', 'mdf')->first();
        $mdf_box['balance']= (($mdf && $mdf->balance) ? $mdf->balance : 0);

        $last_mdf_trans = TransactionHistory::where('operation','mdf')->where('origin_id', $data["account_id"])->orderBy('created_at','desc')->first();
        if(isset($last_mdf_trans)){
            $mdf_box['previous_month']=$last_mdf_trans->amount;
        }else{
            $mdf_box['previous_month']=0;
        }
        if(isset($holdings_box['ownership'])){
            $mdf_box['eom'] = $holdings_box['ownership']* (($mdf && $mdf->balance) ? $mdf->balance : 0)/100;
        }else {
            $mdf_box['eom'] = 0;
        }

        $data = [
            'account' => $account_box,
            'holding' =>$holdings_box,
            'securities' => $securities_box,
            'mdf' => $mdf_box
        ];



        $account_dashboard->data = $data;
        $account_dashboard->save();
        return ($account_dashboard);
    }

}
