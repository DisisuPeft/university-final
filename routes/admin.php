<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;

Route::middleware(['auth', 'role:Administrador'])->prefix('admin')->group(function (){
    Route::post('/create/user', [UserController::class, 'create_user'])->name('create.user.admin');
});