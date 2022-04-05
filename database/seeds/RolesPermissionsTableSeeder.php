<?php

use Illuminate\Database\Seeder;

use Properos\Users\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Traits\HasRole;

class RolesPermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Role::updateOrCreate(
            ['name' => 'super_admin'],
            [
                'name' => 'super_admin',
                'url' => '/admin/dashboard',
                'created_at' => now(),
                'updated_at' => now()
            ]
        );

        Role::updateOrCreate(
            [
                'name' => 'admin',
            ],
            [
                'name' => 'admin',
                'url' => '/admin/dashboard',
                'created_at' => now(),
                'updated_at' => now()
            ]
        );

        Role::updateOrCreate(
            [
                'name' => 'investor',
            ],
            [
                'name' => 'investor',
                'url' => '/investor/accounts',
                'created_at' => now(),
                'updated_at' => now()
            ]
        );
    }
}
