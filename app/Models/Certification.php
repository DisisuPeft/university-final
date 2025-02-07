<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Certification
 * 
 * @property int $id
 * @property int $user_id
 * @property int $educational_program_id
 * @property string $certificate_url
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Certification extends Model
{
	protected $table = 'certifications';

	protected $casts = [
		'user_id' => 'int',
		'educational_program_id' => 'int'
	];

	protected $fillable = [
		'user_id',
		'educational_program_id',
		'certificate_url'
	];
}
