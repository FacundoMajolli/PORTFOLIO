import React from 'react'
import Header from '../componentes/componentes/Header'
import MainAbout from '../componentes/componentes/MainAbout'
import Footer from '../componentes/componentes/Footer'

const About = () => {
  let datosPerfil = {
    id:1,
    nombre: 'Facundo',
    apellido: 'Majolli',
    edad: 23,
    estudios:'Programacion',
    universidad:'Universidad Tecnologica Nacional',
    telefono: '3816538025',
    mail: 'Facundomajolli12@gmail.com',
    ciudad: 'San Miguel de Tucumán',
    provincia:'Tucumán',
  }
  return (
    <div>
        <Header/>
        <MainAbout {...datosPerfil}/>
        <Footer {...datosPerfil}/>
    </div>
  )
}

export default About