<?php

namespace App\Classes;

use App\Jobs\UpdateUserSubscriptionsJob;
use App\Models\Plan;
use Properos\Base\Classes\Base;
use Properos\Base\Exceptions\ApiException;

class CPlan extends Base
{
    public function __construct()
    {
        parent::__construct(Plan::class, 'Plan');
    }

    public function init_fillable()
    {
        foreach ($this->model->getFillable() as $key) {
            switch ($key) {
                case 'min_price':
                    $this->fillable[$key] = '0';
                    break;
                case 'interval_count':
                    $this->fillable[$key] = 1;
                    break;
                case 'interval':
                    $this->fillable[$key] = 'month';
                    break;
                case 'status':
                    $this->fillable[$key] = 'public';
                    break;
                default:
                    $this->fillable[$key] = '';
                    break;
            }
        }
    }

    public function create(array $data)
    {
        $rules = [
            'title' => 'required|string|max:255',
            'min_price' => 'required|numeric',
            'interval_count' => 'required|integer',
            'interval' => 'required|in:day,week,month,year,contact_us',
            'status' => 'required|in:private,public,cancelled',
        ];

        $validation = \Validator::make($data, $rules);

        if($validation->passes()){
            $plan = $this->createModel($data, $rules);
            return  $plan;
        }

        throw new ApiException($validation->errors(), '003', $data);
    }

    public function update(array $data)
    {
        $rules = [
            'id' => 'required|numeric',
            'title' => 'required|string|max:255',
            'min_price' => 'required|numeric',
            'interval_count' => 'required|integer',
            'interval' => 'required|in:day,week,month,year,contact_us',
            'status' => 'required|in:private,public, cancelled',
        ];

        $validation = \Validator::make($data, $rules);

        if($validation->passes()){
            $plan = $this->updateModel($data, $rules);
            
            if(isset($data['reflect_users']) && $data['reflect_users']){
                dispatch(new UpdateUserSubscriptionsJob($plan, (isset($data['send_email']) ? $data['send_email'] : null)));
            }
            return  $plan;
        }

        throw new ApiException($validation->errors(), '003', $data);
    }

    public function delete($id)
    {
        return $this->deleteModel($id);
    }
}
