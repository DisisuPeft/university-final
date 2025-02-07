<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class SubcategoryProgram
 * 
 * @property int $id
 * @property string $name
 * @property int $category_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class SubcategoryProgram extends Model
{
	protected $table = 'subcategory_program';

	protected $casts = [
		'category_id' => 'int'
	];

	protected $fillable = [
		'name',
		'category_id'
	];
}
