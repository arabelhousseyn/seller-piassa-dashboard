<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\V1\{LoginController,LogoutController, DashbaordController,SellerChangePassword
,NotificationController,StatisticsController, SellerController};


Route::middleware(['throttle:login','app_version'])->group(function (){
    Route::post('login',LoginController::class);
});


Route::middleware(['auth:sanctum','app_version'])->group(function (){


    Route::prefix('company')->group(function (){
        Route::get('data',DashbaordController::class);
    });


    // sellers

    Route::prefix('sellers')->group(function (){
        Route::put('change-password/{id}',SellerChangePassword::class)->whereNumber('id');
    });

    Route::controller(SellerController::class)->prefix('sellers')->group(function (){
        Route::get('requests','index');
    });

    // notifications

    Route::controller(NotificationController::class)->prefix('notifications')->group(function (){
        Route::put('read','read');
    });

    // statistics

    Route::controller(StatisticsController::class)->prefix('statistics')->group(function (){
        Route::get('request-expired/{days}','requestExpired')->whereNumber('days');
    });

});
