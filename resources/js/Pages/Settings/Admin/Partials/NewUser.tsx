import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { Gender, NivEdu, Role, Permission, User } from "@/types";
import PrimaryButton from "@/Components/PrimaryButton";
// import { useState } from "react";
import {Alert, notify} from "@/ui/alerts/Alert";
import React from "react";

export default function NewUser({user, gender, nivedu, roles, permissions}: {users: User [], gender: Gender [], nivedu: NivEdu [], roles: Role [], permissions: Permission []}){  
    // console.log(gender)
    // const [disabled, setDisabled] = useState(false)
    const {data, setData, post, processing, errors, reset } = useForm({
        nombre: "",
        apellido_p: "",
        apellido_m: "",
        edad: 0,
        fecha_nacimiento: "",
        genero: 0,
        niv_edu: 0,
        telefono: "",
        email: "",
        password: "",
        role: [],
        permissions: []
    })
    // console.log(nivedu)
    const setRules = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value)
        const telefono = e.target.value
        if(telefono.length > 10){
            // Alert()
            notify("Alerta", "Solo pueden ser 10 digitos", "warning")
            // telefono.slice(0, 10)
        }
        setData('telefono', telefono)
    }
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // const selected = Array.from(e.target.s)
        console.log(e.target)
    }
    const submit = () => {
        post(route('create.user.admin'), {
            onSuccess: () => {
                Alert("Usuario creado", "success")
            },
            onError: () => {
                notify("Error", "Ocurrio un error al crear al usuario", "error")
            }
        })
    }
    return (
        <form onSubmit={submit}>
            <div className="mb-4">
                <InputLabel htmlFor="email" value="Correo electronico"/>
                <TextInput
                   id="email"
                   type="text"
                   name="email"
                   value={data.email}
                   className="mt-1 block w-full"
                   onChange={(e) => setData('email', e.target.value)}
                />    
                <InputError message={errors.email} className="mt-2" />
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="password" value="Password"/>
                <TextInput
                   id="password"
                   type="password"
                   name="password"
                   value={data.password}
                   className="mt-1 block w-full"
                   onChange={(e) => setData('password', e.target.value)}
                />    
                <InputError message={errors.password} className="mt-2" />
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="nombre" value="Nombre"/>
                <TextInput
                   id="nombre"
                   type="text"
                   name="nombre"
                   value={data.nombre}
                   className="mt-1 block w-full"
                   onChange={(e) => setData('nombre', e.target.value)}
                />    
                <InputError message={errors.nombre} className="mt-2" />
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="apellido_p" value="Apellido paterno"/>
                <TextInput
                   id="apellido_p"
                   type="text"
                   name="apellido_p"
                   value={data.apellido_p}
                   className="mt-1 block w-full"
                   onChange={(e) => setData('apellido_p', e.target.value)}
                />    
                <InputError message={errors.apellido_p} className="mt-2" />
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="apellido_m" value="Apellido materno"/>
                <TextInput
                   id="apellido_m"
                   type="text"
                   name="apellido_m"
                   value={data.apellido_m}
                   className="mt-1 block w-full"
                   onChange={(e) => setData('apellido_m', e.target.value)}
                />    
                <InputError message={errors.apellido_m} className="mt-2" />
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="edad" value="Edad"/>
                <TextInput
                   id="edad"
                   type="number"
                   name="edad"
                   value={data.edad}
                   className="mt-1 block w-full"
                   onChange={(e) => setData('edad', parseInt(e.target.value))}
                />    
                <InputError message={errors.edad} className="mt-2" />
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="date_birth" value="Fecha de nacimiento"/>
                <TextInput
                   id="date_birth"
                   type="date"
                   name="date_birth"
                   value={data.fecha_nacimiento}
                   className="mt-1 block w-full"
                   onChange={(e) => setData('fecha_nacimiento', e.target.value)}
                />    
                <InputError message={errors.fecha_nacimiento} className="mt-2" />
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="gender" value="Genero"/>
                {/* <TextInput
                   id="apellido_p"
                   type="text"
                   name="apellido_p"
                   value={data.apellido_p}
                   className="mt-1 block w-full"
                   onChange={(e) => setData('apellido_p', e.target.value)}
                />     */}
                <select className="rounded-md w-full bg-white" value={data.genero} onChange={(e) => setData('genero', parseInt(e.target.value))}>
                    <option value={0}>Seleccionar</option>
                    {gender.map((g) => (
                        <option key={g.id} value={g.id}>{g.name}</option>
                    ))}
                </select>
                <InputError message={errors.genero} className="mt-2" />
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="niv_edu" value="Nivel educativo"/>
                {/* <TextInput
                   id="apellido_p"
                   type="text"
                   name="apellido_p"
                   value={data.apellido_p}
                   className="mt-1 block w-full"
                   onChange={(e) => setData('apellido_p', e.target.value)}
                />     */}
                <select className="rounded-md w-full bg-white" value={data.niv_edu} onChange={(e) => setData('niv_edu', parseInt(e.target.value))}>
                    <option value={0}>Seleccionar</option>
                    {nivedu.map((niv) => (
                        <option key={niv.id} value={niv.id}>{niv.name}</option>
                    ))}
                </select>
                <InputError message={errors.niv_edu} className="mt-2" />
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="telefono" value="Telefono celular"/>
                <TextInput
                   id="telefono"
                   type="text"
                   name="telefono"
                   value={data.telefono}
                   className="mt-1 block w-full"
                   onChange={setRules}
                //    disabled={disabled}
                />    
                <InputError message={errors.telefono} className="mt-2" />
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="roles" value="Roles de usuario"/>
                {/* <TextInput
                   id="apellido_p"
                   type="text"
                   name="apellido_p"
                   value={data.apellido_p}
                   className="mt-1 block w-full"
                   onChange={(e) => setData('apellido_p', e.target.value)}
                />     */}
                <select className="rounded-md w-full bg-white" multiple onChange={handleChange}>
                    <option value={0}>Seleccionar</option>
                    {roles.map((role) => (
                        <option key={role.id} value={role.id}>{role.name}</option>
                    ))}
                </select>
                <InputError message={errors.niv_edu} className="mt-2" />
            </div>
            <div className="flex items-center justify-end">
                <PrimaryButton disabled={processing}>
                    <div className="flex items-center justify-center">
                        {processing ? (
                            <div>Cargando...</div>
                        ) : (
                            <div>Guardar</div>
                        )}

                    </div>
                </PrimaryButton>
            </div>
        </form>
    );
}