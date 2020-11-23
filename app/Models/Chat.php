<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Message;

/**
 * @SWG\Definition(
 *  definition="Chat",
 *  @SWG\Property(
 *      property="id",
 *      type="integer"
 *  ),
 *  @SWG\Property(
 *      property="name",
 *      type="string"
 *  ),
 *  @SWG\Property(
 *      property="type",
 *      type="integer"
 *  ),
 *  @SWG\Property(
 *      property="avatar",
 *      type="string"
 *  ),
 *  @SWG\Property(
 *      property="owner_id",
 *      type="integer"
 *  )
 * )
 */

class Chat extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'avatar'
    ];

    protected $hidden = [
        'updated_at',
    ];

    public function messages(){
        return $this->hasMany(Message::class, 'chat_id');
    }

    public function getAvatarAttribute($avatar){
        if($avatar != ''){
            return env('APP_URL') . '/storage/' . $avatar;
        }
        return '';
    }
}
