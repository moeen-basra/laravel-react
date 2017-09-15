<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class Article extends Model
{
    use SoftDeletes;

    protected $table = 'articles';

    protected $dates = ['deleted_at', 'published_at'];

    protected $casts = [
        'published' => 'boolean'
    ];

    public function scopePublished($query) {
        return $query->where([
            'published' => true
        ]);
    }

    public static function loadAll() {
        return static::latest()->paginate();
    }

    public static function loadPublished() {
        return static::latest()->published()->paginate();
    }
}
