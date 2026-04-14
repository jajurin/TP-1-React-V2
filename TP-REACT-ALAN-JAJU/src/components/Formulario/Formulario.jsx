function Formulario({ setCita}) {
    const handleSumbit= (e) =>{
        e.preventDefault();

        const nuevaCita ={
           mascota: e.target.mascota.value,
           propietario: e.target.propietario.value,
           fecha: e.target.fecha.value,
            hora: e.target.hora.value,
            sintomas: e.target.sintomas.value

        }

      setCita(prev => [...prev, nuevaCita]);

    }
    return (
      <>
      
        <div className="one-half column">
        <h2>Crear mi Cita</h2> 
        <form onSubmit={handleSumbit}>
          <label>Nombre Mascota</label>
          <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" />

          <label>Nombre Dueño</label>
          <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" />

          <label>Fecha</label>
          <input type="date" name="fecha" className="u-full-width" />

          <label>Hora</label>
          <input type="time" name="hora" className="u-full-width" />

          <label>Síntomas</label>
          <textarea name="sintomas" className="u-full-width"></textarea>

          <button type="submit" className="u-full-width button-primary">
            Agregar Cita
          </button>
        </form>
        </div>
      </>
      
    );
  }

  export default Formulario;