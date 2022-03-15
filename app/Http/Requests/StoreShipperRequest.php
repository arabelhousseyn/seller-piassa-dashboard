<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class StoreShipperRequest extends FormRequest
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
            'password' => ['required','confirmed',Password::default()],
            'province_id' => 'required|exists:provinces,id',
            'first_name' => 'required',
            'last_name' => 'required'
        ];
    }
}
