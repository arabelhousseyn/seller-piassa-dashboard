<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    use HasFactory;

    protected $fillable = [
        'path',
        'type',
        'size'
    ];

    public function getPathAttribute()
    {
        return env('APP_URL') . $this->attributes['path'];
    }

    public function getCreatedAtAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->locale('fr')->toFormattedDateString();
    }

    public function getUpdatedAtAttribute()
    {
        return Carbon::parse($this->attributes['updated_at'])->locale('fr')->toFormattedDateString();
    }


}
