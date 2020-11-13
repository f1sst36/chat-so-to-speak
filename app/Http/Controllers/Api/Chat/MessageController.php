<?php

namespace App\Http\Controllers\Api\Chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\MessageRepository;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $chat_id, $last_msg_id, MessageRepository $messageRepository)
    {   
        $isUserHaveChat = $messageRepository->isUserHaveChat($chat_id, $request->user()->id);

        if(!$isUserHaveChat){
            return response()->json([
                'message' => 'The user does not have permissions to this chat',
            ], 400);
        }

        $messages = $messageRepository->getMessagesByChatId($chat_id);

        if (count($messages) > 0){
            return response()->json([
                'data' => $messages
            ], 200);
        } else {
            return response()->json([
                'data' => [],
                'message' => 'No have messages for this chat'
            ], 404);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
