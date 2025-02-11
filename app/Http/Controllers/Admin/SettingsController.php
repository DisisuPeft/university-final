<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Gender;
use App\Models\NivEdu;
use App\Models\Role;
use App\Models\Permission;

class SettingsController extends Controller
{
    public function settings(Request $request){
        $users = new User();
        return Inertia::render('Settings/Settings', [
            'users' => $users->usersAdmin($request->user()),
            'gender' => Gender::all(),
            'nivedu' => NivEdu::all(),
            'roles' => Role::all(),
            'permissions' => Permission::all()
        ]);
    }
}
