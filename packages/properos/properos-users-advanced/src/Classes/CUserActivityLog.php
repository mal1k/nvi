<?php

namespace Properos\Users\Classes;

use Properos\Base\Exceptions\ApiException;
use Properos\Base\Classes\Base;
use Properos\Users\Models\UserActivityLog;
use Properos\Users\Models\User;

class CUserActivityLog extends Base
{
	function __construct()
	{
		parent::__construct(UserActivityLog::class, 'UserActivityLog');     
	}

	public function init_fillable()
    {
        foreach ($this->model->getFillable() as $key) {
            $this->fillable[$key] = null;
        }
    }

    public function create($data){
        $rules = [
            'user_id' => 'required|min:1',
            'activity_type' => 'required'
        ];

        $validator = \Validator::make($data, $rules);

        if($validator->passes()){
            if(!isset($data['name'])){
                $user = User::where('id', $data['user_id'])->first();
                if(!$user){
                    throw new ApiException('User not found', '007', $data);
                }
            }
            $this->createModel($data);
        }else{
            throw new ApiException($validator->errors(), '007', $data);
        }
    }

}