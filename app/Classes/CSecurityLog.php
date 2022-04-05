<?php

namespace App\Classes;

use App\Events\DashboardUpdated;
use App\Events\HoldingsUpdated;
use App\Events\SecurityUpdated;
use App\Models\Account;
use App\Models\HoldingHistory;
use App\Models\Holding;
use App\Models\Security;
use App\Models\SecurityLog;
use App\Models\TransactionHistory;
use Illuminate\Support\Facades\Validator;
use Properos\Base\Classes\Base;
use Properos\Base\Exceptions\ApiException;
use Illuminate\Support\Str;

class CSecurityLog extends Base
{

    function __construct()
    {
        parent::__construct(SecurityLog::class, 'SecurityLog');
    }

    public function init_fillable()
    {
        foreach ($this->model->getFillable() as $key) {
            $this->fillable[$key] = null;
        }
    }

    public function create($data){
        $validator = Validator::make($data, [
            'security_id' => 'required|numeric|min:1',
            'stock_price' => 'required|numeric|between:1,1900',
            'put' => 'required|numeric',
            'straddle' => 'required|numeric',
            'type' => 'required',
            'status' => 'required|max:255',
        ]);

        if ($validator->passes()) {
            return $this->createModel($data);
        }else{
            throw new ApiException($validator->errors(), '004', $data);
        }


    }


}
