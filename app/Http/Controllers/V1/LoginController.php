<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(LoginRequest $request)
    {
        if($request->validated())
        {
            if(Auth::attempt($request->only('phone','password')))
            {
                $user = Auth::user();
                $token = $user->createToken('piassa-dashboard')->plainTextToken;
                $user['token'] = $token;
                return response($user,200);
            }
        }
    }
}
