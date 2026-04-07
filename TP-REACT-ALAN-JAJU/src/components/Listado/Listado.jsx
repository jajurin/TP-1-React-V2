import Cita from '../Cita/Cita';

export default function Listado({citas}) {
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      
     <Cita cita={citas[0]} />
     <Cita cita={citas[1]} />
     <Cita cita={citas[2]} />
    </div>
  );
}