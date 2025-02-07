<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Enrollment
 * 
 * @property int $id
 * @property int $user_id
 * @property int $educational_program_id
 * @property int $status
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Enrollment extends Model
{
	protected $table = 'enrollments';

	protected $casts = [
		'user_id' => 'int',
		'educational_program_id' => 'int',
		'status' => 'int'
	];

	protected $fillable = [
		'user_id',
		'educational_program_id',
		'status'
	];
}
