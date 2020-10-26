<?php

use Illuminate\Support\Facades\Route;
use App\Events\NewMessageEvent;

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
    //$message = ['data' => '12313221'];
    
    event(new NewMessageEvent('fsdf'));
    return view('welcome');
});
