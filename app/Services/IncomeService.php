<?php

namespace App\Services;
use App\Models\CompanyCommission;
use Carbon\Carbon;
class IncomeService{

    public int $year;

    public function setYear(int $year)
    {
        $this->year = $year;
        return $this;
    }

    public function CalculateIncome()
    {
        $company_comissions = CompanyCommission::all();
        $months = ['1' => 0,'2' => 0,'3' => 0,'4' => 0,'5' => 0,'6' => 0
            ,'7' => 0,'8' => 0,'9' => 0,'10' => 0,'11' => 0,'11' => 0];

        foreach ($company_comissions as $company_comission) {
            $date = Carbon::parse($company_comission->created_at);
            if($this->year == $date->format('Y'))
            {
                foreach ($months as $month => $value) {

                    if($month == $date->format('m'))
                    {
                         $months[$month] += $company_comission->amount;
                    }
                }
            }
        }
        return array_values($months);
    }

}
