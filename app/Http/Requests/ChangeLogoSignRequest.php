<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ChangeLogoSignRequest extends FormRequest
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
            'sign_id' => 'required|exists:signs,id',
            'logo' => 'required|mimes:jpg,png,jpeg|dimensions:max_width=60,max_height=70'
        ];
    }
}
