<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(40)->create();
        // \App\Models\Chat::factory(20)->create();
        // \App\Models\ChatUserLink::factory(100)->create();
        \App\Models\Message::factory(100)->create();
    }
}
