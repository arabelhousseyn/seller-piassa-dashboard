<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserOrderEvent extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_order_id',
        'event'
    ];

    protected $casts = [
        'created_at' => 'date:Y-m-d H:i:s'
    ];

    public function getEventAttribute()
    {
        return ($this->attributes['event'] == 'R') ? 'Récupération' : 'Livraison';
    }
}
