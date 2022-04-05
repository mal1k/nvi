<?php

namespace App\Models;

use App\Events\DashboardFrontUpdated;
use Illuminate\Database\Eloquent\Model;

class Security extends Model
{

    protected $table = 'securities';

    protected $fillable = [
       'creator_id','security_number','stock_price','interest_rate','put','straddle','total_price','expected_value',
       'simulations','status','initial_stock_price','initial_sim','maturity_date', 'initial_maturity_date','type','sim_status'
    ];
    public $searchable = [
        'security_number'
    ];

    public static function boot()
    {
        parent::boot();

        self::created(function ($model) {
            event(new DashboardFrontUpdated());
        });
        self::updated(function ($model) {
            event(new DashboardFrontUpdated());
        });
    }

    public function holdings()
    {
        return $this->hasMany(Holding::class);
    }
    public function security_logs()
    {
        return $this->hasMany(SecurityLog::class);
    }

    public function getTotalSecurityValue(array $data){

    }



}
