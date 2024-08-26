<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Admin',
            'username' => 'admin',
            'email' => 'admin@simrs.test',
            'password' => bcrypt('password')
        ]);
        
        $user = User::create([
            'name' => 'User',
            'username' => 'user',
            'email' => 'user@simrs.test',
            'password' => bcrypt('password')
        ]);

        setPermissionsTeamId(1);

        $admin->assignRole('Admin');
        $user->assignRole('Member');

        // User::factory(5)->create();
    }
}
