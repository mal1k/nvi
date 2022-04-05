<?php

namespace App\Http\Controllers\Security;

use App\Classes\CSecurity;
use App\Classes\CSimulation;
use Illuminate\Http\Request;
use Properos\Base\Classes\Api;
use Properos\Base\Controllers\ApiController;
use Properos\Base\Exceptions\ApiException;
use Properos\Users\Models\User;

class ApiSecurityController extends ApiController
{
    protected $cSecurity;

    public function __construct()
    {
        $cSimulation = new CSimulation();
        $this->cSecurity = new CSecurity($cSimulation);
    }

    public function index(Request $request)
    {
        $options = $this->cSecurity->standardize_search($request);
        $securities = $this->cSecurity->find($options);
        return $this->setPagination($this->cSecurity->get_paginator()->toArray())->respondData('Securities search result.', $securities);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $data['creator'] = $request->user();
        $security = $this->cSecurity->store($data);
        if ($security) {
            return Api::success("Security created successfully", $security);
        }
        throw new ApiException("Error creating the security", "002", []);
    }

    public function update(Request $request)
    {
        $data = $request->all();
        $security = $this->cSecurity->update($data);
        if ($security) {
            return Api::success("Security updated successfully", $security);
        }
        throw new ApiException("Error updating the security", "002", []);
    }

    public function getInitialValues(Request $request)
    {
        $data = $request->all();
        // $data['interest_rate'] = 2.00;
        $data['time_value'] = 1;
        $values = $this->cSecurity->getInitialValues($data);
        if (count($values) > 0) {
            return Api::success("Initial values", $values);
        }
        throw new ApiException("Error getting initial values", "002", []);
    }

    public function getUnblockAmount(Request $request)
    {
        $data = $request->all();
        $amount = $this->cSecurity->getUnblockAmount($data);
        if ($amount > 0) {
            return Api::success("Amount", $amount);
        }
        throw new ApiException("Error getting amount", "002", []);

    }

    public function payUnblockAmount(Request $request)
    {
        $data = $request->all();
        $payment = $this->cSecurity->payUnblockAmount($data);
        if ($payment) {
            return Api::success("Payment Successfully", $payment);
        }
        throw new ApiException("Error getting amount", "002", []);
    }

}
