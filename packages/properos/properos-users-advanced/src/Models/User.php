<?php

namespace Properos\Users\Models;

use App\Models\Account;
use App\Models\Dashboard;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\SoftDeletes;
use Properos\Users\Models\UserAddress;
use Properos\Users\Models\UserProfile;
use App\Models\Lead;

// use Properos\Commerce\Models\Order;
use Properos\Commerce\Traits\UserTrait;

class User extends Authenticatable
{
    use SoftDeletes;
    use Notifiable;
    use HasRoles;
    // use UserTrait;

    public $current_roles = [];


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstname', 'lastname', 'email', 'password', 'phone', 'avatar', 'company','status', 'investor_type'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public $searchable = [
        'firstname', 'lastname','email', 'company'
    ];

    public $index_fulltext = false;

    public function toSearchableArray()
    {
        return array_flip($this->searchable);
    }

    public function getSearchableArray()
    {
        return $this->searchable;
    }

    /* public function receivesBroadcastNotificationsOn()
    {
        return 'users.'.$this->id;
    } */

    public function addresses()
    {
        return $this->hasMany(UserAddress::class);
    }

    public function profile()
    {
        return $this->hasOne(UserProfile::class);
    }

    public function getCurrentRoles()
    {
        foreach ($this->roles()->get() as $role) {
            $partial_role = new \stdClass();
            $partial_role->id = $role->id;
            $partial_role->name = $role->name;
            $this->current_roles[] = $partial_role;
        }
        return $this->current_roles;
    }

    /* public function isRole($_role)
    {
        $count = 0;
        foreach ($this->units as $acc) {
            foreach ($this->roles($acc)->get() as $role) {
                if($role['name'] == $_role){
                    $count++;
                    break;
                }
            }
        }
        return $count > 0 ? true : false;
    } */

    public function accounts()
    {
        return $this->hasMany(Account::class, 'user_id', 'id');
    }

    public function dashboard()
    {
        return $this->hasOne(Dashboard::class, 'user_id', 'id');
    }

    public function createdAccounts()
    {
        return $this->hasMany(Account::class, 'creator_id', 'id');
    }
}
