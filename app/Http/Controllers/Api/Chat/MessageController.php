<?php

namespace App\Http\Controllers\Api\Chat;

use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Api\Chat\SendMessageRequest;
use App\Models\Message;
use App\Repositories\MessageRepository;
use App\Events\NewMessageEvent;
use Illuminate\Support\Carbon;
use App\Traits\UploadTrait;

class MessageController extends Controller
{

    use UploadTrait;

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

    /**
     * @OA\Post(
     *     path="/api/chat/messages/send",
     *     summary="Trigger method to broadcasting event of messages send",
     *     tags={"Message"},
     *     @OA\RequestBody(
     *          request="person",
     *          required=true,
     *          description="Optional Request Parameters for Querying",
     *          @OA\JsonContent(
     *              type="integer",
     *              example="{
     * chat_id=1; 
     * text='Some text'
     * }"
     *          )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\Schema(
     *             type="array",
     *             @OA\Items(ref="#/definitions/Message")
     *         ),
     *     ),
     *     @OA\Response(
     *         response="401",
     *         description="Unauthorized user",
     *     ),
     * )
     */
    public function sendMessage(SendMessageRequest $request){
        $data = $request->all();
        $currentDate = Carbon::now();

        $message = new Message();

        if($request->hasFile('media')){
            $mediaData = $request->file('media');
            $mediaDataName = Str::random(25) . "_" . str_replace(
                " ", 
                "_", 
                pathinfo($mediaData->getClientOriginalName(), PATHINFO_FILENAME)
            );
            $folder = '/media/message/';
            $filePath = $folder . $mediaDataName . '.' . $mediaData->getClientOriginalExtension();
    
            $this->uploadOne($mediaData, $folder, 'public', $mediaDataName);
    
            $message->media = "/storage" . $filePath;
            $message->media_name = $mediaDataName;
            $message->media_size = $mediaData->getSize();
            $message->media_extention = $mediaData->getClientOriginalExtension();

            // $mediaExtention = $mediaData->getClientOriginalExtension();
            // $message->mediaSize = strval($mediaData->getSize());
        }
        

        $message->fill($data);
        $message->user_id = $request->user()->id;
        $message->created_at = $message->updated_at = $currentDate;

        if(!$message->text && !$message->media){
            return response()->json([
                'status' => false,
                'data' => null,
                'message' => 'Сообщение не может быть отпралено',
            ], 200);
        }
        
        if($message){
            $message->save();

            $responseMessage = [
                'id' => $message->id,
                'user' => $message->user,
                'text' => $message->text,
                'media' => $message->media ? $message->media : "",
                'mediaName' => $message->media_name ? $message->media_name : "",
                'mediaExtention' => $message->media_extention ? $message->media_extention : "",
                'mediaSize' => $message->media_size ? intval($message->media_size) : "",
                'updated_at' => $message->updated_at,
            ];

            $response = [
                'dialogType' => $message->chat->type,
                'dialogId' => $message->chat_id,
                // 'dialogAvatar' => $message->chat->avatar,
                'message' => $responseMessage,
            ];

            event(new NewMessageEvent($response, $message->chat_id));
        }

        return response()->json([
            'status' => true,
            'data' => $response,
            'message' => 'Сообщение отправлено',
        ], 200);
    }
}
