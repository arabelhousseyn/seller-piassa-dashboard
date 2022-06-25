<?php

namespace App\Http\Controllers\V1;

use App\Events\NewSuggestionEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSellerSuggestionRequest;
use App\Models\Seller;
use App\Models\SellerRequest;
use App\Traits\CustomPushNotificationTrait;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class SellerController extends Controller
{
    use CustomPushNotificationTrait;
    public function index()
    {
        $seller = Seller::with('requests.request.type','requests.request.informations','requests.request.suggestions.suggestion',
        'requests.request.images','requests.request.vehicle','requests.request.vehicle.sign','requests.request.images')->with(['requests' => function($query){
            return $query->latest('created_at');
        }])->find(Auth::id());
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
        $marks = explode(',',$request->marks);
        $prices = explode(',',$request->prices);
        $available_at = explode(',',$request->available_at);

        if(count($marks) == count($prices) && count($marks) == count($available_at) &&
            count($prices) == count($available_at))
        {
            $seller_request = SellerRequest::with('request.vehicle')->find($request->seller_request_id);

            SellerRequest::whereId($request->seller_request_id)->update([
                'suggest_him_at' => Carbon::now()
            ]);

            for ($i=0;$i<count($marks);$i++)
            {
                $seller_request->suggestion()->create([
                    'mark' => $marks[$i],
                    'price' => $prices[$i],
                    'available_at' => $available_at[$i],
                ]);
            }
            $data = SellerRequest::with('suggestion','request.informations')->find($request->seller_request_id);
            event(new NewSuggestionEvent($data,$seller_request->request->vehicle->user_id));
            $this->pushNotification('Vous avez une nouvelle suggestion','nouvelle suggestion',[$seller_request->request->vehicle->user_id],'clients');
//                event(new NewRequestEvent($data));
            return response(['success' => true],201);

        }else{
            $message = [
                'message' => [
                    'errors' => [
                        'Erreur veuillez réessayer.'
                    ]
                ]
            ];
            return response($message,403);
        }
    }
}
