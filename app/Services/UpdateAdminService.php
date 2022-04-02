<?php

namespace App\Services;

use App\Models\Admin;

class UpdateAdminService{


    public static function update($request,$id)
    {
        try {

            $admin = Admin::findOrFail($id);
            if($admin->phone == $request->phone)
            {
                Admin::whereId($id)->update($request->expect('phone'));
                return response('',204);
            }
            Admin::whereId($id)->update($request->all());
            return response('',204);

        }catch (\Exception $exception)
        {
            return response(['message' => 'not found'],404);
        }
    }

}
