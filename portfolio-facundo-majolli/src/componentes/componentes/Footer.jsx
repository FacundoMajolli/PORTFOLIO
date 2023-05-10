import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../CSS/style.css'


function Footer() {
  
  return (
    <footer class="seccion-oscura d-flex flex-column align-items-center justify-content-center"><a href="index.html">div</a>

        <p class="footer-texto text-center">Aprendo y creo todos los días.<br/> Creemos un proyecto juntos.</p>
        <div class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
            <a href="https://twitter.com/FacundoMajolli_"><i class="bi bi-twitter"></i></a>
            <a href="https://www.instagram.com/facundomajolli/" ><i class="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/facundomajolli/" ><i class="bi bi-facebook"></i></a>
            <a href="https://github.com/FacundoMajolli" ><i class="bi bi-github"></i></a>
        </div>
        <div class="derechos-de-autor">Creado por Facundo Majolli (2023) &#169;</div>
    </footer>

  );

  }
export default Footer;

