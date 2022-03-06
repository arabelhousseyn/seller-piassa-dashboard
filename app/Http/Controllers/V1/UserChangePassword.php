<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserChangePasswordRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserChangePassword extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(UserChangePasswordRequest $request,$id)
    {
        if($request->validated())
        {
            User::whereId($id)->update([
                'password' => Hash::make($request->password_confirmation)
            ]);
            return response('',204);
        }
    }
}
