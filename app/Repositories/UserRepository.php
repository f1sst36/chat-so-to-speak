<?php

namespace App\Repositories;

use App\Models\User as Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

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

    public function getInterlocutorsNameById($interlocutorId){
        return $this->startConditions()
            ->select('name')
            ->where('id', '=', $interlocutorId)
            ->first();
    }

}