import React from 'react'
import { useState } from 'react'
import '../../CSS/MainAbout.css'

const MainAbout = (props) => {

  const piesDeFoto = ["", "Jugando al rugby", "Regresando de entrenar", "En un bar", "Selfie", "Con mi familia"]
  const [numero, setNumero] = useState(1)
  const handlerClick = () => {
    numero === 5 ? setNumero(1) : setNumero(numero + 1)
  }


  return (
    <div className="container p-3">
      <div className="row m-4 py-4 border-bottom">
        <div className="col-6">
          <img className='imagenes img-thumbnail' src={`${numero}.jpg`} alt="foto"/>
          <button className='btn btn-primary my-2' onClick={handlerClick}>Siguiente foto</button>
          <span className='mx-4'>
            {`"${piesDeFoto[numero]}".`}
          </span>
        </div>
        <div className="col-6">
          <h1>{props.nombre}{" "}{props.apellido}</h1>
          <h4>Estudiante de programación</h4>
          <p>Tengo {props.edad} años, vivo en {props.ciudad}, {props.provincia}. Soy estudiante de Programación en la Universidad Tecnologica Nacional - Facultad Regional Tucumán y futuro desarrollador web FullStack.</p>
          <h5>Estudios Universitarios: </h5>
          <ul>
  
          <li>2022 - Actualmente: <p>Tecnicatura Universitaria en Programacion - UTN. Cursando el 2° año.</p></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MainAbout