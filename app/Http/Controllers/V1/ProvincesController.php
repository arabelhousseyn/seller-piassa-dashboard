<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProvinceRequest;
use App\Imports\ProvincesImport;
use Illuminate\Http\Request;
use App\Models\Province;
use Maatwebsite\Excel\Facades\Excel;

class ProvincesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $provinces = Province::available()->get();
        return response($provinces,200);
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
    public function store(StoreProvinceRequest $request)
    {
        if($request->validated())
        {
            $country = [
                'country_id' => 1
            ];
            Province::create(array_merge($country,$request->validated()));
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
        Province::whereId($id)->update($request->only('name','code'));
        return response()->noContent();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function all()
    {
        $provinces = Province::latest('created_at')->get();
        return response(['data' => $provinces],200);
    }

    public function storeProvincesExcel(Request $request)
    {

        $rules = [
            'file' => 'required|mimes:csv,xlsx'
        ];

        $validated = $request->validate($rules);

        Excel::import(new ProvincesImport,$request->file);

        return response()->noContent();
    }

    public function activeProvince($province_id)
    {
        Province::whereId($province_id)->update([
            'is_available' => true
        ]);
        return response()->noContent();
    }

    public function deactivateProvince($province_id)
    {
        Province::whereId($province_id)->update([
            'is_available' => false
        ]);
        return response()->noContent();
    }
}
