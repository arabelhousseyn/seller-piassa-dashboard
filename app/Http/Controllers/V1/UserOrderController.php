<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use mysql_xdevapi\Exception;
use App\Models\{UserOrder};
class UserOrderController extends Controller
{
    public function getAllOrders()
    {
        $user_orders = UserOrder::with('items.item','events','user.profile','invoice')->withTrashed()->latest('created_at')->get();
        return response(['data' => $user_orders],200);
    }

    public function getOrderItemsByUser($user_id)
    {
        try {
            $user_orders = UserOrder::with('items.item','events','user.profile','invoice')->withTrashed()->findOrFail($user_id);
            return response(['data' => $user_orders->items],200);
        }catch (Exception $exception)
        {
            return response(['message' => 'not found']);
        }
    }
}
