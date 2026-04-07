import Formulario from './components/Formulario/Formulario'
import Listado from './components/Listado/Listado'


function App() {
  const citas = [{mascota:"Hernesto", propietario:"Juan", fecha:"2023-10-10", hora:"10:00", sintomas:"Dolor de estómago" },
    {mascota:"Javier", propietario:"Miguel", fecha:"2023-10-10", hora:"10:00", sintomas:"Dolor de pata" }, 
    {mascota:"Damian", propietario:"Cymerman", fecha:"2023-10-10", hora:"10:00", sintomas:"fiebre" }

  ]
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>

      <div className="container">
        <div className="row">
          <Formulario />
          <Listado citas={citas}/>
        </div>
      </div>
    </>
  )
}

export default App
