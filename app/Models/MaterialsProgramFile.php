<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class MaterialsProgramFile
 * 
 * @property int $id
 * @property string $title
 * @property string $content
 * @property int $lesson_id
 * @property int $type_id
 * @property string $file_path
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class MaterialsProgramFile extends Model
{
	protected $table = 'materials_program_files';

	protected $casts = [
		'lesson_id' => 'int',
		'type_id' => 'int'
	];

	protected $fillable = [
		'title',
		'content',
		'lesson_id',
		'type_id',
		'file_path'
	];
}
