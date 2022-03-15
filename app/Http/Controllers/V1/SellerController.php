<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSellerJobRequest;
use App\Http\Requests\StoreSellerPhoneRequest;
use App\Http\Requests\StoreSellerRequest;
use App\Http\Requests\UpdateSellerRequest;
use App\Services\UpdateSellerService;
use Illuminate\Support\Facades\Hash;
use App\Models\{Seller, SellerJob, SellerPhone};
use Illuminate\Http\Request;

class SellerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sellers = Seller::withTrashed()->with('profile.province','jobs.type','jobs.sign','phones')->latest('created_at')->get();
        return response(['data' => $sellers],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSellerRequest $request)
    {
        if($request->validated())
        {
            $hash_password = Hash::make($request->password_confirmation);
            $password = ['password' => $hash_password];
            $seller = Seller::create(array_merge($password,$request->only('phone','email')));
            $seller->profile()->create($request->except('phone','email'));
            return response('',204);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return UpdateSellerService::update($request,$id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $user = Seller::withTrashed()->findOrFail($id);
            if(!$user->trashed())
            {
                $user->delete();
                return response('',204);
            }
            $data = [
                'data' => [
                    'message' => __('messages.user_delete_error')
                ]
            ];
            return response($data,422);
        }catch (\Exception $e)
        {
            $data = [
                'data' => [
                    'message' => __('messages.user_not_found')
                ]
            ];
            return response($data,422);
        }
    }

    public function restore($id)
    {
        try {
            $user = Seller::withTrashed()->findOrFail($id);
            if($user->trashed())
            {
                $user->restore();
                return response('',204);
            }
            $data = [
                'data' => [
                    'message' => __('messages.user_not_deleted')
                ]
            ];
            return response($data,422);
        }catch (\Exception $e)
        {
            $data = [
                'data' => [
                    'message' => __('messages.user_not_found')
                ]
            ];
            return response($data,422);
        }
    }

    public function sellerPhones($seller_id)
    {
        try {
            $seller = Seller::withTrashed()->with('phones')->findOrFail($seller_id);
            return response(['data' => $seller->phones],200);
        }catch (\Exception $exception)
        {
            return response(['message' => 'not found'],404);
        }
    }

    public function storeSellerPhones(StoreSellerPhoneRequest $request,$id)
    {
        if($request->validated())
        {
            try {
                $seller = Seller::findOrFail($id);
                $seller->phones()->create($request->only('name','phone'));
                return response('',204);
            }catch (\Exception $e)
            {
                return response(['message' => 'not found'],404);
            }
        }
    }

    public function destroySellerPhone($seller_phone_id)
    {
        try {
            $seller_phone = SellerPhone::withTrashed()->findOrFail($seller_phone_id);
            if(!$seller_phone->trashed())
            {
                $seller_phone->delete();
                return response('',204);
            }
            $data = [
                'data' => [
                    'message' => __('messages.user_not_deleted')
                ]
            ];
            return response($data,422);
        }catch (\Exception $e)
        {
            $data = [
                'data' => [
                    'message' => __('messages.user_not_found')
                ]
            ];
            return response($data,422);
        }
    }

    public function updateSellerPhone(Request $request,$seller_phone_id)
    {

            $seller_phone = SellerPhone::findOrFail($seller_phone_id);
            if($seller_phone->phone == $request->phone)
            {
                SellerPhone::whereId($seller_phone_id)->update($request->only('name'));
                return response('',204);
            }

            $rules = [
                'name' => 'required',
                'phone' => 'digits:10|unique:seller_phones,phone'
            ];

            $validated = $request->validate($rules);

            SellerPhone::whereId($seller_phone_id)->update($validated);

            return response('',204);
    }

    public function sellerJobs($seller_id)
    {
        try {
            $seller = Seller::withTrashed()->with('jobs.type','jobs.sign')->findOrFail($seller_id);
            return response(['data' => $seller->jobs],200);
        }catch (\Exception $exception)
        {
            return response(['message' => 'not found'],404);
        }
    }

    public function storeSellerJob(StoreSellerJobRequest $request)
    {
        if($request->validated())
        {
            $seller_job = SellerJob::create($request->only('job','sign_id','type_id','seller_id'));
            return response()->noContent();
        }
    }
}
