<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 50)->create();

        \App\User::create([
            'name' => 'Moeen Basra',
            'email' => 'm.basra@live.com',
            'password' => bcrypt('secret'),
            'is_admin' => true,
            'remember_token' => Str::random(10),
        ]);
    }
}
