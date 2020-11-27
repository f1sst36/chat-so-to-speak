<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Chat;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'chat_id',
        'text'
    ];

    protected $hidden = [
        //'user_id',
        'created_at'
    ];

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function chat(){
        return $this->belongsTo(Chat::class, 'chat_id');
    }
}
