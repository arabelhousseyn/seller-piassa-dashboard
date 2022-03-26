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
        $user_orders = UserOrder::with('items.item','events','user.profile','invoice','shipperUserOrder.shipper')->withTrashed()->latest('created_at')->get();
        return response(['data' => $user_orders],200);
    }

    public function getOrderItemsByUser($user_order_id)
    {
        try {
            $user_orders = UserOrder::with('items.item')->withTrashed()->findOrFail($user_order_id);
            return response(['data' => $user_orders->items],200);
        }catch (Exception $exception)
        {
            return response(['message' => 'not found']);
        }
    }


    public function getOrderEventsByUser($user_order_id)
    {
        try {
            $user_orders = UserOrder::with('events')->withTrashed()->findOrFail($user_order_id);
            return response(['data' => $user_orders->events],200);
        }catch (\Exception $exception)
        {
            return response(['message' => 'not found']);
        }
    }

    public function destroy($user_order_id)
    {
        try {
            $user_order = UserOrder::findOrFail($user_order_id);
            if(!$user_order->trashed())
            {
                $user_order->delete();
                return response()->noContent();
            }
        }catch (\Exception $exception)
        {
            return response(['message' => 'not found'],404);
        }

    }
}
