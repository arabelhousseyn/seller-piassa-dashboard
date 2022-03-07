<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{User,UserVehicle};
class VehicleController extends Controller
{

    public function __construct()
    {
        $this->middleware('check_chassis')->except('index','create','show','edit','destory','vehiclesByUser');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store(Request $request)
    {
        //
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
        $rules = [
            'sign_id' => 'exists:signs,id',
            'year' => 'date_format:Y'
        ];
        $validate = $request->validate($rules);
        UserVehicle::whereId($id)->update($validate);
        return response('',204);
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
            $user_vehicle = UserVehicle::withTrashed()->findOrFail($id);
            if(!$user_vehicle->trashed())
            {
                $user_vehicle->delete();
                return response('',204);
            }
            $data = [
                'data' => [
                    'message' => __('messages.vehicle_delete_error')
                ]
            ];
            return response($data,422);
        }catch (\Exception $e)
        {
            $data = [
                'data' => [
                    'message' => __('messages.vehicle_not_found')
                ]
            ];
            return response($data,422);
        }
    }

    public function vehiclesByUser($user_id)
    {
        $user = User::withTrashed()->with('vehicle.sign')->find($user_id);
        return response(['data' => $user->vehicle],200);
    }
}
