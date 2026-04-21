import Formulario from './components/Formulario/Formulario'
import Listado from './components/Listado/Listado'
import React, { useEffect, useState } from 'react'


function App() {

  const resultado = JSON.parse(localStorage.getItem("citas"))

  const [citas, setCita] = useState(resultado)

  useEffect(() => {
    
    localStorage.setItem( "citas", JSON.stringify(citas))

    
  }, [citas])


  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>

      <div className="container">
        <div className="row">
        <Formulario setCita={setCita}  />
          <Listado citas={citas} setCita={setCita} />
        </div>
      </div>
    </>
  )
}

export default App
