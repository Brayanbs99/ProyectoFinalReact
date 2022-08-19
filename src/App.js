import logo from './logo.svg';
import './App.css';
import Formulario from './Formulario';
import ListadoPacientes from './ListadoPacientes';
import { useState } from 'react';

function App() {
  const [pacientes,setPacientes]=useState([])
  return (
    <div className="container mx-auto mt-20 flex justify-center">
        <Formulario
      pacientes={pacientes}
      setPacientes={setPacientes}
      />
      <ListadoPacientes
      pacientes={pacientes}
       />
    </div>
  );
}

export default App;
