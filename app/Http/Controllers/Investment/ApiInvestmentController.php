<?php

namespace App\Http\Controllers\Investment;

use App\Classes\CAccount;
use App\Classes\COrder;
use App\Classes\CSecurity;
use App\Classes\CSecurityLog;
use App\Events\AccountUpdated;
use App\Events\DashboardUpdated;
use App\Models\Account;
use App\Models\Holding;
use App\Models\Security;
use App\Models\SecurityLog;
use App\Models\TransactionHistory;
use App\Jobs\SimMultipleSecurity;
use Illuminate\Http\Request;
use Properos\Base\Classes\Api;
use Properos\Base\Controllers\ApiController;
use Properos\Base\Exceptions\ApiException;
use Illuminate\Support\Facades\Validator;
use Properos\Accounting\Classes\CPaymentProfile;
use Properos\Accounting\Models\PaymentProfile;
use Properos\Accounting\Models\Transaction;
use Properos\Users\Classes\CUser;

class ApiInvestmentController extends ApiController
{
    protected $cAccount;
    protected $cSecurity;

    public function __construct(CAccount $cAccount, CSecurity $cSecurity, CSecurityLog $cSecurityLog)
    {
        $this->cAccount = $cAccount;
        $this->cSecurity = $cSecurity;
        $this->cSecurityLog = $cSecurityLog;
    }


    public function addFunds(Request $request)
    {
        $data = $request->all();
        $data['user'] = $request->user();
        $account = $this->cAccount->addFunds($data);
        if ($account) {
            return Api::success("Funds added successfully", $account);
        }
        throw new ApiException("Error adding funds to this account", "002", $data);
    }

    public function withdrawCash(Request $request)
    {
        $data = $request->all();
        $data['user'] = $request->user();
        $account = $this->cAccount->withdrawCash($data);
        if ($account) {
            return Api::success("Cash withdraw requested successfully", $account);
        }
        throw new ApiException("Error requesting cash withdraw", "002", $data);
    }

    public function buySecurity(Request $request)
    {
        $data = $request->all();
        $data['user'] = $request->user();
        $holding = $this->cSecurity->buySecurity($data);
        if ($holding) {
            return Api::success("Operation success", $holding);
        }
        throw new ApiException("Error buying this security", "002", $data);
    }

    public function sellHolding(Request $request)
    {
        $data = $request->all();
        $data['user'] = $request->user();
        $holding = $this->cSecurity->sellHolding($data);
        if ($holding) {
            return Api::success("Operation success", $holding);
        }
        throw new ApiException("Error selling this holding", "002", $data);
    }


    public function simSecurity (Request $request) {
        $data = $request->all();
        if(!isset($data['sim'])){
            $data['sim']=1;
        }
        if ($data['sim'] > $data['security']['simulations']){
            $data['sim']= $data['security']['simulations'];
        }
        if($data['sim']>300){
            dispatch(new SimMultipleSecurity($data));
            return Api::success("Operation in progress", []);

        }
        else{

            for ($i=0; $i < $data['sim']; $i++) {
                $sim_security = $this->cSecurity->simulate($data['security']);
            }
        }
        if ($sim_security) {
            $partA = SecurityLog::select('total_price')->where([
                ['security_number',$data['security']['security_number']],
                ['type','A']
            ])->get()->toArray();
            $partB = SecurityLog::select('total_price')->where([
                ['security_number',$data['security']['security_number']],
                ['type','B']
            ])->get()->toArray();

            return Api::success("Operation success", [
                "security" => $sim_security,
                "sim_A" => $partA,
                "sim_B" => $partB,
            ]);
        }

    }

    public function graphInfo (Request $request)
    {
        $data = $request->all();
        $validator = Validator::make($data, [
            'security_number' => 'required|numeric',
            ]);
        if($validator->passes()){
            $partA = SecurityLog::select('total_price')->where([
                ['security_number',$data['security_number']],
                ['type','A']
            ])->get()->toArray();
            $partB = SecurityLog::select('total_price')->where([
                ['security_number',$data['security_number']],
                ['type','B']
            ])->get()->toArray();
            return Api::success("Operation success", [
                "sim_A" => $partA,
                "sim_B" => $partB,
            ]);
        }else{
            throw new ApiException($validator->errors(), '004', $data);
        }

    }

    public function tableInfo(Request $request)
    {
        $options = $this->cSecurityLog->standardize_search($request);
        $securities = $this->cSecurityLog->find($options);
        return $this->setPagination($this->cSecurityLog->get_paginator()->toArray())->respondData('Securities Logs search result.', $securities);
    }

    public function showProfile(Request $request)
    {
        return $this->show($request, Auth::user()->id);
    }

    public function changePassword(Request $request)
    {
        $data = $request->all();
        $data['user_id'] = \Auth::user()->id;
        return $this->respondData('The password was successfully changed.', (new CUser())->changePassword($data));
    }

    public function updateProfile(Request $request)
    {
        $cUser = new CUser();
        $user =  $cUser->updateUser($request->all());
        if ($user) {
            return Api::success("User updated successfully", $user);
        }
        throw new ApiException("Error updating user", "002", []);
    }

}
