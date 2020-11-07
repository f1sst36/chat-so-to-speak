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
    public function index(Request $request, ChatRepository $chatRepository)
    {
        $chats = $chatRepository->getChatsForUser($request->user()->id);

        if(count($chats) > 0){
            $result = $chats;
            $statusCode = 200;
        } else {
            $result = 'Chats not found';
            $statusCode = 404;
        }

        return response()->json([
            'data' => $result,
        ], $statusCode);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateChatRequest $request)
    {
        $data = $request->all();
        $chat = (new Chat)->fill($data);

        if ($chat){
            $chat->owner_id = $request->user()->id;
            $chat->save();

            try {
                DB::table('chat-user')
                    ->insert(['user_id' => $request->user()->id, 'chat_id' => $chat->id]);
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
