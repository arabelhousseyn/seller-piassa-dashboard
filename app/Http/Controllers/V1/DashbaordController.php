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
            'requests' => [
                'count' =>Seller::withCount('requests')->find(Auth::id())->requests_count,
                'icon' => 'mdi-chart-box',
                'title' => __('messages.requests')
            ],
            'income_year' => [
                'count' => (new IncomeService())->setType('Y',Carbon::now()->year)->income(),
                'icon' => 'mdi-currency-usd',
                'title' => __('messages.income_year')
            ],
            'income_month' => [
                'count' => (new IncomeService())->setType('M',Carbon::now()->month)->income(),
                'icon' => 'mdi-currency-usd',
                'title' => __('messages.income_month')
            ],
            'icomes_by_month' =>(new IncomeService())->setYear(Carbon::now()->year)->CalculateIncomes(),
            'count_notification' => count(Seller::find(Auth::id())->notifications),
            'notifications' => Seller::find(Auth::id())->notifications,
            'app_version' => AppVersion::where('app_type','seller_dashboard')->first()

        ];

        return response($data,200);
    }
}
