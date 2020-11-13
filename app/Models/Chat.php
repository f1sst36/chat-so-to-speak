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
        'type'
    ];

    protected $hidden = [
        'updated_at',
    ];

    public function messages(){
        return $this->hasMany(Message::class, 'chat_id');
    }
}
