<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Events\NewMessageEvent;
use App\Models\User;

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

Route::get('/test', function (Request $request) {
    $data = ['abc' => 23, 4 => '12412gdfgdfg'];
    
    App\Events\NewMessageEvent::dispatch($data);
    //event(new App\Events\NewMessageEvent($data));
    return response()->json($data, 200);
});
