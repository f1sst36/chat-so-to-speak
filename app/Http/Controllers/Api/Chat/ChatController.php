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
     * @OA\Get(
     *     path="/api/chat/type={type}",
     *     description="Get list of chats by type",
     *     tags={"Chat"},
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\Schema(
     *             type="array",
     *             @OA\Items(ref="#/definitions/Chat")
     *         ),
     *     ),
     *     @OA\Response(
     *         response="401",
     *         description="Unauthorized user",
     *     ),
     * )
     */
    public function index(
        Request $request, 
        $chat_type, 
        ChatRepository $chatRepository, 
        UserRepository $userRepository
    )
    {
        $chats = $chatRepository->getChatsForUserByType($request->user()->id, $chat_type, $request->user());
        return response()->json($chats, 200);
        // if(count($chats) > 0){
        //     if($chat_type == 0){
        //         foreach($chats as $chat){
        //             $chat->name = json_decode($chat->name, true)[$request->user()->name];
        //         }
        //     }
    
        //     $result = $chats;
        //     $statusCode = 200;
        // } else {
        //     $result = [];
        //     $statusCode = 200;
        // }

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

        if ($request->hasFile('avatar')){
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
                'chat' => [
                    'id' => $chat->id,
                    'type' => $chat->type,
                    'name' => $chat->name,
                    'users' => [$request->user()],
                    'avatar' => $chat->avatar,
                    'messages' => [],
                ],
                'message' => 'Групповой чат успешно создан'
            ];

            return response()->json($result, 200);
        } else {
            return response()->json([
                'message' => 'Ошибка создания чата',
            ], 400);
        }
    }

    // user_id,
    public function createDirectChat(
        CreateDirectChatRequest $request, 
        ChatRepository $chatRepository, 
        UserRepository $userRepository
    )
    {
        $data = $request->all();

        $isIssetChat = $chatRepository->findChatForBothUsersById($request->user()->id, $data['user_id']);

        if($isIssetChat){
            return response()->json([
                'message' => 'Chat with these users already exists',
                'chatId' => $isIssetChat
            ], 400);
        }

        $secondUser = $userRepository->getUserInfoById($data['user_id']);

        if(!$secondUser || $data['user_id'] == $request->user()->id){
            return response()->json([
                'message' => 'User with this id not found',
            ], 404);
        }

        $chat = new Chat();
        $chat->name = json_encode([
            $request->user()->name => $secondUser->name,
            $secondUser->name => $request->user()->name
        ]);
        $chat->type = 0;

        if ($chat) {
            $chat->owner_id = $request->user()->id;
            $chat->save();

            $chat->setAttribute('messages', []);

            try {
                $chatRepository->linkUserWithChat($request->user()->id, $chat->id);
                $chatRepository->linkUserWithChat($data['user_id'], $chat->id);

                
            } catch(Exception $e) {
                return response()->json([
                    'message' => 'Chat cant be saved into DB',
                ], 400);
            }

            $chatName = json_decode($chat->name, true)[$request->user()->name];
            $result = [
                'chat' => [
                    'id' => $chat->id,
                    'type' => $chat->type,
                    'name' => $chatName,
                    'users' => [$request->user(), $secondUser],
                    //'avatar' => ,
                    'messages' => [],
                ],
                'message' => 'Личный чат успешно создан'
            ];

            return response()->json($result, 200);
        } else {
            return response()->json([
                'message' => 'Ошибка создания чата',
            ], 400);
        }
    }

    // chat_id, user_id
    public function appendUserToGroup(Request $request, ChatRepository $chatRepository, UserRepository $userRepository){
        $data = $request->all();
        $isIssetChat = $chatRepository->isUserHaveChat($data['user_id'], $data['chat_id']);

        if($isIssetChat){
            return response()->json([
                'message' => 'Пользователь уже состоит в этом чате',
            ], 400);
        }

        try {
            $chatRepository->linkUserWithChat($data['user_id'], $data['chat_id']);
            //$chat = $chatRepository->getOnlyChatsByTypeWithLastMessage(['id', 'name', 'type', 'avatar'], [$data['chat_id']]);
            $appendedUser = $userRepository->getUserInfoById($data['user_id']);
        } catch(Exception $e) {
            return response()->json([
                'message' => 'Chat cant be saved into DB',
            ], 400);
        }
        
        //return $chat;

        // if($chat->type == 0){
        //     $chatName = json_decode($chat->name, true)[$request->user()->name];
        // }else{
        //     $chatName = $chat->name;
        // }
        
        // $result = [
        //     'chat' => [
        //         'id' => $chat->id,
        //         'type' => $chat->type,
        //         'name' => $chatName,
        //         'users' => ,
        //         //'avatar' => ,
        //         'messages' => [],
        //     ],
        //     'message' => 'Личный чат успешно создан'
        // ];

        //event(new AppendedToChatEvent($result));

        return response()->json($appendedUser, 200);
    }
}
