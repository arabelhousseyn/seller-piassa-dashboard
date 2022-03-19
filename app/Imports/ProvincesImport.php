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
        $rules = [
            'code' => 'required|digits:02|unique:provinces,code'
        ];

        $data = [
            'code' => $row[0]
        ];

        $validator = Validator::make($data,$rules);

        if($validator->fails())
        {
            return response(['errors' => ['code' => 'Code non valide.']],422);
        }

        if($validator->validated())
        {
            return new province([
                'country_id' => 1,
                'code' => $row[0],
                'name' => $row[1],
            ]);
        }
    }
}
