<?php

namespace App\Http\Controllers\Api\Chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Api\Chat\CreateDirectChatRequest;
use App\Http\Requests\Api\Chat\CreateGroupChatRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Repositories\ChatRepository;
use App\Repositories\UserRepository;
use App\Models\Chat;
use App\Traits\UploadTrait;
use Illuminate\Support\Str;

class ChatController extends Controller
{

    use UploadTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(
        Request $request, 
        $chat_type, 
        ChatRepository $chatRepository, 
        UserRepository $userRepository
    )
    {
        $chats = $chatRepository->getChatsForUserByType($request->user()->id, $chat_type);

        if(count($chats) > 0){
            if($chat_type == 0){
                foreach($chats as $chat){
                    $chat->name = json_decode($chat->name, true)[$request->user()->name];
                }
            }
            
            $result = $chats;
            $statusCode = 200;
        } else {
            $result = [];
            $statusCode = 200;
        }

        return response()->json($result, $statusCode);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createGroupChat(
        CreateGroupChatRequest $request, 
        ChatRepository $chatRepository
    )
    {
        $data = $request->all();
        $chat = new Chat();
        $chat->name = $data['name'];
        $chat->type = 1;

        if ($request->has('avatar')){
            $image = $request->file('avatar');
            $imgName = Str::slug($request->input('name')) . '_' . time();
            $folder = 'media/images/';
            $filePath = $folder . $imgName . '.' . $image->getClientOriginalExtension();

            $this->uploadOne($image, $folder, 'public', $imgName);

            $chat->avatar = $filePath;
        }

        if ($chat) {
            $chat->owner_id = $request->user()->id;
            $chat->save();

            $chat->setAttribute('messages', []);

            try {
                $chatRepository->linkUserWithChat($request->user()->id, $chat->id);
            } catch(Exception $e) {
                return response()->json([
                    'message' => 'Chat cant be saved into DB',
                ], 400);
            }

            $result = [
                'id' => $chat->id,
                'type' => $chat->type,
                'name' => $chat->name,
                'users' => [$request->user()],
                'avatar' => $chat->avatar,
                'messages' => [],
                'message' => 'Групповой чат успешно создан'
            ];

            return response()->json($result, 200);
        } else {
            return response()->json([
                'message' => 'Ошибка создания чата',
            ], 400);
        }
    }

    public function createDirectChat(
        CreateDirectChatRequest $request, 
        ChatRepository $chatRepository, 
        UserRepository $userRepository
    )
    {
        return;
        $interlocutor_id = $request->input('interlocutor_id');
        $chat = new Chat();
        $chat->type = 0;

        if($interlocutor_id == $request->user()->id){
            return response()->json([
                'message' => 'Cant create a chat with myself',
            ], 400);
        }

        $interlocutor = $userRepository->getInterlocutorById($data['interlocutor_id']);

        if(!isset($interlocutor)){
            return response()->json([
                'message' => 'No have user with this id',
            ], 400);
        }

        $chat->name = json_encode([$request->user()->name => $interlocutor->name, $interlocutor->name => $request->user()->name]);

        $currentUserChats = $chatRepository->getChatsForUserByType($request->user()->id, 0);
        foreach($currentUserChats as $currentUserChat){
            if(
                json_decode($currentUserChat->name, true)[$request->user()->name] == 
                $interlocutor->name
            ){
                return response()->json([
                    'message' => 'Chat with this user already exists',
                ], 400);
            }
        }

        if ($chat) {
            $chat->owner_id = $request->user()->id;
            $chat->save();

            $chat->setAttribute('messages', []);

            try {
                $chatRepository->linkUserWithChat($request->user()->id, $chat->id);
                if(isset($data['interlocutor_id'])){
                    $chat->setAttribute('user', $interlocutor);
                    $chatRepository->linkUserWithChat($data['interlocutor_id'], $chat->id);
                } else {
                    $chat->setAttribute('users', [$request->user()]);
                }
            } catch(Exception $e) {
                return response()->json([
                    'message' => 'Chat cant be saved into DB',
                ], 400);
            }

            // socket event

            $result = [
                'id' => $chat->id,
                'type' => $chat->type,
                'messages' => [],
                'message' => 'Chat created successfully'
            ];

            if (isset($chat->user)){
                $result['user'] = $chat->user;
            } else {
                $result['name'] = $chat->name;
                $result['users'] = $chat->users;
            }

            return response()->json($result, 200);
        } else {
            return response()->json([
                'message' => 'Failed to create chat',
            ], 400);
        }
    }
}
