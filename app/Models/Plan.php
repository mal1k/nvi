<?php

namespace App\Models;
use Illuminate\Database\Eloquent\SoftDeletes;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use SoftDeletes;
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'description', 'min_price', 'interval_count', 'interval', 'status',
        'discount_type', 'discount_value', 'unit_price', 'color_hex','includes'
    ];

    public $casts = [
        'includes' => 'array'
    ];

    public $searchable = [
        'title'
    ];

    public function toSearchableArray()
    {
        return array_flip($this->searchable);
    }
    
    public function getSearchableArray()
    {
        return $this->searchable;
    }

    public function subscriptions()
    {
        return $this->hasMany(Subscription::class, 'current_plan_id', 'id');
    }

}
