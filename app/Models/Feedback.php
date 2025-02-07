<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Feedback
 * 
 * @property int $id
 * @property int $user_id
 * @property int $educational_program_id
 * @property float $rating
 * @property string $comment
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Feedback extends Model
{
	protected $table = 'feedbacks';

	protected $casts = [
		'user_id' => 'int',
		'educational_program_id' => 'int',
		'rating' => 'float'
	];

	protected $fillable = [
		'user_id',
		'educational_program_id',
		'rating',
		'comment'
	];
}
