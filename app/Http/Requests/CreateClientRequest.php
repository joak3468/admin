<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateClientRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'cuil' => 'numeric',
            'iva'  => 'required|string',
            'address' => 'string',
            'sale_codition' => 'required|string',
            'price' => 'required|numeric',
            'message' => 'required|string',
        ];
    }

    public function menssages() {

    }
}
