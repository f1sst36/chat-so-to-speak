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

    public function getChatsForUserByType($user_id, $type){
        $chat_user = DB::table('chat-user')->select('chat_id')->where('user_id', '=', $user_id)->get();
        $chat_user = array_map(function($item) {
            return (array)$item; 
        }, $chat_user->toArray());
        
        return $this->startConditions()
            ->select('id', 'name', 'type')
            ->where('type', '=', $type)
            ->whereIn('id', $chat_user)
            ->with(['messages' => function($query){
                    $query->select(['id', 'chat_id', 'text', 'updated_at'])
                        ->orderBy('created_at', 'desc')
                        ->first();
                }])->get();
    }

    public function getInterlocutorsNameById($interlocutorId){
        return DB::table('users')->select('name')->where('id', '=', $interlocutorId)->first();
    }

    public function linkUserWithChat($user_id, $chat_id){
        DB::table('chat-user')
            ->insert(['user_id' => $user_id, 'chat_id' => $chat_id]);
    }

}