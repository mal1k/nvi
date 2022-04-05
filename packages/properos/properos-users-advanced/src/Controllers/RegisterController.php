<?php

namespace Properos\Users\Controllers;

use App\Classes\CAccount;
use Properos\Users\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Properos\Base\Classes\Theme;
use Illuminate\Http\Request;
use Properos\Base\Classes\Api;
use Properos\Base\Controllers\ApiController;

class RegisterController extends ApiController
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        $user = User::create([
            'firstname' => $data['name'],
            'lastname' => $data['lastname'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
        $user->assignRole('investor');
        $user_account = (new CAccount())->store([
            "user" => $user,
            "creator" => $user,
            "account_type" => "personal",
            "name" => "investor"
        ],$user);
        \Auth::loginUsingId($user->id);
        return $user;
    }

    public function showRegistrationForm()
    {
        return view('themes.'.Theme::get().'.auth.register')->with(['theme'=>Theme::get()]);
    }

    public function apiRegister(Request $request)
    {
        $data = $request->all();
        $validator = $this->validator($data);

        if ($validator->passes()) {
            $res = $this->create($data);
            $res['redirect'] = $this->redirectTo;

           //\Auth::guard('web')->login(User::find($res['user']['id']));
            return $this->respondData('Your account was successfully created.', $res);
        }

        return response()->json(Api::error('002', $validator->errors()));
    }

}
