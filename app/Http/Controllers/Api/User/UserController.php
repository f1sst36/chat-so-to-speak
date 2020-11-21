<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\UserRepository;
use App\Repositories\ChatRepository;
use App\Http\Requests\Api\User\SearchUsersAndChatsRequest;

class UserController extends Controller
{
    public function index(Request $request, UserRepository $userRepository){
        $fields = ['id', 'name', 'avatar'];
        $users = $userRepository->getAllUsersWithFields($fields);
        return response()->json($users, 200);
    }

    public function show(Request $request, UserRepository $userRepository){
        $data = $userRepository->getUserInfoById($request->user()->id);

        if ($data){
            $result = $data;
            $statusCode = 200;
        } else {
            $result = 'Not found user for this id';
            $statusCode = 404;
        }

        return response()->json($result, $statusCode);
    }

    public function searchUsersAndChats(
        SearchUsersAndChatsRequest $request, 
        UserRepository $userRepository
    ){
        $searchQuery = $request->input('search_query');
        $users = $userRepository->searchUserByName($searchQuery);
        
        //$type = 1;
        //$chats = $chatRepository->getChatsForUserByType($request->user()->id, $type, $searchQuery);

        return response()->json($users, 200);
    }
}
