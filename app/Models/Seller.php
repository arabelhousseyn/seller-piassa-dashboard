<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
class Seller extends Authenticatable
{
    use  HasFactory, Notifiable, SoftDeletes;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'phone',
        'email',
        'password',
        'phone_verified_at',
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

    protected $appends = ['has_location'];

    public function profile()
    {
        return $this->hasOne(SellerProfile::class);
    }

    public function job()
    {
        return $this->hasMany(SellerJob::class);
    }

    public function signs()
    {
        return $this->hasManyThrough(SellerJobSign::class,SellerJob::class);
    }

    public function types()
    {
        return $this->hasManyThrough(SellerJobType::class,SellerJob::class);
    }

    public function requests()
    {
        return $this->hasMany(SellerRequest::class);
    }

    public function phones()
    {
        return $this->hasMany(SellerPhone::class);
    }

    public function getHasLocationAttribute()
    {
        if($this->profile->location === null)
        {
            return false;
        }else{
            return true;
        }
    }

}
