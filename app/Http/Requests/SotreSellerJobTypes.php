<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SotreSellerJobTypes extends FormRequest
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
            'job_id' =>'required|exists:seller_jobs,id',
            'types' => 'required|array',
            'types.*.type_id' => 'required|exists:types,id',
        ];
    }
}
