<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class SpecificationProgram
 * 
 * @property int $id
 * @property string $name
 * @property int $subcategory_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class SpecificationProgram extends Model
{
	protected $table = 'specification_program';

	protected $casts = [
		'subcategory_id' => 'int'
	];

	protected $fillable = [
		'name',
		'subcategory_id'
	];
}
