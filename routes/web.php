<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Events\NewMessageEvent;
use App\Models\User;
use App\Http\Requests\Api\Chat\SendMessageRequest;
use App\Models\Message;
use App\Repositories\MessageRepository;
use Illuminate\Support\Carbon;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('socket/auth', function (Request $request) {
    $data = $request->all();
    $string = $data['socket_id'] . ':' . $data['channel_name'];
    $key = env('PUSHER_APP_KEY', '657da11b3b498151a232') . ':' . hash_hmac('sha256', $string, env('PUSHER_APP_SECRET', '8d7ce394d867ac9a15c4'));

    return response()->json(['auth' => $key], 200);
});

Route::get('/test', function (Request $request) {
    //$data = ['abc' => 23, 'text' => 'Some text 123'];

    App\Events\NewMessageEvent::dispatch('hfghf');
    //event(new App\Events\NewMessageEvent('hfghf'));
    //return response()->json($data, 200);
});
