<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Message;

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
        if(!isset($avatar)){
            return env('APP_URL', '') . 'media/images/public_chat_avater.png';
        }
        return env('APP_URL', '') . '/storage/' . $avatar;
    }
}
