import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../CSS/style.css'


const Footer = (props) => {
  
  return (
    <footer class="seccion-oscura d-flex flex-column align-items-center justify-content-center">

        <p class="footer-texto text-center">Aprendo y creo todos los días.<br/> Creemos un proyecto juntos.</p>
        <div class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
            <a href="https://twitter.com/FacundoMajolli_" target="blank"><i class="bi bi-twitter"></i></a>
            <a href="https://www.instagram.com/facundomajolli/" target="blannk"><i class="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/facundomajolli/" target="blank" ><i class="bi bi-facebook"></i></a>
            <a href="https://github.com/FacundoMajolli" target="blank"><i class="bi bi-github"></i></a>
        </div>
        <div class="derechos-de-autor">Creado por {props.nombre} {props.apellido} (2023) &#169;</div>
        <div>{props.telefono}</div>
    </footer>

  );

  }
export default Footer;

