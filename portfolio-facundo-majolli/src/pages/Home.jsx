import React from "react";
import Header from '../componentes/componentes/Header';
import Main from '../componentes/componentes/Main';
import Footer from '../componentes/componentes/Footer';
import "bootstrap/dist/css/bootstrap.min.css";



const Home = () => {
    
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
  let trabajos = {
    actualidad: 'Sistema Provincial de Salud',
    siprosaTiempo: '1 año',
    siprosaFuncion:'administrativo',
    otro:'empresa familiar',
    familiarTiempo:'1 año'
    }
  let formacion = {
    colegio:'San Francisco',
    tecnicatura:'Programacion'
    }
  let hobbys = {
    deporte1: 'rugby',
    deporte2: 'padel',
    musica:'rock y cachengue',
    series:'Peaky Blinders'
    }


  return (
    <div>
      <Header/>
      <Main {...datosPerfil}{...formacion}{...trabajos}{...hobbys}/>
      <Footer {...datosPerfil}/>
    </div> 
  );
};

export default Home;