<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSellerJobRequest extends FormRequest
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
            'seller_id' => 'required|exists:sellers,id',
            'job' => 'required|max:254',
            'types' => 'required|array',
            'types.*.type_id' => 'required|exists:types,id',
            'signs' => 'required|array',
            'signs.*.sign_id' => 'required|exists:signs,id'
        ];
    }
}
