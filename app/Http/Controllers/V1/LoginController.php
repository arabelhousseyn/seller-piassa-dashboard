<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\Seller;
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
                $data = Auth::user();
                $token = $data->createToken('piassa-dashboard')->plainTextToken;
                $seller = Seller::with('profile')->find(Auth::id());
                $seller['token'] = $token;
                return response($seller,200);
            }else{
                return response(['message' => __('messages.failed')],401);
            }
        }
    }
}
