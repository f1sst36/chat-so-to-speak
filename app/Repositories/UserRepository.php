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
            ->select(['name', 'avatar', 'created_at'])
            ->where('id', '=', $user_id)
            ->first();
    }

}