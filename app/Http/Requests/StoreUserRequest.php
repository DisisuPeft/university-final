<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'nullable|string|unique|email',
            'password' => 'nullable|string',
            'nombre' => 'string|max:255|required',
            'apellido_p' => 'string|max:255|required',
            'apellido_m' => 'string|max:255|required',
            'edad' => 'nullable|integer',
            'fecha_nacimiento' => 'nullable|date',
            'genero' => 'nullable|integer',
            'niv_edu' => 'nullable|integer',
            'telefono' => 'nullable|digits:10'
        ];
    }

    public function messages(): array {
        return [
            'email.email' => 'Se debe ingresar un email valido',
            'nombre.required' => 'El nombre es requerido',
            'apellido_p.required' => 'El apellido paterno es requerido',
            'apellido_m.required' => 'El apellido materno es requerido',
            'nombre.string' => 'El nombre es debe ser de tipo texto',
            'apellido_p.string' => 'El apellido debe ser de tipo texto',
            'apellido_m.string' => 'El apellido debe ser de tipo texto',
            'edad.integer' => 'El tipo de dato no es valido',
            'fecha_nacimiento' => 'nullable|date',
            'genero.integer' => 'El tipo de dato no es valido',
            'niv_edu.integer' => 'El tipo de dato no es valido',
            'telefono.digits' => 'El numero de telefono no puede tener mas de 10 caracteres'
        ];
    }
}
