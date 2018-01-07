<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Article extends Model
{
    // use soft delete instead of permanent delete
    use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'articles';

    protected $fillable = ['title', 'slug', 'description', 'content', 'published', 'published_at'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at', 'published_at'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'published' => 'boolean'
    ];

    /**
     * Add query scope to get only published articles
     *
     * @param $query
     * @return mixed
     */
    public function scopePublished($query)
    {
        return $query->where([
            'published' => true
        ]);
    }

    /**
     * Load only articles related with the user id
     *
     * @param $query
     * @param $user_id
     * @return mixed
     */
    public function scopeMine($query, $user_id)
    {
        return $query->where('user_id', $user_id);
    }

    /**
     * Relationship between articles and user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Load all for admin and paginate
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public static function loadAll()
    {
        return static::latest()
            ->paginate();
    }

    /**
     * Load all for logged in user and paginate
     *
     * @param $user_id
     * @return mixed
     */
    public static function loadAllMine($user_id)
    {
        return static::latest()
            ->mine($user_id)
            ->paginate();
    }

    /**
     * load all published with pagination
     *
     * @return mixed
     */
    public static function loadAllPublished()
    {
        return static::with(['user' => function ($query) {
            $query->select('id', 'name');
        }])
            ->latest()
            ->published()
            ->paginate();
    }

    /**
     * load one published
     *
     * @param $id
     * @return mixed
     */
    public static function loadPublished($slug)
    {
        return static::with([
            'user' => function ($query) {
                $query->select('id', 'name');
            }
        ])
            ->published()
            ->where('slug', $slug)
            ->firstOrFail();
    }
}
