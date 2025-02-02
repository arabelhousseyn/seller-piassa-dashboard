<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVehicleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => 'required|exists:users,id',
            'sign_id' => 'required|exists:signs,id',
            'model' => 'required',
            'year' => 'required|date_format:Y',
            'motorization' => 'required',
            'chassis_number' => 'required'
        ];
    }
}
