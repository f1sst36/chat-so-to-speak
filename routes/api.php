<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\BearerToken;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//App\Events\NewMessageEvent::dispatch($data);

Route::group(['namespace' => 'Auth', 'prefix' => 'auth'], function(){
    Route::post('/registration', 'AuthController@registration')
        ->withoutMiddleware([BearerToken::class, 'auth:api']);
    Route::post('/login', 'AuthController@Login')
        ->withoutMiddleware([BearerToken::class, 'auth:api'])->name('login');

    Route::post('/logout', 'AuthController@Logout');
});

Route::group(['namespace' => 'Chat', 'prefix' => 'chat'], function(){
    Route::group(['prefix' => 'messages'], function(){
        Route::get('/chat-id={chat_id}&msg-id={last_msg_id}', 'MessageController@index');
    });

    Route::get('/type={chat_type}', 'ChatController@index');
    Route::post('/create/group', 'ChatController@createGroupChat');

});

Route::group(['namespace' => 'User', 'prefix' => 'user'], function(){
    Route::get('/', 'UserController@index');
    Route::get('/info', 'UserController@show');
    Route::post('/search', 'UserController@searchUsersAndChats');
});
