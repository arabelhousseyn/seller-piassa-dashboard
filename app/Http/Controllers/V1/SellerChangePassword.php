<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\SellerChangePasswordRequest;
use App\Models\Seller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class SellerChangePassword extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(SellerChangePasswordRequest $request)
    {
        if($request->validated())
        {
            Seller::whereId(Auth::id())->update([
                'password' => Hash::make($request->password_confirmation)
            ]);
            return response()->noContent();
        }
    }
}
