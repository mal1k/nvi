<?php

namespace App\Models;

use App\Events\UpdateDashboardEvent;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
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
        'order_number', 'user_id', 'creator_id', 'customer_name', 'customer_email', 'customer_phone',
        'total_amount', 'paid_amount', 'refund_amount', 'discount_amount','discount_code', 'token', 'payment_method_id',
        'billing_firstname', 'billing_lastname','billing_address','billing_unit','billing_state', 'billing_country',
        'status', 'notes', 'billing_zip'
    ];

    protected $searchable = ['order_number','customer_name', 'customer_email'];

    public function toSearchableArray()
    {
        return array_flip($this->searchable);
    }
    
    public function getSearchableArray()
    {
        return $this->searchable;
    }


}
