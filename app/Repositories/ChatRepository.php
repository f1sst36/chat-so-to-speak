<?php

namespace App\Repositories;

use App\Models\Chat as Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use App\Models\ChatUserLink;

class ChatRepository extends CoreRepository{

    /**
     * @return string
     */
    protected function getModelClass()
    {
        return Model::class;
    }

    protected function getOnlyChatsByTypeWithLastMessage($fields, $chat_ids, $type){
        return $this->startConditions()
            ->select($fields)
            ->where('type', '=', $type)
            ->whereIn('id', $chat_ids)
            ->with(['messages' => function($query){
                    $query->select(['id', 'chat_id', 'user_id', 'text', 'updated_at'])
                        ->with(['user' => function($query){
                            $query->select(['id', 'name', 'avatar'])
                                ->get();
                            }])
                        ->orderBy('created_at', 'desc')
                        ->first();
                        //->get();
                }])->get();
    }

    protected function searchOnlyChatsByTypeWithLastMessage($fields, $chat_ids, $type, $search_query){
        return $this->startConditions()
            ->select($fields)
            ->where('type', '=', $type)
            ->where('name', 'LIKE', '%' . $search_query . '%')
            ->whereIn('id', $chat_ids)
            ->with(['messages' => function($query){
                    $query->select(['id', 'chat_id', 'text', 'updated_at'])
                        ->orderBy('created_at', 'desc')
                        ->first();
                }])->get();
    }

    public function getChatsForUserByType($user_id, $type, $search_query = null){

        $fields = ['id', 'name', 'type', 'avatar'];
        if ($type == 0){
            $fields = ['id', 'name', 'type'];
        }

        $chat_ids = ChatUserLink::select('chat_id')
            ->where('user_id', '=', $user_id)
            ->get();

        $chat_ids = array_map(function($item) {
            return (array)$item; 
        }, $chat_ids->toArray());

        $chatLinksWithUser = ChatUserLink::select('chat_id', 'user_id')
            ->whereIn('chat_id', $chat_ids)
            ->with(['user'])
            ->get();

        $chats = $search_query != null ? 
            $this->searchOnlyChatsByTypeWithLastMessage($fields, $chat_ids, $type, $search_query) : 
            $this->getOnlyChatsByTypeWithLastMessage($fields, $chat_ids, $type);

        foreach($chats as $chat){
            if ($chat->type == 0){
                foreach($chatLinksWithUser as $chatLinkWithUser){
                    $chat->setAttribute('user', null);
                    if($chat->id == $chatLinkWithUser->chat_id){
                        $chat->user = $chatLinkWithUser->user;
                    }
                }
            } elseif ($chat->type == 1) {
                $chat->setAttribute('users', collect());
                foreach($chatLinksWithUser as $chatLinkWithUser){
                    if($chat->id == $chatLinkWithUser->chat_id){
                        $chat->users->push($chatLinkWithUser->user);
                    }
                }
            }
            
        }

        return $chats;
    }

    public function linkUserWithChat($user_id, $chat_id){
        DB::table('chat_user_links')
            ->insert(['user_id' => $user_id, 'chat_id' => $chat_id]);
    }

}