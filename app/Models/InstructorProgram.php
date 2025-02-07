<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class InstructorProgram
 * 
 * @property int $id
 * @property int $instructor_id
 * @property int $programa_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class InstructorProgram extends Model
{
	protected $table = 'instructor_program';

	protected $casts = [
		'instructor_id' => 'int',
		'programa_id' => 'int'
	];

	protected $fillable = [
		'instructor_id',
		'programa_id'
	];
}
