<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreUserRequest;

class UserController extends Controller
{
    public function create_user(StoreUserRequest $request){
        // $request->validated();
        dd("Controller");
    }
}
