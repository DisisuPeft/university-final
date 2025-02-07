<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class UserLog
 * 
 * @property int $id
 * @property string $action
 * @property int $performed_by
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class UserLog extends Model
{
	protected $table = 'user_logs';

	protected $casts = [
		'performed_by' => 'int'
	];

	protected $fillable = [
		'action',
		'performed_by'
	];
}
