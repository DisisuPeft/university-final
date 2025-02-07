<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class ExamResult
 * 
 * @property int $id
 * @property int $user_id
 * @property int $evaluation_id
 * @property float $score
 * @property bool $passed
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class ExamResult extends Model
{
	protected $table = 'exam_results';

	protected $casts = [
		'user_id' => 'int',
		'evaluation_id' => 'int',
		'score' => 'float',
		'passed' => 'bool'
	];

	protected $fillable = [
		'user_id',
		'evaluation_id',
		'score',
		'passed'
	];
}
