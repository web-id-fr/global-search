<?php

namespace App\Http\Requests\Github;

use Illuminate\Foundation\Http\FormRequest;

class GithubSearchFormRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'query' => 'required|string',
            'cursor' => 'nullable|string',
        ];
    }
}
