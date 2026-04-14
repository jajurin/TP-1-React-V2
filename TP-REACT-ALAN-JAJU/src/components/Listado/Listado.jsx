import Cita from '../Cita/Cita';

export default function Listado({citas, setCita}) {
function eliminarCita(indexCita){
  setCita(citas.filter((cita, index) => index !== indexCita))
}
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      
{citas.map((cita,index) => (
  <Cita key={index} cita={cita} eliminarCita={() => eliminarCita(index)}/>
))}
    </div>
  );
}