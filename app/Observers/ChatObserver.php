<?php

namespace App\Observers;

use App\Models\Models\Chat;

class ChatObserver
{
    public function creating(Chat $chat)
    {
        if(empty($chat->created_at)) $chat->created_at = Carbon::now();
        if(empty($chat->updated_at)) $chat->updated_at = Carbon::now();
    }

    /**
     * Handle the chat "created" event.
     *
     * @param  \App\Models\Models\Chat  $chat
     * @return void
     */
    public function created(Chat $chat)
    {
        //
    }

    /**
     * Handle the chat "updated" event.
     *
     * @param  \App\Models\Models\Chat  $chat
     * @return void
     */
    public function updated(Chat $chat)
    {
        //
    }

    /**
     * Handle the chat "deleted" event.
     *
     * @param  \App\Models\Models\Chat  $chat
     * @return void
     */
    public function deleted(Chat $chat)
    {
        //
    }

    /**
     * Handle the chat "restored" event.
     *
     * @param  \App\Models\Models\Chat  $chat
     * @return void
     */
    public function restored(Chat $chat)
    {
        //
    }

    /**
     * Handle the chat "force deleted" event.
     *
     * @param  \App\Models\Models\Chat  $chat
     * @return void
     */
    public function forceDeleted(Chat $chat)
    {
        //
    }
}
