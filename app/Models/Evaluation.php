<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Evaluation
 * 
 * @property int $id
 * @property string $title
 * @property string $description
 * @property int $educational_program_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Evaluation extends Model
{
	protected $table = 'evaluations';

	protected $casts = [
		'educational_program_id' => 'int'
	];

	protected $fillable = [
		'title',
		'description',
		'educational_program_id'
	];
}
