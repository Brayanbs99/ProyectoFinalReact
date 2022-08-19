import React from 'react'
import Paciente from './Paciente'
export default function ListadoPacientes({pacientes}) {
  return (
    <div>
        <h2>ListadoPacientes</h2>
      {
        pacientes.map((paciente)=>{
          return <Paciente
          nombre={paciente.nombre}
          fecha={paciente.fecha}
          sintomas={paciente.sintomas}/>
        })
      }
      
        
        </div>
  )
}