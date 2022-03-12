<?php

namespace App\Services;

use App\Models\User;

class UpdateSellerService{

    public static function update($request,$id)
    {
        $user = User::with('roles')->find($id);

        if($user->phone == $request->phone)
        {
            $rules = [
                'email' => 'email:rfc,dns,filter',
            ];
            $validated0 = $request->validate($rules);
            User::whereId($id)->update($validated0);
            $user->profile()->update($request->except('email','phone'));
            return response('',204);
        }

        $rules = [
            'phone' => 'digits:10|unique:users,phone'
        ];
        $validated = $request->validate($rules);
        User::whereId($id)->update($validated);
        $user->profile()->update($request->except('email','phone'));
        return response('',204);
    }
}

