<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Properos\Users\Models\User;

class Dashboard extends Model
{
    protected $fillable = [
        'user_id', 'account_id', 'data'
    ];

    protected $casts = ['data' => 'array'];

    public function user()
    {
        return $this->hasMany(User::class, 'user_id');
    }

    public function account()
    {
        return $this->hasOne(Account::class, 'account_id');
    }
}
