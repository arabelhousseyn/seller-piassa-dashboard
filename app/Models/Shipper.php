<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Shipper extends Model
{
    use  HasFactory, Notifiable, SoftDeletes;
    const KM = 16;
    const S = 0;
    const E = 500;
    const PRICE_KM = 30;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'phone',
        'email',
        'password',
        'phone_verified_at'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'phone_verified_at' => 'datetime',
        'created_at' => 'date:Y-m-d H:i:s'
    ];

    public function profile()
    {
        return $this->hasOne(ShipperProfile::class)->withDefault();
    }

    public function orderRequests()
    {
        return $this->hasMany(ShipperUserOrder::class);
    }


}

