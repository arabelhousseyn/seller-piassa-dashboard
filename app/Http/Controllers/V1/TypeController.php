<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTypeRequest;
use App\Http\Requests\UpdateTypeRequest;
use App\Imports\TypesImport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\{Type};
class TypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $types = Type::withTrashed()->latest('created_at')->get();
        return response(['data' => $types],200);
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
    public function store(StoreTypeRequest $request)
    {
        if($request->validated())
        {
            Type::create($request->validated());
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
    public function update(UpdateTypeRequest $request, $id)
    {
        if($request->validated())
        {
            Type::whereId($id)->update($request->validated());
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
            $type = Type::findOrFail($id);
            if(!$type->trashed())
            {
                $type->delete();
                return response()->noContent();
            }
        }catch (\Exception $exception)
        {
            return response(['message' => 'not found'],404);
        }
    }

    public function restore($id)
    {
        try {
            $type = Type::withTrashed()->findOrFail($id);
            if($type->trashed())
            {
                $type->restore();
                return response()->noContent();
            }
        }catch (\Exception $exception)
        {
            return response(['message' => 'not found'],404);
        }
    }

    public function types()
    {
        $types = Type::withoutTrashed()->latest('created_at')->select(['id','name'])->get();
        return response(['data' => $types],200);
    }

    public function storeTypesExcel(Request $request)
    {

        $rules = [
            'file' => 'required|mimes:csv,xlsx'
        ];

        $validated = $request->validate($rules);

        Excel::import(new TypesImport,$request->file);

        return response()->noContent();
    }
}
