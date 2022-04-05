<?php

namespace App\Models;

use App\Events\DashboardFrontUpdated;
use Illuminate\Database\Eloquent\Model;
use Properos\Users\Models\User;

class Account extends Model
{
    public $searchable = [
        'name', 'account_number'
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

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function transactions()
    {
        return $this->morphMany(TransactionHistory::class, 'registrable', 'origin_type', 'origin_id');
    }

    public function holdings()
    {
        return $this->hasMany(Holding::class);
    }
}
