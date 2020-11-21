<?php

namespace App\Http\Controllers\Api\Chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Api\Chat\SendMessageRequest;
use App\Models\Message;
use App\Repositories\MessageRepository;
use App\Events\NewMessageEvent;
use Illuminate\Support\Carbon;

class MessageController extends Controller
{
    public function index(Request $request, $chat_id, $last_msg_id, MessageRepository $messageRepository)
    {   
        $isUserHaveChat = $messageRepository->isUserHaveChat($chat_id, $request->user()->id);

        if(!$isUserHaveChat){
            return response()->json([
                'message' => 'The user does not have permissions to this chat',
            ], 400);
        }

        $messages = $messageRepository->getMessagesByChatId($chat_id, $last_msg_id);
        return response()->json($messages, 200);
    }

    // post - chat_id, text, 
    public function sendMessage(SendMessageRequest $request){
        $data = $request->all();
        $currentDate = Carbon::now();

        $message = (new Message)->fill($data);
        $message->user_id = $request->user()->id;
        $message->created_at = $message->updated_at = $currentDate;
        
        if($message){
            $message->save();
            event(new NewMessageEvent($message));
        }

        return response()->json([
            'status' => true,
            'message' => 'Сообщение отправлено',
        ], 200);
    }
}
