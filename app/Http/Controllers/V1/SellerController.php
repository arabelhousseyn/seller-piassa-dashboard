<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Models\Seller;
use Illuminate\Support\Facades\Auth;

class SellerController extends Controller
{
    public function index()
    {
        $seller = Seller::with('requests.request.type','requests.request.informations','requests.request.suggestions.suggestion',
        'requests.request.images','requests.request.vehicle','requests.request.vehicle.user.profile')->find(Auth::id());
        return response(['data' => $seller->requests],200);
    }
}
