<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class EducationalProgram
 * 
 * @property int $id
 * @property string $name
 * @property string|null $description
 * @property int|null $category_id
 * @property Carbon|null $start_date
 * @property Carbon|null $end_date
 * @property Carbon|null $hour_start
 * @property Carbon|null $hour_end
 * @property int|null $duration
 * @property float $price
 * @property int|null $max_capacity
 * @property int|null $subcategory_id
 * @property int|null $specification_id
 * @property int|null $status
 * @property int $user_tutor_id
 * @property string|null $image
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class EducationalProgram extends Model
{
	protected $table = 'educational_program';

	protected $casts = [
		'category_id' => 'int',
		'start_date' => 'datetime',
		'end_date' => 'datetime',
		'hour_start' => 'datetime',
		'hour_end' => 'datetime',
		'duration' => 'int',
		'price' => 'float',
		'max_capacity' => 'int',
		'subcategory_id' => 'int',
		'specification_id' => 'int',
		'status' => 'int',
		'user_tutor_id' => 'int'
	];

	protected $fillable = [
		'name',
		'description',
		'category_id',
		'start_date',
		'end_date',
		'hour_start',
		'hour_end',
		'duration',
		'price',
		'max_capacity',
		'subcategory_id',
		'specification_id',
		'status',
		'user_tutor_id',
		'image'
	];
}
