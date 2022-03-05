<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\V1\{LoginController,LogoutController,UserController,SellerController,ShipperController
,DashbaordController,ProvincesController};


Route::middleware(['throttle:login'])->group(function (){
    Route::post('login',LoginController::class);
});


Route::middleware('auth:sanctum')->group(function (){


    // admin handle
    Route::prefix('admin')->group(function (){
        Route::get('logout',LogoutController::class);
    });

    Route::prefix('company')->group(function (){
        Route::get('data',DashbaordController::class);
    });

    //user
    Route::controller(UserController::class)->prefix('users')->group(function (){
            Route::put('restore/{id}','restore')->whereNumber('id');
    });

    //resources
    Route::apiResources([
        'users' => UserController::class,
        'sellers' => SellerController::class,
        'shippers' => ShipperController::class,
        'provinces' => ProvincesController::class
    ]);

});
