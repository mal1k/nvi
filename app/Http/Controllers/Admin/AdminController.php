<?php

namespace App\Http\Controllers\Admin;

use App\Models\Account;
use App\Http\Controllers\Controller;
use App\Models\Holding;
use App\Models\Security;
use App\Models\TransactionHistory;
use Illuminate\Http\Request;
use Properos\Users\Models\User;

class AdminController extends Controller
{
    public function index(Request $request)
    {
        $users = User::where('status', 'active')->count();
        $active_accounts = Account::where('status', 'active')->count();
        $securities = Security::where('status', 'active')->count();
        $holdings = Holding::where('status', 'active')->count();
        $transactions = TransactionHistory::count();
        return view('be.index')->with([
            'users' => $users,
            'active_accounts' => $active_accounts,
            'securities' => $securities,
            'holdings' => $holdings,
            'transactions' => $transactions
        ]);
    }

    public function accounts(Request $request)
    {
        return view('be.accounts.index');
    }

    public function createAccount(Request $request)
    {
        return view('be.accounts.create-account');
    }

    public function editAccount(Account $account)
    {
       if($account->load(['user.addresses', 'creator'])){
        return view('be.accounts.edit-account')->with([
            'editable_account' => $account
        ]);
       } else {
           abort(404);
       }
    }

    public function securities(Request $request)
    {
        return view('be.securities.index');
    }

    public function holdings(Request $request)
    {
        return view('be.holdings.index');
    }

    public function createSecurity(Request $request)
    {
        return view('be.securities.create-security');
    }

    public function editSecurity(Security $security)
    {
       if($security){
        return view('be.securities.create-security')->with([
            'editable_security' => $security
        ]);
       } else {
           abort(404);
       }
    }
    public function paySecurity(Security $security)
    {
       if($security){
        return view('be.securities.pay-security')->with([
            'editable_security' => $security
        ]);
       } else {
           abort(404);
       }
    }

    public function withdraws(Request $request)
    {
        return view('be.withdraws.index');
    }
}
