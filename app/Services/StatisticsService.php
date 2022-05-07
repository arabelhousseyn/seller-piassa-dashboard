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
        $user_requests = UserRequest::with('suggestions')->get();

        foreach ($user_requests as $user_request) {
            $found = false;
            foreach ($user_request->suggestions as $suggestion) {
                if($suggestion->suggest_him_at !== null)
                {
                    $found = true;
                }
            }

            $request_created_at = Carbon::parse($user_request->created_at);
            $now = Carbon::now();
            $calculateDays = $request_created_at->diffInDays($now);

            if(!$found && $calculateDays >= $this->days)
            {
                $data[] = UserRequest::with('vehicle','informations','type')->find($user_request->id);
            }
        }
        return $data;
    }

}
