<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Profile
 * 
 * @property int $id
 * @property string $nombre
 * @property string $apellido_p
 * @property string|null $apellido_m
 * @property int|null $edad
 * @property Carbon|null $fecha_nacimiento
 * @property string|null $genero
 * @property int|null $niv_edu
 * @property string|null $telefono
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Profile extends Model
{
	protected $table = 'profile';

	protected $casts = [
		'edad' => 'int',
		'fecha_nacimiento' => 'datetime',
		'niv_edu' => 'int'
	];

	protected $fillable = [
		'nombre',
		'apellido_p',
		'apellido_m',
		'edad',
		'fecha_nacimiento',
		'genero',
		'niv_edu',
		'telefono'
	];
}
