<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Permission;
use App\Models\Role;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            'Admin' => [
                'view posts',
                'create posts',
                'update posts',
                'delete posts',
            ],
            'Editor' => [
                'view posts',
                'create posts',
                'update posts'
            ],
            'Member' => [
                'view posts'
            ]
        ];

        collect($roles)->each(function ($permissions, $role) {
            $role = Role::findOrCreate($role);
            collect($permissions)->each(function ($permission) use ($role) {
                $role->permissions()->save(Permission::findOrCreate($permission));
            });
        });
    }
}
