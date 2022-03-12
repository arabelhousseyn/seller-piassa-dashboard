<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\SellerChangePasswordRequest;
use App\Models\Seller;
use Illuminate\Support\Facades\Hash;

class SellerChangePassword extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(SellerChangePasswordRequest $request,$id)
    {
        if($request->validated())
        {
            Seller::whereId($id)->update([
                'password' => Hash::make($request->password_confirmation)
            ]);
            return response('',204);
        }
    }
}
