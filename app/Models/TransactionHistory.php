<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Properos\Users\Models\User;

class TransactionHistory extends Model
{
    public function registrable()
    {
        return $this->morphTo();
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }


    public function account()
    {
        return $this->belongsTo(Account::class, 'origin_id');
    }

}
