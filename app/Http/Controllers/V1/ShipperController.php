<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreShipperRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\{Shipper};
class ShipperController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $shippers = Shipper::withTrashed()->with('profile','orderRequests.commission','orderRequests.order')->latest('created_at')->get();
        return response(['data' => $shippers],200);
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
    public function store(StoreShipperRequest $request)
    {
        if($request->validated())
        {
            $hash_password = Hash::make($request->password);
            $password = ['password' => $hash_password];
            $shipper = Shipper::create(array_merge($request->only('phone','email'),$password));
            $shipper->profile()->create($request->except('phone','email','password'));
            return response()->noContent();
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($shipper_id)
    {
        try {
            $shipper = Shipper::withTrashed()->findOrFail($shipper_id);
            if(!$shipper->trashed())
            {
                $shipper->delete();
                return response()->noContent();
            }
        }catch (\Exception $exception)
        {
            return response(['message' => 'not found'],404);
        }
    }

    public function restore($shipper_id)
    {
        try {
            $shipper = Shipper::withTrashed()->findOrFail($shipper_id);
            if($shipper->trashed())
            {
                $shipper->restore();
                return response()->noContent();
            }
        }catch (\Exception $exception)
        {
            return response(['message' => 'not found'],404);
        }
    }
}
