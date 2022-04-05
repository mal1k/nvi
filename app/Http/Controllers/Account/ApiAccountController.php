<?php

namespace App\Http\Controllers\Account;

use App\Classes\CAccount;
use App\Classes\CDashboard;
use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\TransactionHistory;
use Illuminate\Http\Request;
use Properos\Base\Classes\Api;
use Properos\Base\Controllers\ApiController;
use Properos\Base\Exceptions\ApiException;
use Properos\Users\Models\User;

class ApiAccountController extends ApiController
{
    protected $cAccount;

    public function __construct(CAccount $cAccount)
    {
        $this->cAccount = $cAccount;
    }

    public function index(Request $request)
    {
        $options = $this->cAccount->standardize_search($request);
        $accounts = $this->cAccount->find($options);
        return $this->setPagination($this->cAccount->get_paginator()->toArray())->respondData('Accounts search result.', $accounts);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        if(isset($data['user_id'])){
            $user = User::find($data['user_id']);
            if($user){
                $data['user'] = $user;
                $data['creator'] = $request->user();
                $account = $this->cAccount->store($data,$user);
                if ($account) {
                    return Api::success("Account created successfully", $account);
                }
                throw new ApiException("Error creating the account", "002", []);
            }
        }
        throw new ApiException("User not found", "404", []);
    }

    public function update(Request $request)
    {
        $data = $request->all();
        if(isset($data['user_id'])){
            $user = User::find($data['user_id']);
            if($user){
                $data['user'] = $user;
                $account = $this->cAccount->update($data);
                if ($account) {
                    return Api::success("Account updated successfully", $account);
                }
                throw new ApiException("Error updating the account", "002", []);
            }
        }
        throw new ApiException("User not found", "404", []);
    }

    public function show(Request $request, $id)
    {
        $account = Account::find($id);
        if($account){
            if($request->user()->id == $account->user_id || $request->user()->hasAnyRole('admin|super_admin')){
                return Api::success("Account details", $account);
            } else {
                throw new ApiException("Forbidden action", "403", []);
            }
        }
        throw new ApiException("Account not found", "404", []);
    }

    public function getTransactions($id)
    {
        $transactions = TransactionHistory::where('origin_type', Account::class)->where('origin_id', $id)->orderBy('created_at', 'desc')->paginate(8);
        if($transactions){
            return Api::success("Account transactions", $transactions);
        }
    }

    public function getUserAccount(){
        $user = \Auth::user()->id;
        $account = Account::where('user_id',$user)->first();
        return Api::success("User account", $account);
    }
}
