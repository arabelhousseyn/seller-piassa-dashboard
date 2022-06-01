<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserVehicle extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'sign_id',
        'model',
        'year',
        'motorization',
        'chassis_number'
    ];

    protected $casts = [
        'created_at' => 'date:Y-m-d H:i:s'
    ];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id')->withDefault();
    }

    public function sign()
    {
        return $this->belongsTo(Sign::class,'sign_id')->withDefault();
    }

    public function control()
    {
        return $this->hasOne(UserVehicleControl::class);
    }
}
