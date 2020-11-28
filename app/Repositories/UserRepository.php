<?php

namespace App\Repositories;

use App\Models\User as Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use App\Models\ChatUserLink;

class UserRepository extends CoreRepository{

    /**
     * @return string
     */
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getUserInfoById($user_id){
        return $this->startConditions()
            ->select(['id', 'name', 'avatar'])
            ->where('id', '=', $user_id)
            ->first();
    }

    public function getUserByName($user_name){
        return $this->startConditions()
            ->where('id', '=', $interlocutorId)
            ->where('name', '=', $user_name)
            ->first();
    }

    public function getInterlocutorById($interlocutorId){
        return $this->startConditions()
            ->select('id', 'name', 'avatar')
            ->where('id', '=', $interlocutorId)
            ->first();
    }

    public function getAllUsersWithFields($fields, $currentUserId){
        return $this->startConditions()->select($fields)->where('id', '!=', $currentUserId)->get();
    }

    public function searchUserByName($name){
        return $this->startConditions()
            ->select(['id', 'name', 'avatar'])
            ->where('name', 'LIKE', '%' . $name . '%')
            ->get();
    }

    public function fetchUserOutsideChat($chat_id){
        $user_ids = ChatUserLink::select('user_id')
            ->where('chat_id', '=', $chat_id)
            ->get();
        
        $user_ids = $user_ids->map(function($user_id){
            return $user_id->user_id;
        });
        //return $user_ids;

        $result = $this->startConditions()
            ->select(['id', 'name', 'avatar'])
            ->whereNotIn('id', $user_ids)
            ->get();
        
        return $result;
    }

}