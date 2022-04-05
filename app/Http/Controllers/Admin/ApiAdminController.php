<?php

namespace App\Http\Controllers\Admin;

use App\Classes\CAccount;
use App\Classes\CSecurity;
use App\Classes\CTransactionHistory;
use App\Http\Controllers\Controller;
use App\Models\TransactionHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Properos\Base\Classes\Api;
use Properos\Base\Controllers\ApiController;
use Properos\Base\Exceptions\ApiException;
use Properos\Users\Models\User;

class ApiAdminController extends ApiController
{
    protected $cAccount;
    protected $cSecurity;

    public function __construct(CAccount $cAccount, CSecurity $cSecurity)
    {
        $this->cAccount = $cAccount;
        $this->cSecurity = $cSecurity;
    }

    public function removeUserAvatar(User $user)
    {
        if($user){
            if($user->avatar != ''){
                if(Storage::disk('public')->delete($user->avatar)){
                    $user->avatar = null;
                    if($user->save()){
                        $modified_user = new \stdClass();
                        $modified_user = $user;
                        $modified_user->_roles = $user->getCurrentRoles();
                        return $this->respondData("Avatar removed successfully", $modified_user);
                    } else {
                        return Api::error('500', 'Error removing the avatar', []);
                    }
                } else {
                    return Api::error('500', 'Error removing avatar file', []);
                }
            } else {
                return Api::error('422', 'Avatar not found', []);
            }
        } else {
            return Api::error('404', 'User not found', []);
        }
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


    public function withdrwasList(Request $request)
    {
        $cTransactionHistory = new CTransactionHistory();
        $options = $cTransactionHistory->standardize_search($request);
        $accounts = $cTransactionHistory->find($options);
        return $this->setPagination($cTransactionHistory->get_paginator()->toArray())->respondData('Withdraws search result.', $accounts);
    } 
    
    public function completeWithdraws(Request $request)
    {
        $rules = [
            'id' => 'required|integer|min:1'
        ];

        $data = $request->all();

        $validator = \Validator::make($data, $rules);

        if($validator->fails()){
            throw new ApiException($validator->errors(), '003', $data);
        }

        $withdraw = TransactionHistory::where('id', $data['id'])->where('status', 'pending')->first();

        if(!$withdraw){
            throw new ApiException("Request doesn't exist");
        }

        $withdraw->status = 'approved';
        $withdraw->save();

        return Api::success("Withdraw requested is completed successfully", $withdraw);
    }
}
