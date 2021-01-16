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

    public function getMessagesByChatId($chat_id, $last_msg_id){
        $fields = ['id', 'text', 'media', 'media_name', 'media_size', 'media_extention', 'user_id', 'updated_at'];

        $result = $this->startConditions()
            ->select($fields)
            ->where('chat_id', '=', $chat_id)
            ->where('id', '<', $last_msg_id)
            //->orderBy('created_at', 'desc')
            ->orderBy('id', 'desc')
            ->with(['user'])
            ->limit(20)
            ->get();

        $totalResult = $result->map(function($item){
            $newItem = $item;

            // $newItem = collect($item);

            $newItem->mediaName = $item->media_name;
            $newItem->mediaExtention = $item->media_extention;
            $newItem->mediaSize = $item->media_size;

            // $newItem->forget("media_name");

            return $newItem;
        });

        // unset($totalResult["media_name"]);
        // $totalResult->forget("media_name");
        // $totalResult->forget("media_extention");
        // $totalResult->forget("media_size");

        return $totalResult;
    }

    public function isUserHaveChat($chat_id, $user_id){
        $isUserHaveChat = DB::table('chat_user_links')
            ->where('user_id', '=', $user_id)
            ->where('chat_id', '=', $chat_id)
            ->first();

        return $isUserHaveChat ? true : false;
    }

}