<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Instructor
 * 
 * @property int $id
 * @property int|null $titulo_profesional_id
 * @property int|null $especialidad_id
 * @property string|null $experiencia
 * @property Carbon $fecha_ingreso
 * @property string $status
 * @property int|null $file_id
 * @property int $user_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Instructor extends Model
{
	protected $table = 'instructor';

	protected $casts = [
		'titulo_profesional_id' => 'int',
		'especialidad_id' => 'int',
		'fecha_ingreso' => 'datetime',
		'file_id' => 'int',
		'user_id' => 'int'
	];

	protected $fillable = [
		'titulo_profesional_id',
		'especialidad_id',
		'experiencia',
		'fecha_ingreso',
		'status',
		'file_id',
		'user_id'
	];
}
