<?php

namespace Properos\Users\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Properos\Base\Classes\Theme;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Str;
use Properos\Users\Classes\CUserActivityLog;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
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

    public function showResetForm(Request $request, $token = null)
    {
        return view('themes.'.Theme::get().'.auth.passwords.reset')->with(
            ['token' => $token, 'email' => $request->email, 'theme' => Theme::get()]
        );
    }

    protected function resetPassword($user, $password)
    {
        $data = [
            'user_id' => $user->id,
            'name' => $user->firstname.' '.$user->lastname,
            'description' => 'Reset Password Action',
            'activity_type' => 'reset_password',
            'activity_id' => 0,
        ];
        $cActivity = new CUserActivityLog();
        $cActivity->create($data);


        $user->password = Hash::make($password);

        $user->setRememberToken(Str::random(60));

        $user->save();

        event(new PasswordReset($user));

        $this->guard()->login($user);
    }
}
