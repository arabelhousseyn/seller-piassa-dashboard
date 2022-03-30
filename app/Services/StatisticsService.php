<?php

namespace App\Services;

use App\Models\UserRequest;
use Carbon\Carbon;

class StatisticsService{

    private int $days = 0;

    public function setDays($days)
    {
        $this->days = $days;
        return $this;
    }

    public function exportData()
    {
        $data = array();
        $user_requests = UserRequest::with('suggestions')
            ->whereDate('created_at', '>=', Carbon::now()->subDays($this->days)->setTime(0, 0, 0)->toDateTimeString())->get();
        $found = false;
        foreach ($user_requests as $user_request) {
            foreach ($user_request->suggestions as $suggestion) {
                if($suggestion->suggest_him_at !== null)
                {
                    $found = true;
                    break;
                }
            }

            if(!$found)
            {
                $data[] = UserRequest::with('vehicle','informations','type')->find($user_request->id);
            }
        }
        return $data;
    }

}
