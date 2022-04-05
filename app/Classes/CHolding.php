<?php

namespace App\Classes;

use App\Models\Holding;
use Illuminate\Support\Facades\Validator;
use Properos\Base\Classes\Base;
use Properos\Base\Exceptions\ApiException;
use Illuminate\Support\Str;

class CHolding extends Base
{
    function __construct()
	{
		parent::__construct(Holding::class, 'Holding');     
	}

	public function init_fillable()
    {
        foreach ($this->model->getFillable() as $key) {
            $this->fillable[$key] = null;
        }
    }
}
