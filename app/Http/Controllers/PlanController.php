<?php

namespace App\Http\Controllers;

use App\Classes\CPlan;
use App\Classes\CSubscription;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Plan;
use Properos\Base\Classes\Api;
use Properos\Base\Exceptions\ApiException;

class PlanController extends Controller
{
    public function index(){
        return view('be.plans.index');
    }

    public function search(Request $request)
    {
        $cPlan = new CPlan();
        $options = $cPlan->standardize_search($request);
        $plans = $cPlan->find($options);
        if(isset($options['limit'])){
            return response()->json(Api::success('Plans search result.', $plans, $cPlan->get_paginator()->toArray()));
        }
        return response()->json(Api::success('Plans search result.', $plans));

    }

    public function store(Request $request)
    {
        $cPlan = new CPlan();
        $data = $request->all();
        $plan = $cPlan->create($data);
        return response()->json(Api::success('The plan was successfully created', $plan));
    }

    public function update(Request $request)
    {
        
        $cPlan = new CPlan();
        $data = $request->all();
        $plan = $cPlan->update($data);
    
        return response()->json(Api::success('The plan was successfully updated', $plan));
    }

    public function details($id){
        if ($id > 0) {
            $plan = Plan::where('id', $id)->first();
            return response()->json(Api::success('Plan Info', $plan));
        }
        return response()->json(Api::error('006','Invalid Query Format', $id));
    }

    public function destroy($id)
    {
        if ($id > 0) {
            $cPlan = new CPlan();
            $cPlan->delete($id);
            return response()->json(Api::success('The plan was successfully deleted', ['id'=>$id]));
        }
        return response()->json(Api::error('006','Invalid Query Format', $id));
    }

    public function selectPlan(Request $request, $id){
        if($id > 0){

            $data = [
                'owner_id' => \Auth::user()->id,
                'owner_type' => 'user',
                'status' => 'trial',
                'current_plan_id' => $id,
                'payment_profile_id' => 0,
                'days_to_pay' => 1,
                'grace_days' => 0,
                'total_payments' => 0,
                'payments_made' => 0,
                'total_units' => $request->input('total_units', 0),
                'next_billing_date' => date('Y-m-d H:i' , strtotime(date('Y-m-d H:i'). '+1 day')),
                'next_payment_date' => date('Y-m-d H:i' , strtotime(date('Y-m-d H:i'). '+1 day')),
            ];
            $total = $data['days_to_pay']+$data['grace_days'];
            $data['expires_at'] = date('Y-m-d H:i' , strtotime($data['next_payment_date']. '+'.$total.' days'));
            $cSubs = new CSubscription();
            //$website->total_units = $request->input('total_units', 0);
            //$website->save();
            return response()->json(Api::success('Subscription created', $cSubs->create($data)));
            }
        throw new ApiException('Invalid Query Format', '006', $id);
    }

    public function planTypes(){
        $types = Plan::select('interval')->where('status', 'public')->groupBy('interval')->get();

        return response()->json(Api::success('Plan Types', $types));
    }

}
