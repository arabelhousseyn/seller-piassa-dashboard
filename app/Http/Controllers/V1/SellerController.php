<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSellerSuggestionRequest;
use App\Models\Seller;
use App\Models\SellerRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;

class SellerController extends Controller
{
    public function index()
    {
        $seller = Seller::with('requests.request.type','requests.request.informations','requests.request.suggestions.suggestion',
        'requests.request.images','requests.request.vehicle','requests.request.vehicle.user.profile')->find(Auth::id());
        return response(['data' => $seller->requests],200);
    }

    public function destroySellerRequest($seller_request_id)
    {
        try {
            $sellerRequest = SellerRequest::findOrFail($seller_request_id);
            if(!$sellerRequest->trashed())
            {
                $sellerRequest->forceDelete();
                return response()->noContent();
            }
        }catch (ModelNotFoundException $exception)
        {
            return throw new ModelNotFoundException('request not found');
        }
    }

    public function storeSellerSuggestion(StoreSellerSuggestionRequest $request)
    {
        if($request->validated())
        {
            $sellerRequest = SellerRequest::find($request->seller_request_id);
            $sellerRequest->suggestion()->create($request->except('seller_request_id'));
            return response(['message' => 'created!'],201);
        }
    }
}
