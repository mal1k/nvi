<?php

namespace App\Models;

use App\Events\DashboardFrontUpdated;
use Illuminate\Database\Eloquent\Model;

class Holding extends Model
{
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
    public function records()
    {
        return $this->hasMany(HoldingHistory::class);
    }

    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    public function security()
    {
        return $this->belongsTo(Security::class);
    }
}
