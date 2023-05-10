import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../CSS/style.css'
import icono from "../../assets/icono.png";

const Header = () => {
  return (
    <header>
        <nav class="navbar navbar-expand-md navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                    aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarToggler">
                    {/* <a class="navbar-brand" href="#"> */}
                        <img src={icono} width="50"
                            alt="Logo de la pagina web"/>
                            {/* </a> */}
                    <ul class="navbar-nav d-flex justify-content-center align-items-center ">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#sobre-mi">Sobre mi</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#proyectos">Proyectos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#testimonios">Testimonios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </header>
  );
};

export default Header;