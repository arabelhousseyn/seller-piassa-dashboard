<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminChangePasswordRequest;
use App\Http\Requests\StoreAdminRequest;
use App\Models\Admin;
use App\Services\UpdateAdminService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $admins = Admin::withTrashed()->where('id','<>',Auth::id())->latest('created_at')->get();
        return response(['data' => $admins],200);
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
    public function store(StoreAdminRequest $request)
    {
        if($request->validated())
        {
            $password_hashed = Hash::make($request->password);
            $password = [
                'password' => $password_hashed
            ];

            Admin::create(array_merge($password,$request->except('password','password_confirmation')));
            return response(['data' => 'created !'],201);
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
        $admin = Admin::findOrFail($id);
        if($admin->phone == $request->phone)
        {
            Admin::whereId($id)->update($request->except('phone'));
            return response('',204);
        }
        Admin::whereId($id)->update($request->all());
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
            $admin = Admin::withTrashed()->findOrFail($id);
            if(!$admin->trashed())
            {
                $admin->delete();
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
            $admin = Admin::withTrashed()->findOrFail($id);
            if($admin->trashed())
            {
                $admin->restore();
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

    public function changePassword(Request $request, $id)
    {
        $rules = [
            'password' => ['required','confirmed',Password::default()]
        ];

        $validated = $request->validate($rules);
        $data = [
            'password' => Hash::make($validated['password'])
        ];
        Admin::whereId($id)->update($data);
        return response()->noContent();
    }
}
