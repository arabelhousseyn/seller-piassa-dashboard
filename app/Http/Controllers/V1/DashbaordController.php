<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\{Admin, User, Seller, Shipper, CompanyCommission, UserProfile};
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

        $incomes = (new IncomeService())->setYear(Carbon::now()->format('Y'))->CalculateIncome();
        $users_stats = (new UsersStatsService())->setYear(Carbon::now()->format('Y'))->Stats();


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
                'count' => Money::DZD(CompanyCommission::sum('amount'))->getAmount() . ' DZD',
                'icon' => 'mdi-currency-usd',
                'title' => __('messages.company')
            ],
            'icomes_by_month' => $incomes,
            'users_by_month' => $users_stats,
            'count_notification' => count(Admin::find(Auth::id())->notifications),
            'count_male' => UserProfile::gender('M')->count(),
            'count_female' => UserProfile::gender('W')->count(),
            'notifications' => Admin::find(Auth::id())->notifications

        ];

        return response($data,200);
    }
}
