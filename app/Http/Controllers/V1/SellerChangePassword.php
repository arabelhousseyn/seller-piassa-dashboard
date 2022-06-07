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
            $seller = Seller::find(Auth::id());
            if(Hash::check($request->old_password,$seller->password))
            {
                $seller->update([
                    'password' => Hash::make($request->password_confirmation)
                ]);
                return response()->noContent();
            }else{
                $errors = [
                    'errors' => [
                        'password' => [
                            'Ancien mot de passe incorrect.'
                        ]
                    ]
                ];
                return response($errors,422);
            }
        }
    }
}
