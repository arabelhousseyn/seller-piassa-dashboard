<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Enums\GenderEnum\GenderEnum;
class CheckGender implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        switch ($value)
        {
            case GenderEnum::M : return true; break;
            case GenderEnum::F : return true;break;
            default : return false;
        }
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return __('messages.gender');
    }
}
