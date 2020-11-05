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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['namespace' => 'Auth', 'prefix' => 'auth'], function(){
    Route::post('/registration', 'AuthController@registration')->withoutMiddleware([BearerToken::class, 'auth:api']);
    Route::post('/login', 'AuthController@Login')->withoutMiddleware([BearerToken::class, 'auth:api'])->name('login');

    Route::post('/logout', 'AuthController@Logout');
});

Route::group(
    ['namespace' => 'Chat', 'prefix' => 'chat'], 
    function(){
        Route::get('/chats', 'ChatController@index');
    }
);







Route::post('/test', function (Request $request) {
    $data = ['abc' => 23, 4 => '12412gdfgdfg'];
    //App\Events\NewMessageEvent::dispatch($data);
    //return abort(404);
    return response()->json($data, 200);
});
