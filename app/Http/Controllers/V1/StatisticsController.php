<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Services\StatisticsService;
use Carbon\Carbon;
use App\Models\{UserRequest};

class StatisticsController extends Controller
{
    public function requestExpired($slug)
    {
        $data = (new StatisticsService())->setDays($slug)->exportData();
        return response(['data' => $data],200);
    }
}
