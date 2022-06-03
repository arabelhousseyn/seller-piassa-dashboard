<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSellerSuggestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'mark' => 'required',
            'price' => 'reauired|numeric',
            'available_at' => 'required|date:Y-m-d',
            'seller_request_id' => 'required|exists:seller_requests,id'
        ];
    }
}
