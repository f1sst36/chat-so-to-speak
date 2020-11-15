<?php

namespace Database\Factories;

use App\Models\Chat;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class ChatFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Chat::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $images = ['animals', 'city', 'game', 'laravel+react', 'work', 'public_chat_avatar'];

        return [
            'name' => $this->faker->sentence(rand(1, 5), true),
            'type' => 1,
            'avatar' => 'media/images/' . $images[array_rand($images)] . '.png',
            'owner_id' => rand(1, 40),
        ];
    }
}
