<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'chat_id',
        'text'
    ];

    protected $hidden = [
        'user_id',
        'created_at'
    ];

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
