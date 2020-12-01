<?php


namespace Database\Factories;


use App\Models\User;
use App\Models\Article;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class ArticleFactory extends Factory
{
    protected $model = Article::class;

    public function definition()
    {
        $title = $this->faker->sentence;

        return [
            'user_id' => User::factory(),
            'title' => $title,
            'slug' => Str::slug($title),
            'description' => $this->faker->sentence(15),
            'content' => implode(' ', $this->faker->paragraphs(2)),
            'published' => true,
            'published_at' => Carbon::now(),
        ];
    }
}
