<?php

namespace App\Http\Requests;

use App\Rules\CheckGender;
use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
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
            'phone' => 'required|digits:10|unique:users,phone',
            'email' => 'email:rfc,dns,filter',
            'province_id' => 'required|exists:provinces,id',
            'full_name' => 'required',
            'gender' => ['required',new CheckGender()]
        ];
    }
}
