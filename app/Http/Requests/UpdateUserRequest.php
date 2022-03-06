<?php

namespace App\Http\Requests;

use App\Rules\CheckGender;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class UpdateUserRequest extends FormRequest
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
            'phone' => 'digits:10|unique:users,phone',
            'email' => 'email:rfc,dns,filter',
            'province_id' => 'exists:provinces,id',
            'full_name' => 'required',
            'gender' => [new CheckGender()],
            'role' => 'exists:roles,name'
        ];
    }
}
