<?php

namespace Properos\Users\Controllers;

use Illuminate\Http\Request;
use Properos\Users\Classes\CUser;
use Properos\Base\Controllers\ApiController;
use Spatie\Permission\Models\Role;
use Properos\Users\Models\User;


class UserController extends ApiController
{
	public function index()
    {
        $roles = Role::all();
        return view('be.users.index')->with(['roles'=>$roles]);
	}
	
	public function usersSearch(Request $request)
    {
        $cUser = new CUser();
        $options = $cUser->standardize_search($request);
        $users = $cUser->find($options);
        
        return $this->setPagination($cUser->get_paginator()->toArray())->respondData('Users search result.', $users);
	}

	public function setUser($user_id)
    {
        \Session::put('return_user', \Auth::user()->id);

        \Auth::loginUsingId($user_id);
        return redirect('/investor/accounts');
    }
	
    public function returnUser()
    {
		if (\Session::has('return_user'))
		{
			\Auth::loginUsingId(\Session::pull('return_user', 1));
			return redirect('/admin/users');
		} else {
			return redirect('/');
		}
    }
    public function createUser()
    {
        $roles = Role::all();
        return view('be.users.create-user')->with([
            'roles' => $roles,
        ]);
    }

    public function editUser($id)
    {
        if ($id > 0) {
            $user = User::where('id', $id)->with(['addresses'=>function($query){
                $query->where('default', 1)->limit(1);
            }])->first();
            
            if ($user) {
                $modified_user = new \stdClass();
                $modified_user = $user;
                $modified_user->_roles = $user->getCurrentRoles();
                $roles = Role::all();
                return view('be.users.create-user', [
                    'roles' => $roles,
                    'editable_user' => $modified_user
                ]);
            } else {
                abort(404);
            }
        }
    }
    public function profile()
    {
        return view('be.users.my-profile')->with([
            'editable_user' => User::where('id',\Auth::user()->id)->with(['addresses'=>function($query){
                $query->where('default',1)->limit(1);
            }])->first(),
        ]);
    }
}
