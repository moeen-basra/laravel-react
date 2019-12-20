<?php

namespace Tests\Feature;

use App\User;
use App\Article;
use Carbon\Carbon;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Str;

class ArticleTest extends TestCase
{
    use DatabaseTransactions;

    public $user;

    public function setUp(): void
    {
        parent::setUp();

        $this->user = $this->createAdminUser();
    }

    private function createAdminUser()
    {
        return User::create([
            'name' => 'Moeen Basra',
            'email' => 'm.basra@live.com',
            'password' => bcrypt('secret'),
            'is_admin' => true,
            'remember_token' => Str::random(10),
        ]);
    }

    /** @test */
    public function that_only_loading_articles_for_provided_user_id()
    {
        $this->seedUnpublishedArticles();

        $articles = Article::loadAllMine($this->user->id);

        $this->assertCount(15, $articles);

    }

    private function seedUnpublishedArticles($num = 15)
    {
        factory(Article::class, $num)->create([
            'user_id' => $this->user->id,
            'published' => false,
        ]);
    }

    /** @test */
    public function that_load_all_articles()
    {
        $this->seedUnpublishedArticles();

        $articles = Article::loadAll();

        $this->assertCount(15, $articles);
    }

    /** @test */
    public function that_loaded_only_published_articles()
    {
        $this->seedPublishedArticles();

        $articles = Article::published()->get();

        $this->assertCount(5, $articles);
    }

    private function seedPublishedArticles($num = 5)
    {
        factory(Article::class, $num)->create([
            'user_id' => $this->user->id,
            'published' => true,
        ]);
    }

    /** @test */
    public function that_load_only_published_article()
    {
        $this->seedUnpublishedArticles();

        factory(Article::class, 1)->create([
            'user_id' => $this->user->id,
            'published' => true,
        ]);

        $this->assertEquals(1, Article::published()->count());
    }

    /** @test */
    public function that_article_get_published_and_total_number_of_published_get_changed()
    {
        $this->seedPublishedArticles(2);
        $this->seedUnpublishedArticles(5);

        $date = Carbon::now()->format('Y-m-d');

        $article = Article::where('published', false)->first();
        $article->published = true;
        $article->published_at = $date;

        $article->save();

        $this->assertEquals($article->published, true);
        $this->assertEquals($article->published_at->format('Y-m-d'), $date);

        $articles = Article::where('published', true)->get();

        $this->assertEquals($articles->count(), 3);
    }

    /** @test */
    public function that_article_get_unpublished_and_total_number_of_unpublished_get_changed()
    {
        $this->seedPublishedArticles(2);
        $this->seedUnpublishedArticles(5);

        $article = Article::where('published', true)->first();
        $article->published = false;
        $article->published_at = null;

        $article->save();

        $this->assertEquals($article->published, false);
        $this->assertEquals($article->published_at, null);

        $articles = Article::where('published', false)->get();

        $this->assertEquals($articles->count(), 6);
    }
}
