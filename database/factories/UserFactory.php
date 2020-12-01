<?php


namespace Database\Factories;


use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'phone' => $this->faker->phoneNumber,
            'about' => $this->faker->sentence(10),
            'password' => $password = bcrypt('secret'),
            'remember_token' => Str::random(10),
        ];
    }

    public function isAdmin()
    {
        return $this->state(function() {
            return [
              'is_admin' => true
            ];
        });
    }
}
