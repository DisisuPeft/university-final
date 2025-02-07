<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\Role;
use Illuminate\Support\Facades\DB;
/**
 * Class User
 * 
 * @property int $id
 * @property string $username
 * @property string $email
 * @property Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class User extends Authenticatable
{
	protected $table = 'users';

	protected $casts = [
		'email_verified_at' => 'datetime'
	];

	protected $hidden = [
		'password',
		'remember_token'
	];

	protected $fillable = [
		'username',
		'email',
		'email_verified_at',
		'password',
		'remember_token'
	];

	protected $with = [
		'role'
	];

	public function usersAdmin($user){
		return User::where('id', '<>', $user->id)->get();
	}

	public function role(){
		return $this->belongsToMany(Role::class);
	}

	public function veryfyRole($role){
		return $this->role->name == $role;
	}

    public function hasRole($role)
    {
        return $this->roles()->where('name', $role)->exists();
    }

    // Verificar si tiene alguno de los roles proporcionados
    public function hasAnyRole($roles)
    {
        return $this->roles()->whereIn('name', (array) $roles)->exists();
    }

    // Verificar si tiene todos los roles proporcionados
    public function hasAllRoles($roles)
    {
        return $this->roles()->whereIn('name', (array) $roles)->count() === count((array) $roles);
    }

	public function syncRoles($user_id, $role_id){

	}

	public function permissions(){
		return $this->role->flatMap(function ($role) {
			return $role->permission->pluck('id');
		})->unique()->values();
	}

	public function roles(){
		return $this->role->flatMap(function ($role) {
			return $role->pluck('id');
		})->unique()->values();
	}
	// public function permissions()
	// {
    // 	return $this->hasManyThrough(Permission::class, Role::class, 'id', 'role_id', 'id');
	// }
}
