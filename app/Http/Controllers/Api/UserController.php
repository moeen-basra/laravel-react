<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use GuzzleHttp\Client;

class UserController extends Controller
{
    public function update(UserRequest $request, $id)
    {
        $user = User::findOrFail($id);

        $user->name = $request->get('name');
        $user->email = $request->get('email');
        $user->phone = $request->get('phone');
        $user->about = $request->get('about');

        $user->save();

        return response()->json([
            'user' => $user
        ], 201);
    }
}