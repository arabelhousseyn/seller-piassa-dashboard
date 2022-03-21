<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ChangeLogoSignRequest;
use App\Http\Requests\StoreSignRequest;
use App\Http\Requests\UpdateSignRequest;
use App\Imports\SignsImport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\{Sign};
class SignController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $signs = Sign::withTrashed()->latest('created_at')->get();
        return response(['data' => $signs],200);
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
    public function store(StoreSignRequest $request)
    {
        if($request->validated())
        {
            $image_name = uniqid() . '.' . $request->file('logo')->extension();
            $path = $request->file('logo')->storeAs('public/logoSigns',$image_name);
            $path = str_replace('public','storage',$path);
            $logo = [
                'logo' => $path
            ];
            Sign::create(array_merge($logo,$request->only('name','prefix')));
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
    public function update(UpdateSignRequest $request, $id)
    {
        if($request->validated())
        {
            Sign::whereId($id)->update($request->validated());
            return response()->noContent();
        }
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
            $sign = Sign::findOrFail($id);
            if(!$sign->trashed())
            {
                $sign->delete();
            }
            return response()->noContent();
        }catch (\Exception $exception)
        {
            return response(['message' => 'not found'],404);
        }
    }

    public function restore($id)
    {
        try {
            $sign = Sign::withTrashed()->findOrFail($id);
            if($sign->trashed())
            {
                $sign->restore();
            }
            return response()->noContent();
        }catch (\Exception $exception)
        {
            return response(['message' => 'not found'],404);
        }
    }

    public function signs()
    {
        $signs = Sign::withoutTrashed()->select(['id','name'])->get();
        return response(['data' => $signs],200);
    }

    public function changeLogoSign(ChangeLogoSignRequest $request)
    {
        if($request->validated())
        {
            $sign = Sign::find($request->sign_id);
            $image_name = str_replace('storage/logoSigns/','',$sign->logo);
            $request->file('logo')->storeAs('public/logoSigns/',$image_name);
            return response()->noContent();
        }
    }
}
