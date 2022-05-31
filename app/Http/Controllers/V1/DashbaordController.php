<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\{Admin, AppVersion, User, Seller, Shipper, CompanyCommission, UserProfile};
use Akaunting\Money\Money;
use App\Services\{IncomeService,UsersStatsService};
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
            'count_notification' => count(Seller::find(Auth::id())->notifications),
            'notifications' => Seller::find(Auth::id())->notifications,
            'app_version' => AppVersion::where('app_type','seller_dashboard')->first()

        ];

        return response($data,200);
    }
}
