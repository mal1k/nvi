<?php

namespace Properos\Users\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Properos\Base\Classes\Theme;
use Properos\Users\Classes\CUserActivityLog;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
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
        $this->middleware('guest')->except('logout');
    }

    public function showLoginForm()
    {
        return view('themes.' . Theme::get() . '.auth.login')->with(['theme' => Theme::get()]);
    }

    protected function authenticated($request, $user)
    {
        $url = $user->roles->pluck('url');
        $data = [
            'user_id' => $user->id,
            'name' => $user->firstname . ' ' . $user->lastname,
            'description' => 'Login Action',
            'activity_type' => 'login',
            'activity_id' => 0,
        ];
        $cActivity = new CUserActivityLog();
        $cActivity->create($data);

        if (count($url)) {
            return redirect()->intended($url[0]);
        }
        return redirect()->intended('/');
    }

    public function logout(Request $request)
    {
        if (\Auth::check()) {
            $data = [
                'user_id' => \Auth::user()->id,
                'name' => \Auth::user()->firstname . ' ' . \Auth::user()->lastname,
                'description' => 'Logout Action',
                'activity_type' => 'logout',
                'activity_id' => 0,
            ];
            $cActivity = new CUserActivityLog();
            $cActivity->create($data);

            $this->guard()->logout();

            $request->session()->invalidate();

            return $this->loggedOut($request) ?: redirect('/');
        } else {
            return redirect('/');
        }
    }
}
