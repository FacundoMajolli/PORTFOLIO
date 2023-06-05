import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../CSS/style.css'
import icono from "../../assets/icono.png";
import { Link } from "react-router-dom";
import {home, contact, about} from '../../constants/constants'

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
                        <Link className="nav-link" to={home}>
                                Home
                        </Link>
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link" to={about}>
                        About me
                        </Link>
                        </li>
                    
                        <li class="nav-item">
                        <Link className="nav-link" to={contact}>
                        Contact
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </header>
  );
};

export default Header;