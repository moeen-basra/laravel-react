<?php
namespace App\Http\Controllers\Api;

use App\Article;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index() {
        return Article::select([
            'id',
            'slug',
            'title',
            'description',
            'published',
            'published_at',
            'updated_at',
            'created_at',
        ])->latest()->paginate();
    }

    public function update(Request $request, $id)
    {
        $article = Article::findOrFail($id);

        $article->slug = $request->get('slug');
        $article->title = $request->get('title');
        $article->description = $request->get('description');
        $article->published = $request->get('published');
        $article->published_at = $request->get('published_at');
//        $article->content = $request->get('content');

        $article->save();

        return response()->json($article, 201);
    }
}