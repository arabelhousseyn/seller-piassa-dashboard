<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;

class UpdateUserService{

    public static function update($request,$id)
    {
        $user = User::with('roles')->find($id);
        if($user->roles[0]->name !== $request->role)
        {
            $role = Role::whereName($request->role)->first();
            DB::table('model_has_roles')->where('model_id',$id)->update([
                'role_id' => $role->id,
            ]);
        }

        if($user->phone == $request->phone)
        {
            $rules = [
                'email' => 'email:rfc,dns,filter',
            ];
            $validated0 = $request->validate($rules);
            User::whereId($id)->update($validated0);
            $user->profile()->update($request->except('email','phone','role'));
            return response('',204);
        }

        $rules = [
            'phone' => 'digits:10|unique:users,phone'
        ];
        $validated = $request->validate($rules);
        User::whereId($id)->update($validated);
        $user->profile()->update($request->except('email','phone','role'));
        return response('',204);
    }

}
