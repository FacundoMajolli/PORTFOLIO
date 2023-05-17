import React from "react";
import Header from '../componentes/componentes/Header';
import Main from '../componentes/componentes/Main';
import Footer from '../componentes/componentes/Footer';
import "bootstrap/dist/css/bootstrap.min.css";




export const Home = () => {
    
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
      <Main {...datosPerfil}/>
      <Footer {...datosPerfil}/>
    </div> 
  );
};

export default Home;