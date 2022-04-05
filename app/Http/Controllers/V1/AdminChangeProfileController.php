<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminChangeProfileRequest;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminChangeProfileController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(AdminChangeProfileRequest $request)
    {
        if($request->validated())
        {
            $admin = Admin::find(Auth::id());
            if($admin->phone == $request->phone)
            {
                Admin::whereId(Auth::id())->update(['fullName' => $request->fullName]);
                return response()->noContent();
            }

            $rules = [
                'phone' => 'unique:admins,phone'
            ];
            $validated = $request->validate($rules);
            Admin::whereId(Auth::id())->update(array_merge($validated,$request->only('fullName')));
            return response()->noContent();
        }
    }
}
