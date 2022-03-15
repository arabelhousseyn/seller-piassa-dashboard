<?php

namespace App\Services;

use App\Models\Shipper;
use Spatie\Permission\Models\Role;

class UpdateShipperService{

    public static function update($request,$id)
    {
        $shipper = Shipper::find($id);

        if($shipper->phone == $request->phone)
        {
            $rules = [
                'email' => 'email:rfc,dns,filter',
            ];
            $validated0 = $request->validate($rules);
            Shipper::whereId($id)->update($validated0);
            $shipper->profile()->update($request->except('email','phone'));
            return response()->noContent();
        }

        $rules = [
            'phone' => 'digits:10|unique:users,phone'
        ];
        $validated = $request->validate($rules);
        Shipper::whereId($id)->update($validated);
        $shipper->profile()->update($request->except('email','phone'));
        return response()->noContent();
    }

}
