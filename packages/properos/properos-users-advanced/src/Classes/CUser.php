<?php

namespace Properos\Users\Classes;

use Properos\Users\Models\User;
use Properos\Base\Classes\Base;
use Properos\Base\Exceptions\ApiException;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Properos\Users\Models\UserAddress;
use App\Classes\CAccount;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Illuminate\Http\UploadedFile;

class CUser extends Base
{
	function __construct()
	{
		parent::__construct(User::class, 'User');
	}

	public function init_fillable()
    {
        foreach ($this->model->getFillable() as $key) {
            $this->fillable[$key] = null;
        }
    }

    public function storeUser(array $data)
    {
        $validator = Validator::make($data, [
            'firstname' => 'required|max:255',
            'lastname' => 'required|max:255',
            'email' => 'required|email|max:255',
            'roles' => 'required',
            'creator' => 'required',
            'avatar' => 'sometimes|required|image'
        ]);
        if ($validator->passes()) {
            $exiting_user = User::where('email', $data['email'])->withTrashed()->first();
            if (!$exiting_user) {
                $user = new User();
                $user->firstname = $data['firstname'];
                $user->lastname = $data['lastname'];
                $user->email = $data['email'];
                $user->status = 'active';
                /* $user->affiliate_id = isset($data['affiliate_id']) ? $data['affiliate_id'] : 0; */
                /* $user->percent = isset($data['percent']) ? $data['percent'] : 0; */
                $user->password = bcrypt(Str::random(11));
                $user->date_of_birth = isset($data['date_of_birth']) ? date('Y-m-d',strtotime($data['date_of_birth'])) : null;
                if (isset($data['phone'])) {
                    $user->phone = $data['phone'];
                }

                if (isset($data['avatar'])) {
                    $file = $data['avatar'];
                    $path = $file->hashName('/users/avatars/');
                    $image = Image::make($file);
                    $image->fit(600, 600, function ($constraint) {
                        $constraint->aspectRatio();
                    });

                    if(Storage::disk('public')->put($path, (string) $image->encode())) {
                        $user->avatar = $path;
                    }
                }

                if ($user->save()) {
                    $cAccount = new CAccount();
                    $cAccount->store([
                        'account_type' => 'personal',
                        'user' => $user,
                        'creator' => $data['creator']
                    ],$user);

                    if (count($data['roles']) > 0) {
                        $roles = $data['roles'];
                        foreach ($roles as $rol) {
                                $user->assignRole($rol['name']);
                            }
                        }
                    if(isset($data['addresses']) && count($data['addresses']) > 0){
                        $addresses = new UserAddress();
                        if(isset($data['addresses'][0]['address1'])){
                            $addresses->address1 = $data['addresses'][0]['address1'];
                        }
                        if(isset($data['addresses'][0]['address2'])){
                            $addresses->address2 = $data['addresses'][0]['address2'];
                        }
                        if(isset($data['addresses'][0]['city'])){
                            $addresses->city = $data['addresses'][0]['city'];
                        }
                        if(isset($data['addresses'][0]['state'])){
                            $addresses->state = $data['addresses'][0]['state'];
                        }
                        if(isset($data['addresses'][0]['zip'])){
                            $addresses->zip = $data['addresses'][0]['zip'];
                        }
                        if(isset($data['addresses'][0]['country'])){
                            $addresses->country = $data['addresses'][0]['country'];
                        }
                        $addresses->default = 1;
                        $addresses->user_id = $user->id;
                        $addresses->save();
                    }
                }
                return $user;
            } else {
                throw new ApiException("An user with this email address is already registered", '003');
            }
        } else {
            throw new ApiException($validator->errors(), '004', $data);
        }
    }

    public function updateUser(array $data)
    {
        $validator = Validator::make($data, [
            'id' => 'required',
            'firstname' => 'required|max:255',
            'lastname' => 'required|max:255',
            'email' => 'required|email|max:255',
            // 'avatar' => 'sometimes|required|image'
        ]);
        if ($validator->passes()) {
            if(\Auth::user()->hasRole('admin') || \Auth::user()->hasRole('super_admin') || \Auth::user()->id == $data['id']){
                $user = User::with(['addresses' => function($query){
                    $query->where('default',1)->limit(1);
                }])->find($data['id']);
                if ($user) {
                    $user->firstname = $data['firstname'];
                    $user->lastname = $data['lastname'];
                    $user->email = $data['email'];
                    $user->date_of_birth = isset($data['date_of_birth']) ? date('Y-m-d',strtotime($data['date_of_birth'])) : null;
                    $user->investor_type = isset($data['investor_type']) ? $data['investor_type'] : null;

                    if (isset($data['phone'])) {
                        $user->phone = $data['phone'];
                    }
                    if (isset($data['status'])) {
                        $user->status = $data['status'];
                    }
                    $avatar = null;
                    if(isset($data['avatar'])){
                        $avatar = $data['avatar'];
                        unset($data['avatar']);
                    }
                    if($avatar){
                        if ($avatar instanceof UploadedFile) {
                            if(!$avatar->isValid()){
                                throw new ApiException($avatar->getErrorMessage(), '400');
                            }
                        }
                        $current = $user->avatar;
                        $path = $avatar->hashName('users/avatars/');
                        $image = Image::make($avatar);
                       
                        $image->fit(600, 600, function ($constraint) {
                            $constraint->aspectRatio();
                        });
                        if(Storage::disk('public')->put($path, (string) $image->encode()) == 1){
                            if($current != ''){
                                Storage::disk('public')->delete($current);
                            }
                            $user->avatar = $path;
                        }
                    }
                    // $user->save();
                    if ($user->save()) {
                        if (isset($data['roles'])) {
                            if (count($data['roles']) > 0) {
                                $roles = $data['roles'];
                                foreach ($roles as $key => $rol) {
                                    $user->assignRole($rol['name']);
                    //                 if (isset($rol['name']) && !isset($rol['acc_id'])) {
                    //                     if (!$user->hasRole($rol['name'])) {
                    //                         $user->assignRole($rol['name']);
                    //                     }
                    //                 }
                    //                 else if (isset($rol['name']) && isset($rol['acc_id'])) {
                    //                     $unit = Unit::find($rol['acc_id']);
                    //                     if ($unit) {
                    //                         if (!$user->hasRole($rol['name'], $unit)) {
                    //                             $user->assignRole($rol['name'], $unit);
                    //                             $unit->users()->attach($user->id);
                    //                         }
                    //                     }
                    //                 }
                                }
                            }
                    //     } else {
                    //         throw new ApiException("User role for this unit is required", '003');
                        }

                        if(isset($data['addresses']) && count($data['addresses']) > 0){
                            if(count($user->addresses) > 0){
                                $addresses = UserAddress::find($user->addresses[0]->id);

                                if(isset($data['addresses'][0]['address1'])){
                                    $addresses->address1 = $data['addresses'][0]['address1'];
                                }
                                if(isset($data['addresses'][0]['address2'])){
                                    $addresses->address2 = $data['addresses'][0]['address2'];
                                }
                                if(isset($data['addresses'][0]['city'])){
                                    $addresses->city = $data['addresses'][0]['city'];
                                }
                                if(isset($data['addresses'][0]['state'])){
                                    $addresses->state = $data['addresses'][0]['state'];
                                }
                                if(isset($data['addresses'][0]['zip'])){
                                    $addresses->zip = $data['addresses'][0]['zip'];
                                }
                                if(isset($data['addresses'][0]['country'])){
                                    $addresses->country = $data['addresses'][0]['country'];
                                }
                                $addresses->default = 1;
                                $addresses->save();
                            }else{
                                $newaddress = new UserAddress();
                                if(isset($data['addresses'][0]['address1'])){
                                    $newaddress->address1 = $data['addresses'][0]['address1'];
                                }
                                if(isset($data['addresses'][0]['address2'])){
                                    $newaddress->address2 = $data['addresses'][0]['address2'];
                                }
                                if(isset($data['addresses'][0]['city'])){
                                    $newaddress->city = $data['addresses'][0]['city'];
                                }
                                if(isset($data['addresses'][0]['state'])){
                                    $newaddress->state = $data['addresses'][0]['state'];
                                }
                                if(isset($data['addresses'][0]['zip'])){
                                    $newaddress->zip = $data['addresses'][0]['zip'];
                                }
                                if(isset($data['addresses'][0]['country'])){
                                    $newaddress->country = $data['addresses'][0]['country'];
                                }
                                $newaddress->default = 1;
                                $newaddress->user_id = $user->id;
                                $newaddress->save();

                            }
                        }
                    }
                    $user = User::find($data['id']);
                    $modified_user = new \stdClass();
                    $modified_user = $user->load('addresses');
                    $modified_user->_roles = $user->getCurrentRoles();
                    $modified_user->addresses = $user->addresses();
                    return $modified_user;

                } else {
                    throw new ApiException("User not found", '404');
                }
            }
            throw new ApiException("Access forbidden", '404');
        } else {
            throw new ApiException($validator->errors(), '004', $data);
        }
    }

    public function saveImage(User $user, UploadedFile $file){
        $path = $file->hashName('users/avatars');
        $image = Image::make($file);
        $image->fit(600, 600, function ($constraint) {
            $constraint->aspectRatio();
        });

        if($user->avatar && Storage::disk('public')->exists($user->avatar)){
            Storage::disk('public')->delete($user->avatar);
        }

        if(Storage::disk('public')->put($path, (string) $image->encode())) {
            $user->avatar = $path;
        }

        $user->save();
    }

    public function removeRole(array $data)
    {
        $validator = Validator::make($data, [
            'user_id' => 'required',
            'role' => 'required'
        ]);
        if ($validator->passes()) {
            $user = User::find($data['user_id']);
            if ($user) {
                $removed_role = [];
                // if (isset($data['restrictable_id'])) {
                //     $restrictable = Unit::find($data['restrictable_id']);
                //     $user->removeRole($data['role'], $restrictable);
                //     $restrictable->users()->detach($user->id);
                //     $removed_role['restrictable_id'] = $data['restrictable_id'];
                // } else {
                //     $user->removeRole($data['role']);
                // }
                $user->removeRole($data['role']);
                $removed_role['role'] = $data['role'];
                return $removed_role;
            } else {
                throw new ApiException("User not found", '404');
            }
        } else {
            throw new ApiException($validator->errors(), '004', $data);
        }
    }

    public function changePassword($data)
    {
        $validation = Validator::make($data, [
            'user_id' => 'required|integer',
            'password' => 'required|confirmed|min:8'
        ]);


        if ($validation->passes()) {
            $user = $this->mode::find($data['user_id']);

            if (!$user) {
                throw new ApiException($this->title . "  not found.", '006', $data);
            }

            $user->password = bcrypt($data['password']);

            $user->save();

            return $user;
        }

        throw new ApiException($validation->errors(), '006', $data);
    }



}
