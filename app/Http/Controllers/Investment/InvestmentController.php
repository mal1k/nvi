<?php

namespace App\Http\Controllers\Investment;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Holding;
use App\Models\Security;
use App\Models\TransactionHistory;
use Illuminate\Http\Request;

class InvestmentController extends Controller
{
    public function index(Request $request)
    {
        $active_accounts = Account::with('holdings')->where('user_id', $request->user()->id)
        ->where('status', 'active')
        ->get();

        $total_holdings = collect([]);
        if($active_accounts->count() > 0){
            foreach ($active_accounts as $account) {
                foreach ($account->holdings as $holding) {
                    if($holding->status=="active"){
                        $total_holdings->push($holding);
                    };
                }
            }
        }

        $available_securities = Security::where('status', 'active')->where('type', 'A')
        ->count();

        $total_mdf = Account::where('account_type', 'mdf')
        ->first();

        return  view('themes.' . \Properos\Base\Classes\Theme::get() . '.user-dashboard')->with([
            'active_accounts' => ($active_accounts) ? $active_accounts : 0,
            'total_holdings' => $total_holdings->count(),
            'available_securities' => $available_securities,
            'total_mdf' => ($total_mdf) ? $total_mdf->balance : 0,
            'theme' => \Properos\Base\Classes\Theme::get()
            ]);
    }

    public function accounts(Request $request)
    {
        $active_accounts = Account::where('user_id', $request->user()->id)
        ->where('status', 'active')
        ->get();
        return  view('themes.' . \Properos\Base\Classes\Theme::get() . '.accounts')->with([
            'accounts' => $active_accounts,
            'theme' => \Properos\Base\Classes\Theme::get()
            ]);
    }

    public function deposit(Request $request)
    {
        $active_accounts = Account::where('user_id', $request->user()->id)
        ->where('status', 'active')
        ->get();
        return  view('themes.' . \Properos\Base\Classes\Theme::get() . '.deposit')->with([
            'accounts' => $active_accounts,
            'theme' => \Properos\Base\Classes\Theme::get()
            ]);
    }

    public function withdraw(Request $request)
    {
        $active_accounts = Account::where('user_id', $request->user()->id)
        ->where('status', 'active')
        ->get();
        return  view('themes.' . \Properos\Base\Classes\Theme::get() . '.withdraw')->with([
            'accounts' => $active_accounts,
            'theme' => \Properos\Base\Classes\Theme::get()
            ]);
    }

    public function available(Request $request)
    {
        $active_securities = Security::where('status', 'active')->paginate(10);
        $active_accounts = Account::where('user_id', $request->user()->id)
        ->where('status', 'active')
        ->get();
        return  view('themes.' . \Properos\Base\Classes\Theme::get() . '.securities')->with([
            'accounts' => $active_accounts,
            'active_securities' => $active_securities,
            'theme' => \Properos\Base\Classes\Theme::get()
            ]);
    }

    public function holdings(Request $request)
    {
        $active_accounts = Account::where('user_id', $request->user()->id)
        ->where('status', 'active')
        ->get();
        return  view('themes.' . \Properos\Base\Classes\Theme::get() . '.holdings')->with([
            'accounts' => $active_accounts,
            'theme' => \Properos\Base\Classes\Theme::get()
            ]);
    }

    public function simulation(Request $request)
    {
        $active_accounts_id = Account::where('user_id', $request->user()->id)
        ->where('status', 'active')
        ->get()->pluck('id');

        // dd($active_accounts_id);

        $active_securities=Security::whereHas('holdings',function($query)use($active_accounts_id){
            return $query->whereIn('account_id', $active_accounts_id)->where('status', 'active');
        })->where('maturity_date','0')->get();



        return  view('themes.' . \Properos\Base\Classes\Theme::get() . '.simulation')->with([
            'securities' => $active_securities,
            'theme' => \Properos\Base\Classes\Theme::get()]);
    }

    public function showProfile(Request $request)
    {
        $user = \Auth::user();
        return  view('themes.' . \Properos\Base\Classes\Theme::get() . '.profile')->with([
            'user' => $user,
            'theme' => \Properos\Base\Classes\Theme::get()]);
    }



}
