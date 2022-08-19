import React from 'react'

export default function Paciente({nombre,fecha,sintomas}) {
  return (
    <div className='mx-2 my-10 bg-white shadow-md px-4 rounded-xl py-10 ' >
        <p>*Nombre {nombre}</p>
        <p>*Fecha {fecha}</p>
        <p>*Sintomas {sintomas}</p>
    </div>
  )
}