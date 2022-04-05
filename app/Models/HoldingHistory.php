<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HoldingHistory extends Model
{
    public function holding()
    {
        return $this->belongsTo(Holdings::class, 'holding_id');
    }

    public function security()
    {
        return $this->belongsTo(Security::class, 'security_id');
    }
}
