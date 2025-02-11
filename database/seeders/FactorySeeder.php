<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Gender;
use App\Models\NivEdu;
use App\Models\Role;

class FactorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $gender = ["Masculino", "Femenino", "No binario", "Prefiero no especificar"];
        // foreach ($gender as $g){
        //     Gender::create([
        //         'name' => $g
        //     ]);
        // }
        // $niv = [
        //     'Preescolar', 'Primaria', 'Secundaria', 
        //     'Preparatoria', 'Licenciatura', 'Maestría', 'Doctorado'
        // ];
        // foreach($niv as $n){
        //     NivEdu::create([
        //         'name' => $n
        //     ]);
        // }
        $roles = ["Docente", "Alumno"];
        foreach ($roles as $role){
            Role::create([
                'name' => $role
            ]);
        }
    }
}
