<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Type extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'logo',
        'percent'
    ];

    protected $casts = [
        'created_at' => "date:Y-m-d H:i:s",
        'updated_at' => "date:Y-m-d H:i:s",
    ];


    public function getPercentAttribute()
    {
        return $this->attributes['percent'] . ' %';
    }
}
