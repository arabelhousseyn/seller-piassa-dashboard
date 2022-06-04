<?php

namespace App\Services;
use App\Models\CompanyCommission;
use App\Models\Seller;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class IncomeService{

    public int $year;
    public string $type;
    public int $value;

    public function setYear(int $year)
    {
        $this->year = $year;
        return $this;
    }

    public function setType(string $type,int $value)
    {
        $this->type = $type;
        $this->value = $value;
        return $this;
    }

    public function income()
    {
        switch ($this->type)
        {
            case 'M' : return $this->calculateIncomeMonth($this->value); break;
            case 'Y' : return $this->calculateIncomeYear($this->value); break;
        }
    }

    public function CalculateIncomes()
    {

        $seller = Seller::with('requests.request.type','requests.request.informations','requests.request.suggestions.suggestion',
            'requests.request.images','requests.request.vehicle','requests.request.vehicle.user.profile')->find(Auth::id());
        $months = ['1' => 0,'2' => 0,'3' => 0,'4' => 0,'5' => 0,'6' => 0
            ,'7' => 0,'8' => 0,'9' => 0,'10' => 0,'11' => 0,'11' => 0];

        foreach ($seller->requests as $request) {

            foreach ($request->request->suggestions as $suggestion) {
                if($suggestion->suggestion->delivered_at !== null)
                {
                    $date = Carbon::parse($suggestion->suggest_him_at);
                    if($this->year == $date->format('Y'))
                    {
                        foreach ($months as $month => $value) {

                            if($month == $date->format('m'))
                            {
                                $months[$month] += $suggestion->suggestion->price;
                            }
                        }
                    }
                }
            }
        }
        return array_values($months);
        return 0;
    }

    private function calculateIncomeMonth(int $month)
    {
        $seller = Seller::with('requests.request.type','requests.request.informations','requests.request.suggestions.suggestion',
            'requests.request.images','requests.request.vehicle','requests.request.vehicle.user.profile')->find(Auth::id());
        $income = 0;
        foreach ($seller->requests as $request) {
            foreach ($request->request->suggestions as $suggestion) {
                if($suggestion->suggestion->delivered_at !== null)
                {
                    if(Carbon::parse($suggestion->suggest_him_at)->month == $month)
                    {
                        $income += $suggestion->suggestion->price;
                    }
                }
            }
        }

        return $income;
    }

    private function calculateIncomeYear(int $year)
    {
        $seller = Seller::with('requests.request.type','requests.request.informations','requests.request.suggestions.suggestion',
            'requests.request.images','requests.request.vehicle','requests.request.vehicle.user.profile')->find(Auth::id());
        $income = 0;
        foreach ($seller->requests as $request) {
            foreach ($request->request->suggestions as $suggestion) {
                if($suggestion->suggestion->delivered_at !== null)
                {
                    if(Carbon::parse($suggestion->suggest_him_at)->year == $year)
                    {
                        $income += $suggestion->suggestion->price;
                    }
                }
            }
        }

        return $income;
    }


}
