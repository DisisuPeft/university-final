<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class EducationalLesson
 * 
 * @property int $id
 * @property string $title
 * @property string $content
 * @property int $module_id
 * @property int $file_educational_program_id
 * @property string $video_url
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class EducationalLesson extends Model
{
	protected $table = 'educational_lessons';

	protected $casts = [
		'module_id' => 'int',
		'file_educational_program_id' => 'int'
	];

	protected $fillable = [
		'title',
		'content',
		'module_id',
		'file_educational_program_id',
		'video_url'
	];
}
