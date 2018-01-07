<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'slug' => '',
            'title' => 'required|min:3',
            'description' => 'required|min:10',
            'content' => 'required|min:10',
            'published' => 'nullable|boolean',
            'published_at' => 'nullable|date',
        ];
    }
}
