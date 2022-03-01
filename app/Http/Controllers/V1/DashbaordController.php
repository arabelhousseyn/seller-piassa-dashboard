<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Models\{User,Seller,Shipper,CompanyCommission};
class DashbaordController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {

        $data = [
            'users' => [
                'count' => User::count(),
                'icon' => 'mdi-account',
                'title' => __('messages.users')
            ],
            'sellers' => [
                'count' => Seller::count(),
                'icon' => 'mdi-account',
                'title' => __('messages.sellers')
            ],
            'shippers' => [
                'count' => Shipper::count(),
                'icon' => 'mdi-account',
                'title' => __('messages.shippers')
            ],
            'company' => [
                'count' => CompanyCommission::sum('amount'),
                'icon' => 'mdi-currency-usd',
                'title' => __('messages.company')
            ],

        ];

        return response($data,200);
    }
}
