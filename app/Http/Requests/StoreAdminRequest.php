<?php

namespace App\Http\Requests;

use App\Rules\CheckTypeRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class StoreAdminRequest extends FormRequest
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
            'fullName' => 'required|max:255',
            'phone' => 'required|digits:10,',
            'password' => ['required','confirmed',Password::default()],
            'type' => ['required',new CheckTypeRule()]
        ];
    }
}
