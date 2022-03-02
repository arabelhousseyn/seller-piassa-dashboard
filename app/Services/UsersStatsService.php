<?php

namespace App\Services;

use App\Models\User;
use Carbon\Carbon;

class UsersStatsService{
    public int $year;

    public function setYear(int $year)
    {
        $this->year = $year;
        return $this;
    }

    public function Stats()
    {
        $users = User::all();
        $months = ['1' => 0,'2' => 0,'3' => 0,'4' => 0,'5' => 0,'6' => 0
            ,'7' => 0,'8' => 0,'9' => 0,'10' => 0,'11' => 0,'11' => 0];

        foreach ($users as $user) {
            $date = Carbon::parse($user->created_at);
            if($this->year == $date->format('Y'))
            {
                foreach ($months as $month => $value) {

                    if($month == $date->format('m'))
                    {
                        $months[$month] += 1;
                    }
                }
            }
        }
        return array_values($months);
    }
}
