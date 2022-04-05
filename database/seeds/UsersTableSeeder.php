<?php

use Illuminate\Database\Seeder;

use Properos\Users\Models\User;
use Properos\Users\Models\UserProfile;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::updateOrCreate(
            ['email' => 'super_admin@nvi.com'],
            [
                'firstname' => 'George',
                'lastname' => 'Washington',
                'email' => 'super_admin@nvi.com',
                'password' => bcrypt('superadmin123'),
                'created_at' => now(),
                'updated_at' => now()
            ]
        );

        User::updateOrCreate(
            ['email' => 'admin@nvi.com'],
            [
                'firstname' => 'Abraham',
                'lastname' => 'Lincoln',
                'email' => 'admin@nvi.com',
                'password' => bcrypt('admin123'),
                'created_at' => now(),
                'updated_at' => now()
            ]
        );

        User::updateOrCreate(
            ['email' => 'investor@nvi.com'],
            [
                'firstname' => 'John',
                'lastname' => 'Kennedy',
                'email' => 'investor@nvi.com',
                'password' => bcrypt('investor123'),
                'created_at' => now(),
                'updated_at' => now()
            ]
        );


        if (User::all()->count() > 0) {

            $super_admins = User::where('email', '=', ['super_admin@nvi.com'])->get();
            if (count($super_admins) > 0) {
                foreach ($super_admins as $key => $super_admin) {
                    $super_admin->assignRole('super_admin');
                }
            }

            $admins = User::where('email', '=', ['admin@nvi.com'])->get();
            if (count($admins) > 0) {
                foreach ($admins as $key => $admin) {
                    $admin->assignRole('admin');
                }
            }

            $investors = User::where('email', '=', ['investor@nvi.com'])->get();
            if (count($investors) > 0) {
                foreach ($investors as $key => $investor) {
                    $investor->assignRole('investor');
                }
            }

            foreach (User::all() as $key => $user) {
                $profile = UserProfile::where('user_id', $user->id)->first();
                if (!$profile) {
                    \DB::table('user_profiles')->insert([
                        'user_id' => $user->id,
                        'created_at' => now(),
                        'updated_at' => now()
                    ]);
                }
            }
        }
    }
}
