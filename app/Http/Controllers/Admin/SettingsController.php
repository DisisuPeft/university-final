<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class SettingsController extends Controller
{
    public function settings(Request $request){
        $users = new User();
        return Inertia::render('Settings/Settings', [
            'users' => $users->usersAdmin($request->user()),
        ]);
    }
}
