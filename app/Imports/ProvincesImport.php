<?php

namespace App\Imports;

use App\Models\province;
use Illuminate\Support\Facades\Validator;
use Maatwebsite\Excel\Concerns\ToModel;

class ProvincesImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
            return new province([
                'country_id' => 1,
                'code' => $row[0],
                'name' => $row[1],
            ]);
    }
}
