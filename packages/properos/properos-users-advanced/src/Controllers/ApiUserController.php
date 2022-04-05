<?php

namespace Properos\Users\Controllers;

use Properos\Users\Models\User;
use Illuminate\Http\Request;
use Properos\Base\Classes\Api;
use Properos\Base\Exceptions\ApiException;
use Illuminate\Support\Facades\Validator;
use Properos\Users\Classes\CLedger;
use Properos\Base\Controllers\ApiController;
use Properos\Users\Classes\CUserActivityLog;
use Properos\Users\Classes\CUser;

class ApiUserController extends ApiController
{
    private $user;
    private $cuser;

    public function __construct(User $user, CUser $cuser)
    {
        $this->user = $user;
        $this->cuser = $cuser;
    }

    public function storeUser(Request $request)
    {
        $data = $request->all();
        $data['creator'] = $request->user();
        $user = $this->cuser->storeUser($data);
        if ($user) {
            return Api::success("User created successfully", $user);
        }
        throw new ApiException("Error creating the user", "002", []);
    }

    public function updateUser(Request $request)
    {
        $user = $this->cuser->updateUser($request->all());
        if ($user) {
            return Api::success("User updated successfully", $user);
        }
        throw new ApiException("Error updating user", "002", []);
    }
    
    public function updateProfile(Request $request)
    {
        $user = $this->cuser->updateUser($request->all());
        if ($user) {
            return Api::success("User updated successfully", $user);
        }
        throw new ApiException("Error updating user", "002", []);
    }

    public function removeRole(Request $request)
    {
        $removed_role = $this->cuser->removeRole($request->all());
        if ($removed_role) {
            return Api::success("Role removed successfully updated successfully", $removed_role);
        }
        throw new ApiException("Error removing role", "002", []);
    }

    public function changeUserPassword($id, Request $request)
    {
        if(\Auth::user()->hasRole('sales') && \Auth::user()->id != $id){
            throw new ApiException("Access forbidden", '404');
        }
        $data['new_password'] = $request->input('new_password');
        $data['new_password_confirmation'] = $request->input('new_password_confirmation');

        $validator = Validator::make($data, [
            'new_password' => 'required|max:255',
            'new_password_confirmation' => 'required|max:255'
        ]);
        if ($validator->passes()) {
            if ($id > 0) {
                if ($data['new_password'] === $data['new_password_confirmation']) {
                    $user = User::find($id);
                    if ($user) {
                        $user->password = null;
                        $user->password = bcrypt($data['new_password']);
                        $user->save();

                        $data = [
                            'user_id' => $user->id,
                            'name' => $user->firstname.' '.$user->lastname,
                            'description' => 'Reset Password Action',
                            'activity_type' => 'reset_password',
                            'activity_id' => 0,
                        ];
                        $cActivity = new CUserActivityLog();
                        $cActivity->create($data);
                        
                        return Api::success('User password changed successfully', []);
                    }
                    return Api::error('001', 'User not found', []);
                } else {
                    return Api::error('002', 'Password and password confirmation are not equal', []);
                }
            }
        } else {
            throw new ApiException($validator->errors(), '006', $data);
        }

        return Api::error('003', 'There was an error changing the user not found', []);
    }

    public function searchLedgers(Request $request)
    {
        $cLedger = new CLedger();
        $options = $cLedger->standardize_search($request);
        $ledgers = $cLedger->find($options);
        
        return $this->setPagination($cLedger->get_paginator()->toArray())->respondData('Ledgers search result.', $ledgers);
	}
}