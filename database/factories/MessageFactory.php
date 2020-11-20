<?php

namespace Database\Factories;

use App\Models\Message;
use Illuminate\Database\Eloquent\Factories\Factory;

class MessageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Message::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $date = $this->faker
        ->unique()
        ->dateTimeBetween($startDate = "now", $endDate = "30 days");
        //->format('Y-m-d')

        return [
            'chat_id' => 1,
            'user_id' => rand(1, 2),
            'text' => $this->faker->realText(rand(10, 320)),
            'created_at' => $date,
            'updated_at' => $date,
        ];
    }
}
