<?php

namespace Tests\Feature;

use App\Article;
use App\User;
use Symfony\Component\HttpKernel\Tests\Exception\NotFoundHttpExceptionTest;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ArticleTest extends TestCase
{
    use DatabaseMigrations, DatabaseTransactions;

    public $user;

    public function setUp()
    {
        parent::setUp();

        $this->user = $this->createAdminUser();
    }

    /** @test */
    public function that_only_loading_articles_for_provided_user_id()
    {
        $this->seedUnpublishedArticles();

        $articles = Article::loadAllMine($this->user->id);

        $this->assertCount(15, $articles);

    }

    /** @test */
    public function that_load_all_loads_all_articles()
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

    /** @test */
    public function that_load_only_published_article()
    {
        $this->seedUnpublishedArticles();

        factory(Article::class, 1)->create([
            'user_id' => $this->user->id,
            'published' => true,
        ]);

        $article = Article::loadPublished(16);

        $this->assertInstanceOf(Article::class, $article);
    }

    private function seedUnpublishedArticles()
    {
        factory(Article::class, 15)->create([
            'user_id' => $this->user->id,
            'published' => false,
        ]);
    }

    private function seedPublishedArticles()
    {
        factory(Article::class, 5)->create([
            'user_id' => $this->user->id,
            'published' => true,
        ]);
    }

    private function createAdminUser()
    {
        return User::create([
            'name' => 'Moeen Basra',
            'email' => 'm.basra@live.com',
            'password' => bcrypt('secret'),
            'is_admin' => true,
            'remember_token' => str_random(10),
        ]);
    }
}
