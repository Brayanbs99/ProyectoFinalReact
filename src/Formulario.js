import React, { useState} from 'react'

export default function Formulario({pacientes,setPacientes}){
    const [nombre, setNombre]=useState("")
    const [fecha, setFecha]=useState("")
    const [sintomas, setSintomas]=useState("")

    //Editar Cita

    /*const [editarPaciente, setEditarPaciente] = useState("")
    const initialFormState = { nombre: '', fecha: '', sintomas: '' }
    const [currentCita, setCurrentCita] = useState(initialFormState)

    const editRow = cita => {
        setEditarPaciente(true) 
        setCurrentCita({ nombre: cita.nombre, fecha: cita.fecha, sintomas: cita.sintomas })
      }

    const updateCita = (cita, updatedCita) => {
        setEditarPaciente(false)
        setCita(cita.map(cita => (cita.nombre === nombre ? updatedCita : cita)))
    }*/

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

     /*const EditarPaciente = (props) => {

        const paciente={
            nombre,
            fecha,
            sintomas
        }
    
        setValue('nombre', props.setCurrentCita.nombre)
        setValue('fecha', props.setCurrentCita.fecha)
        setValue('sintomas', props.setCurrentCita.sintomas)
    
        const onSubmit = (data, e) => {
            data.nombre = props.setCurrentCita.nombre
            console.log(data)
            props.updateUser(props.setCurrentCita.nombre, data)
            e.target.reset()
        }*/

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

            

                EL ERROR QUE DA EL CODIGO ESTA EN LAS SIGUIENTES 4 LINEAS, POR FAVOR ELIMINARLAS YA QUE LAS DEJE
            PARA QUE SE MUESTRE QUE INTENTE HACER EL PROCESO DE EDITAR LA CITA. LAS DISCULPAS DEL CASO,
            NO ENCONTRÉ COMO COMENTAR ESTA PARTE.

                <button type="submit">Editar paciente</button>
                <button onClick={() => props.setEditarPaciente(false)} className="bg-indigo-600 w-full p-3 text-white uppercase font-bold mt-2">
                    Editar
                </button>
            </form>
        </div>
    )
    //}
}