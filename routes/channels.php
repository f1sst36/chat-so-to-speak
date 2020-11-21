<?php

use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

// Broadcast::channel('socket/auth', function ($channel_name, $socket_id) {
//     return $channel_name . $socket_id;
// });

// Broadcast::channel('user.{userId}', function ($user, $userId) {
//     return $user->id === $userId;
// });

// Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
//     return (int) $user->id === (int) $id;
// });

Broadcast::routes(['middleware' => ['web', 'auth']]);

// Broadcast::channel('chat', \App\Broadcasting\MessagesChannel::class);
