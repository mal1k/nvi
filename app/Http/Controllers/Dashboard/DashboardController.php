<?php

namespace App\Http\Controllers\Dashboard;

use App\Classes\CAccount;
use App\Classes\CDashboard;
use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Dashboard;
use App\Models\Holding;
use App\Models\Security;
use App\Models\TransactionHistory;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Exists;
use Properos\Base\Classes\Api;
use Properos\Base\Controllers\ApiController;
use Properos\Base\Exceptions\ApiException;
use Properos\Users\Models\User;

class DashboardController extends ApiController
{
    public function index()
    {
        if (\Auth::user()->hasRole('admin')) {
            $dashboard = Dashboard::where('type', 'admin')->first();
        } else {
            $dashboard = Dashboard::where([['user_id', \Auth::user()->id], ['type', 'user']])->first();
        }

        return view('be.index')->with(['dashboard' => ['data' => (isset($dashboard->data) ? $dashboard->data : []), 'type' => (isset($dashboard->type) ? $dashboard->type : '')]]);
    }

    public function cards(Request $request)
    {
        $cDashboard = new CDashboard();
        $data = $request->all();

        $rules = [
            'account_id' => 'required'
        ];

        $validator = \Validator::make($data, $rules);

        if ($validator->fails()) {
            throw new ApiException($validator->errors(), '003', []);
        }
        $cDashboard = new CDashboard();
        $dashboard = $cDashboard->create($data);
        return response()->json(Api::success('Dashboard info', $dashboard));
    }


}
