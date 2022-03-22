<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{UserOrder};
class UserOrderController extends Controller
{
    public function getAllOrders()
    {
        $user_orders = UserOrder::with('items.item','events','user','invoice')->withTrashed()->latest('created_at')->get();
        return response(['data' => $user_orders],200);
    }
}
