import Cita from '../Cita/Cita';


export default function Listado({citas, setCita}) {
function eliminarCita(citaEliminar){
 setCita(citas.filter(cita => cita != citaEliminar ))
  
}
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      
{citas.map((cita,index) => (
  <Cita key={index} cita={cita} eliminarCita={function() {
  return eliminarCita(cita);                                                       
}}/>
))} 
    </div>
  );
}