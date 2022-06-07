<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\V1\{LoginController,LogoutController, DashbaordController,SellerChangePassword
,NotificationController,StatisticsController, SellerController};


Route::middleware(['throttle:login','app_version'])->group(function (){
    Route::post('login',LoginController::class);
});


Route::middleware(['auth:sanctum','app_version','check_seller'])->group(function (){
    // logout

    Route::get('logout',LogoutController::class);
    ///

    Route::prefix('company')->group(function (){
        Route::get('data',DashbaordController::class);
    });


    // sellers

    Route::prefix('seller')->group(function (){
        Route::put('change-password',SellerChangePassword::class);
    });

    Route::controller(SellerController::class)->prefix('sellers')->group(function (){
        Route::get('requests','index');
        Route::post('sotre-seller-suggestion','storeSellerSuggestion');
        Route::delete('request/destroy/{seller_request_id}','destroySellerRequest');
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
