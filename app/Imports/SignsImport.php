<?php

namespace App\Imports;

use App\Models\Sign;
use Maatwebsite\Excel\Concerns\ToModel;

class SignsImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Sign([
            'name' => $row[0],
            'logo' => $row[1],
            'prefix' => $row[2],
        ]);
    }
}
