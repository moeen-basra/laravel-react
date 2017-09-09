<?php
namespace App\Http\Controllers\Api;

use App\Article;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index() {
        return Article::get();
    }

    public function update(Request $request, $id)
    {
        $article = Article::findOrFail($id);

        $article->slug = $request->get('slug');
        $article->title = $request->get('title');
        $article->content = $request->get('content');

        $article->save();

        return response()->json([
            'user' => $article
        ], 201);
    }
}