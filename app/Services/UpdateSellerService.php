<?php

namespace App\Services;

use App\Models\Seller;

class UpdateSellerService{

    public static function update($request,$id)
    {
        $seller = Seller::find($id);

        if($seller->phone == $request->phone)
        {
            $rules = [
                'email' => 'email:rfc,dns,filter',
            ];
            $validated0 = $request->validate($rules);
            Seller::whereId($id)->update($validated0);
            $seller->profile()->update($request->except('email','phone'));
            return response('',204);
        }

        $rules = [
            'phone' => 'digits:10|unique:users,phone'
        ];
        $validated = $request->validate($rules);
        Seller::whereId($id)->update($validated);
        $seller->profile()->update($request->except('email','phone'));
        return response('',204);
    }
}

