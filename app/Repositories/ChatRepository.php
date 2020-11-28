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

    public function getOnlyChatsByTypeWithLastMessage($fields, $chat_ids, $type = null){
        if($type != null){
            $result = $this->startConditions()
                ->select($fields)
                ->where('type', '=', $type)
                ->whereIn('id', $chat_ids)
                ->with(['messages' => function($query){
                        $query->select(['id', 'chat_id', 'user_id', 'text', 'updated_at'])
                            ->with(['user' => function($query){
                                $query->select(['id', 'name', 'avatar'])
                                    ->get();
                                }])
                            ->orderBy('id', 'desc')
                            ->get();
                            //->first();
                    }])->get();
        }else{
            $result = $this->startConditions()
                ->select($fields)
                ->whereIn('id', $chat_ids)
                ->with(['messages' => function($query){
                        $query->select(['id', 'chat_id', 'user_id', 'text', 'updated_at'])
                            ->with(['user' => function($query){
                                $query->select(['id', 'name', 'avatar'])
                                    ->get();
                                }])
                            ->orderBy('id', 'desc')
                            ->get();
                            //->first();
                    }])->get();
        }
        
        return $result;
    }

    protected function searchOnlyChatsByTypeWithLastMessage($fields, $chat_ids, $type, $search_query){
        return $this->startConditions()
            ->select($fields)
            ->where('type', '=', $type)
            ->where('name', 'LIKE', '%' . $search_query . '%')
            ->whereIn('id', $chat_ids)
            ->with(['messages' => function($query){
                    $query->select(['id', 'chat_id', 'text', 'updated_at'])
                        ->orderBy('id', 'desc')
                        ->first();
                }])->get();
    }

    public function getChatsForUserByType($user_id, $type, $currentUser = null){

        $fields = ['id', 'name', 'type', 'avatar'];
        if ($type == 0){
            $fields = ['id', 'name', 'type', 'avatar'];
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

        // $chats = $search_query != null ? 
        //     $this->searchOnlyChatsByTypeWithLastMessage($fields, $chat_ids, $type, $search_query) : 
        $chats = $this->getOnlyChatsByTypeWithLastMessage($fields, $chat_ids, $type);
        
        $chats = $chats->sortByDesc(function($chat, $key){
            if(count($chat['messages']) > 0){
                return $chat['messages'][0]['updated_at'];
            }
        })->values();

        foreach($chats as $chat){
            $msgTemp = $chat->messages->first();
            unset($chat['messages']);

            //$chat->messages = null;
            $msgTemp == null ? $chat->setAttribute('messages', []) : $chat->setAttribute('messages', [$msgTemp]);;
            //$chat->setAttribute('messages', $msgTemp);
            if ($chat->type == 0){
                $chat->name = json_decode($chat->name, true)[$currentUser->name];
                $chat->setAttribute('users', collect());
                foreach($chatLinksWithUser as $chatLinkWithUser){
                    if($chat->id == $chatLinkWithUser->chat_id){
                        if($chat->id == $chatLinkWithUser->chat_id){
                            $chat->users->push($chatLinkWithUser->user);
                        }
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
        $newLink = new ChatUserLink();
        $newLink->user_id = $user_id;
        $newLink->chat_id = $chat_id;
        $newLink->save();
        //ChatUserLink::insert(['user_id' => $user_id, 'chat_id' => $chat_id]);
    }

    public function findChatForBothUsersById($first_user_id, $second_user_id, $chatType = 0){
        $chatLinks = ChatUserLink::select('chat_id', 'user_id')
            ->where('user_id', '=', $first_user_id)
            ->orWhere('user_id', '=', $second_user_id)
            ->with(['chat' => function($query){
                $query->select('id', 'type')->get();
            }])
            ->get();

        
        $chat_ids = [];

        foreach($chatLinks as $chatLink){
            if(!(
                $chatLink->chat->type == $chatType && 
                (
                    $chatLink->user_id == $first_user_id || 
                    $chatLink->user_id == $second_user_id
                 )
            ))
            {
                //$chatLinks->forget($chatLink);
                unset($chatLinks[array_search($chatLink, json_decode(json_encode($chatLinks), true))]);
            } else {
                $chat_ids[] = $chatLink->chat_id;
            }
        }

        $chat_ids_count = array_count_values($chat_ids);

        foreach($chat_ids_count as $key => $chat_id_count){
            if($chat_id_count > 1) return $key;
        }

        return false;
    }

    public function isUserHaveChat($user_id, $chat_id){
        $result = ChatUserLink::select('chat_id', 'user_id')
        ->where('user_id', '=', $user_id)
        ->where('chat_id', '=', $chat_id)
        ->get();

        return (count($result) > 0) ? true : false;
    }

    public function findChatById($chat_id, $fields){
        $result = $this->startConditions()->select($fields)
        ->where('chat_id', '=', $chat_id)
        ->first();

        return $result;
    }

}