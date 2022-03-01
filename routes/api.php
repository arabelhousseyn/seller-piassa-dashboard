<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\V1\{LoginController,LogoutController,UserController,SellerController,ShipperController};


Route::middleware(['throttle:login'])->group(function (){
    Route::post('login',LoginController::class);
});


Route::middleware('auth:sanctum')->group(function (){


    // admin handle
    Route::prefix('admin')->group(function (){
        Route::get('logout',LogoutController::class);
    });

    //resources
    Route::apiResources([
        'user' => UserController::class,
        'seller' => SellerController::class,
        'shipper' => ShipperController::class
    ]);

});
