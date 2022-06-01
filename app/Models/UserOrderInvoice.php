<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserOrderInvoice extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_order_id',
        'path'
    ];

    protected $hidden = [
        'updated_at',
        'deleted_at'
    ];

    protected $appends = ['path'];

    protected function getPathAttribute()
    {
        return env('BACKEND_APP_URL').$this->attributes['path'];
    }
}
