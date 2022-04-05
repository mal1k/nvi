<?php

namespace App\Http\Controllers;

use App\Classes\CSubscription;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Subscription;
use Properos\Accounting\Classes\CPaymentProfile;
use Properos\Base\Classes\Api;
use Properos\Base\Exceptions\ApiException;

class SubscriptionController extends Controller
{
    public function index(){
        return view('be.plans.index');
    }

    public function search(Request $request)
    {
        $cSubscription = new CSubscription();
        $options = $cSubscription->standardize_search($request);
        $subscriptions = $cSubscription->find($options);
        return response()->json(Api::success('Subscriptions search result.', $subscriptions, $cSubscription->get_paginator()->toArray()));
    }

    public function store(Request $request)
    {
        $cSubscription = new CSubscription();
        $data = $request->all();
        $subscription = $cSubscription->create($data);
        return response()->json(Api::success('The subscription was successfully created', $subscription));
    }

    public function update(Request $request)
    {
        
        $cSubscription = new CSubscription();
        $data = $request->all();
        $subscription = $cSubscription->update($data);
    
        return response()->json(Api::success('The subscription was successfully updated', $subscription));
    }

    public function details($id){
        if ($id > 0) {
            $subscription = Subscription::where('id', $id)->with(['plan','user','next_plan'])->first();
            return response()->json(Api::success('Subscription Info', $subscription));
        }
        return response()->json(Api::error('006','Invalid Query Format', $id));
    }

    public function detailsAsOwner(Request $request, $id){
        if ($id > 0) {
            $data = $request->all();
            $rules = [
                'owner_type' => 'required|string|max:255'
            ];

            $validator = \Validator::make($data, $rules);

            if($validator->fails()){
                return response()->json(Api::error('006',$validator->errors(), $id));
            }

            $subscription = Subscription::where('owner_id', $id)->where('owner_type', $data['owner_type'])->with(['plan','owner','next_plan'])->first();
            return response()->json(Api::success('Subscription Info', $subscription));
        }
        return response()->json(Api::error('006','Invalid Query Format', $id));
    }

    public function destroy($id)
    {
        if ($id > 0) {
            $cSubscription = new CSubscription();
            $cSubscription->delete($id);
            return response()->json(Api::success('The subscription was successfully deleted', ['id'=>$id]));
        }
        return response()->json(Api::error('006','Invalid Query Format', $id));
    }

    public function addPaymentAndPay(Request $request){
        $data = $request->all();
        
        $data['owner_type'] = 'user';
        $data['owner_id'] = \Auth::user()->id;
        $data['email'] = \Auth::user()->email;

        $subscription = Subscription::where('id', $data['payable_id'])->first();

        if($subscription){
            $data['amount'] = $subscription->price;
            $result = (new CPaymentProfile())->addPaymentProfileAndPay($data);
            
            // (new CSubscription())->subscriptionPayed($subscription, $result);        
            return response()->json(Api::success('Subscription payed',$result)); 
        }

        throw new ApiException('Subscription No Found', '003', $data);
    }

    public function changeAsOwner(Request $request)
    {
        $cSubscription = new CSubscription();
        $data = $request->all();
        $data['user_id'] = \Auth::user()->id;
        $subscription = $cSubscription->changeSubscription($data);

        if($subscription->next_plan_id > 0){
            return response()->json(Api::success('The subscription changes when you actual subscription end.', $subscription));
        }
        return response()->json(Api::success('The subscription was successfully changed', $subscription));
    }

    public function payWithProfile(Request $request){
        $cSubscription = new CSubscription();
        $data = $request->all();
        $data['user_id'] = \Auth::user()->id;
        $data['owner_type'] = "subscription";
        $subscription = $cSubscription->payWithProfile($data);

        return response()->json(Api::success('Successfully Payment', $subscription));
    }

    public function payWithoutProfile(Request $request){
        $cSubscription = new CSubscription();
        $data = $request->all();
        $data['user_id'] = \Auth::user()->id;
        $data['owner_type'] = "subscription";
        $subscription = $cSubscription->payWithOutProfile($data);

        return response()->json(Api::success('Successfully Payment', $subscription));
    }

}
