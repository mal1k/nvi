<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SecurityLog extends Model
{

    // protected $table = 'securities';

    protected $fillable = [
       'security_id','security_number','stock_price','put','straddle','total_price','type'
    ];
    public $searchable = [
        'security_id'
    ];

    public function security()
    {
        return $this->hasOne(Security::class);
    }

}
