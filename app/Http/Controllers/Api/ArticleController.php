<?php
namespace App\Http\Controllers\Api;

use App\Article;
use App\Http\Controllers\Controller;
use App\Http\Requests\ArticleRequest;
use App\User;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->user()->is_admin) {
            return Article::loadAll();
        }
        return Article::loadAllMine($request->user()->id);
    }

    /**
     * get published articles
     *
     * @return mixed
     */
    public function publishedArticles() {
        return Article::loadAllPublished();
    }

    /**
     * Get detail of published article
     *
     * @param $id
     * @return mixed
     */
    public function publishedArticle($id) {
        return Article::loadPublished($id);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ArticleRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ArticleRequest $request)
    {
        $user = $request->user();

        $article = new Article();

        $article->title = $request->get('title');
        $article->slug = str_slug($request->get('title'));
        $article->description = $request->get('description');
        $article->content = $request->get('content');

        $user->articles()->save($article);

        return response()->json($article, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if (!$request->user()->is_admin) {
            return Article::mine($request->user()->id)->findOrFail($id);
        }

        return Article::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ArticleRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ArticleRequest $request, $id)
    {
        $article = Article::findOrFail($id);

        $article->slug = $request->get('slug');
        $article->title = $request->get('title');
        $article->description = $request->get('description');
        $article->content = $request->get('content');
        $article->published = $request->get('published');
        $article->published_at = $request->get('published_at');

        $article->save();

        return response()->json($article, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $article = Article::findOrFail($id);

        $article->delete();

        return response([], 200);
    }
}