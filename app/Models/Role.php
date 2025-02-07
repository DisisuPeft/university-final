<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use App\Models\Permission;
use App\Models\User;
/**
 * Class Role
 * 
 * @property int $id
 * @property string $name
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Role extends Model
{
	protected $table = 'role';

	protected $fillable = [
		'name'
	];

	protected $with = ['permission'];


	public function user(){
		return $this->belongsToMany(User::class);
	}

	public function permission(){
		return $this->belongsToMany(Permission::class, 'role_has_permissions');
	}
}
