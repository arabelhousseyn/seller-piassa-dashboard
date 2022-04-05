<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminChangePasswordRequest;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminChangePasswordController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(AdminChangePasswordRequest $request)
    {
        if($request->validated())
        {
            $admin = Admin::find(Auth::id());

            if(Hash::check($request->old_password,$admin->password))
            {
                $hashed_password = Hash::make($request->password);
                $data = [
                    'password' => $hashed_password
                ];

                Admin::whereId(Auth::id())->update($data);
                return response()->noContent();
            }

            $error = [
                'errors' => [
                    'password' => array('Ancien mote de passe incorrect.')
                ]
            ];
            return response($error,422);
        }
    }
}
