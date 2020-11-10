<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\UserRepository;

class UserController extends Controller
{
    public function show(Request $request, UserRepository $userRepository){
        $data = $userRepository->getUserInfoById($request->user()->id);
        $data->avatar = env('APP_URL', '') . '/' . $data->avatar;

        if ($data){
            $result = $data;
            $statusCode = 200;
        } else {
            $result = 'Not found user for this id';
            $statusCode = 404;
        }

        return response()->json($result, $statusCode);
    }
}
