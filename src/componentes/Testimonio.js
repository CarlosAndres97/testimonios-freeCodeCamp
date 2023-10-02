import React from 'react';
import '../hojas-de-estilo/Testimonio.css';
//Como dejar el alt dinamico
//Como resaltar ciertas partes de los parrafos
//Como dejar aparte los props

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.JPG`)}
        alt={`Foto de ${props.nombre} en ${props.pais}`}
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}
export default Testimonio;
