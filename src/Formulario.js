import React, { useState} from 'react'

export default function Formulario({pacientes,setPacientes}){
    const [nombre, setNombre]=useState("")
    const [fecha, setFecha]=useState("")
    const [sintomas, setSintomas]=useState("")

    function agregarPaciente(e){
        e.preventDefault()
        const paciente={
            nombre,
            fecha,
            sintomas
        }
        setPacientes([...pacientes,paciente])
        console.log("Ya se ejecuto la funcion")
        setNombre("")
        setFecha("")
        setSintomas("")
     }

    return(
        <div className='mr-4'>
            <h1>Agregar paciente</h1>
            <form className=' flex flex-col' onSubmit={agregarPaciente} >
                <label>Nombre de la persona</label>
                <input
                    value={nombre}
                    onChange={(e)=>{setNombre(e.target.value)}}
                    type="text" className='border-2 w-full p-2 mt-2'
                    placeholder='Nombre de la persona'
                />

                <label>Fecha de Ingreso</label>
                <input
                 value={fecha}
                 onChange={(e)=>{setFecha(e.target.value)}}
                    type="date" className='border-2 w-full p-2 mt-2'
                    placeholder='Ingreso de la persona' />

                <label>Sintomas de la Persona</label>
                <textarea
                     value={sintomas}
                     onChange={(e)=>{setSintomas(e.target.value)}}
                    type="text" className='border-2 w-full p-2 mt-2'
                    placeholder='Sintoma de la persona' />
                
                <input
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold mt-2 '
                    type="submit"
                    value="Agregar Paciente" />
            </form>
        </div>
    )
}