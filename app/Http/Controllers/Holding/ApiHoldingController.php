<?php

namespace App\Http\Controllers\Holding;

use App\Classes\CHolding;
use App\Models\Security;
use Illuminate\Http\Request;
use Properos\Base\Classes\Api;
use Properos\Base\Controllers\ApiController;
use Properos\Base\Exceptions\ApiException;

class ApiHoldingController extends ApiController
{
    protected $cHolding;

    public function __construct(CHolding $cHolding)
    {
        $this->cHolding = $cHolding;
    }
    
    public function index(Request $request)
    {
        $holdings_with_security = [];
        $options = $this->cHolding->standardize_search($request);
        $holdings = $this->cHolding->find($options);
        if(count($holdings) > 0){
            foreach ($holdings as $holding) {
                $security = Security::find($holding['security_id']);
                $holding['security'] = $security->toArray();
                $holdings_with_security[] = $holding;
            }
        }
        return $this->setPagination($this->cHolding->get_paginator()->toArray())->respondData('Holdings search result.', $holdings_with_security);
    }
}
