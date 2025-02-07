<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Role;
use App\Models\RoleUser;
use App\Models\Permission;
use App\Models\RoleHasPermission;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // DB::insert('insert into users (id, name) values (?, ?)', [1, 'Dayle']);
        $user_create = User::create([
            'username' => "Daniel2408",
            'email' => 'defp_99@hotmail.com',
            'password' => Hash::make('daniel123'),
        ]);

        $role = Role::create([
            'name' => 'Administrador'
        ]);
        
        $role_user = RoleUser::create([
            'user_id' => $user_create->id,
            'role_id' => $role->id,
        ]);
        // c      r     u          d
        // crear, ver, actualizar, eliminar
        $permissions = ['create', 'read', 'update', 'delete'];
        $user = User::where('email', "defp_99@hotmail.com")->first();
        // $permissions_create = [];
        foreach($permissions as $permission){
            $permissions_create = Permission::create([
                'name' => $permission
            ]); 
            
            RoleHasPermission::create([
                'role_id' => $user->role[0]->id,
                'permission_id' => $permissions_create->id,
            ]);
        }

        // $permission_user->save();
    }
}
