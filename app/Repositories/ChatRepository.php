<?php

namespace App\Repositories;

use App\Models\Chat as Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class ChatRepository extends CoreRepository{

    /**
     * @return string
     */
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getChatsForUser($user_id){
        $chat_user = DB::table('chat-user')->select('chat_id')->where('user_id', '=', $user_id)->get();
        $chat_user = array_map(function($item) {
            return (array)$item; 
        }, $chat_user->toArray());
        
        return $this->startConditions()->select('id', 'name', 'type')->whereIn('id', $chat_user)->get();
    }

}