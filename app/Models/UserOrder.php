<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Akaunting\Money\Money;
class UserOrder extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'ref',
        'user_id',
        'type_delivery',
        'amount',
        'location',
        'promo_code',
        'confirmed_by_administrator_at',
        'confirmed_at'
    ];

    protected $casts = [
        'amount' => 'double',
        'created_at' => 'date:Y-m-d H:i:s',
        'updated_at' => 'date:Y-m-d H:i:s'
    ];

    public function items()
    {
        return $this->hasMany(UserOrderItem::class);
    }

    public function events()
    {
        return $this->hasMany(UserOrderEvent::class);
    }

    public function shipperUserOrder()
    {
        return $this->hasOne(ShipperUserOrder::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class,'user_id')->withDefault();
    }

    public function invoice()
    {
      return $this->hasOne(UserOrderInvoice::class);
    }

    public function getTypeDeliveryAttribute()
    {
        if($this->attributes['type_delivery'] == 'S')
        {
            return 'STANDARD';
        }elseif($this->attributes['type_delivery'] == 'E')
        {
            return 'EXPRESS';
        }
    }

    public function getAmountAttribute()
    {
        return $this->attributes['amount'] . ' DZD';
    }
}
