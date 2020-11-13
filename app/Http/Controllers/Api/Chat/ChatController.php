<?php

namespace App\Http\Controllers\Api\Chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Api\Chat\CreateChatRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Repositories\ChatRepository;
use App\Models\Chat;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $chat_type, ChatRepository $chatRepository)
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
            $result = 'Chats not found';
            $statusCode = 404;
        }

        return response()->json([
            'chats' => $result
        ], $statusCode);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateChatRequest $request, ChatRepository $chatRepository)
    {
        $data = $request->all();
        $chat = (new Chat)->fill($data);
        $chat->type = 1;

        if (isset($data['interlocutor_id'])) {
            if($data['interlocutor_id'] == $request->user()->id){
                return response()->json([
                    'message' => 'Cant create a chat with myself',
                ], 400);
            }

            $interlocutorName = $chatRepository->getInterlocutorsNameById($data['interlocutor_id']);

            if(!isset($interlocutorName)){
                return response()->json([
                    'message' => 'No have user with this id',
                ], 400);
            }

            $currentUserChats = $chatRepository->getChatsForUserByType($request->user()->id, 0);
            foreach($currentUserChats as $currentUserChat){
                if(
                    json_decode($currentUserChat->name, true)[$request->user()->name] == 
                    $interlocutorName->name
                ){
                    return response()->json([
                        'message' => 'Chat with this user already exists',
                    ], 400);
                }
            }

            $chat->type = 0;
            $chat->name = json_encode([
                $interlocutorName->name => $request->user()->name, 
                $request->user()->name => $interlocutorName->name
            ]);
        }

        if ($chat) {
            $chat->owner_id = $request->user()->id;
            $chat->save();

            try {
                if(isset($data['interlocutor_id'])){
                    $chatRepository->linkUserWithChat($data['interlocutor_id'], $chat->id);
                }
                $chatRepository->linkUserWithChat($request->user()->id, $chat->id);
            } catch(Exception $e) {
                return response()->json([
                    'message' => 'Chat cant be saved into DB',
                ], 400);
            }

            // socket event

            return response()->json([
                'data' => $chat,
                'message' => 'Chat created successfully',
            ], 200);
        } else {
            return response()->json([
                'message' => 'Failed to create chat',
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
