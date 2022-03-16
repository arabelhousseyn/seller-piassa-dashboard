<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Akaunting\Money\Money;
class ShipperUserOrderCommission extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'shipper_user_order_id',
        'start_coordination',
        'end_coordination',
        'amount'
    ];

    protected $hidden = [
        'created_at',
        'deleted_at'
    ];

    protected $casts = [
        'updated_at' => 'date:Y-m-d H:i:s'
    ];


    public function userOrder()
    {
        return $this->belongsTo(ShipperUserOrder::class,'shipper_user_order_id')->withDefault();
    }


    public function getAmountAttribute($value)
    {
        return Money::DZD($value)->getAmount() . ' DZD';
    }


}
