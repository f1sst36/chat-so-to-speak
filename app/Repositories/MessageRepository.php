<?php

namespace App\Repositories;

use App\Models\Message as Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class MessageRepository extends CoreRepository{

    /**
     * @return string
     */
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getMessagesByChatId($chat_id){
        $fields = ['id', 'text', 'user_id', 'updated_at'];

        $result = $this->startConditions()
            ->select($fields)
            ->where('chat_id', '=', $chat_id)
            ->orderBy('created_at', 'desc')
            ->with(['user'])
            ->limit(15)
            ->get();

        return $result;
    }

    public function isUserHaveChat($chat_id, $user_id){
        $isUserHaveChat = DB::table('chat-user')
            ->where('user_id', '=', $user_id)
            ->where('chat_id', '=', $chat_id)
            ->first();

        return $isUserHaveChat ? true : false;
    }

}