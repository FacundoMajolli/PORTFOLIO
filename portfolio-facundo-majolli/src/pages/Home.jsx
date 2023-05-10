import React from "react";
import Header from '../componentes/componentes/Header';
import Main from '../componentes/componentes/Main';
import Footer from '../componentes/componentes/Footer';
import "bootstrap/dist/css/bootstrap.min.css";



export const Home = () => {
    
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div> 
  );
};

export default Home;