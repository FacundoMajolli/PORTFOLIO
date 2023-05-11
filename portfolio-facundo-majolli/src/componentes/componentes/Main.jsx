import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../CSS/style.css'
// import icono from "../../assets/icono.png";
// import Facundo from "../../assets/2.jpg";
// import cliente1 from "../../assets/cliente1.svg";
// import cliente2 from "../../assets/cliente2.svg";
// import cliente3 from "../../assets/cliente3.svg";
// import desarrollador from "../../assets/desarrollador.svg";
// import desarrollador1 from "../../assets/desarrollador.svg";
// import desarrollador2 from "../../assets/desarrollador.svg";
// import desarrollador3 from "../../assets/desarrollador.svg";
// import desarrollador4 from "../../assets/desarrollador.svg";
// import desarrollador5 from "../../assets/desarrollador.svg";
// import desarrollador6 from "../../assets/desarrollador.svg";
// import desarrollador7 from "../../assets/desarrollador.svg";
// import desarrollador8 from "../../assets/desarrollador.svg";
// import desarrollador9 from "../../assets/desarrollador.svg";
// import desarrollador10 from "../../assets/desarrollador.svg";
// import hero from "../../assets/hero-inferior.svg";
// import iconoBlanco from "../../assets/icono-blanco.svg";
// import icono2 from "../../assets/icono2.png";
import proyecto1 from "../../assets/proyecto1.png";
import proyecto2 from "../../assets/proyecto2.png";
import proyecto3 from "../../assets/proyecto3.png";
import proyecto4 from "../../assets/proyecto4.png";
import proyecto5 from "../../assets/proyecto5.png";
import proyecto6 from "../../assets/proyecto6.png";
// import yo from "../../assets/yo.jpeg";
// import yoo from "../../assets/yo.png";

const Main = () => {

  return (
    <main>
    <section class="hero align-items-stretch">
        <div class="hero-principal d-flex flex-column justify-content-center align-items-center">
            <img class="hero-imagen-desarrollador rounded-circle" src={2}
                alt="Foto de Facundo Majolli"/>
            <h1>Hola, soy Facundo Majolli</h1>
            <h2>Desarrollo sitios web y aplicaciones</h2>
        </div>
        <div class="hero-inferior">
            {/* <img class="hero-inferior-imagen img-fluid" src={hero}
                alt="monitor, laptop y logos de html"/> */}
        </div>
    </section>
    {/* <!-- sobre mi --> */}
    <section id="sobre-mi" class="sobre-mi seccion-oscura">
        <div class="contenedor">
            <h2 class="seccion-titulo texto-blanco">Un poco acerca de mi</h2>
            <p class="seccion-texto">Soy estudiante de programación, actualmente estoy cursando el 2do año de la carrera de programacion en la Universidad Tecnologica Nacional. Vivo en San Miguel de Tucuman, Argentina. Tengo 23 años .</p>
        </div>
    </section>
    {/* <!-- experiencia --> */}
    <section class="experiencia seccion-clara">
        <div class="container text-center">
            <div class="row">
                <div class="columna col-12 col-md-4">
                    <i class="bi bi-laptop"></i>
                    <p class="experiencia-titulo">FrontEnd</p>
                    <p>Realice diversas paginas web mediante lenguajes de programación </p>
                    <div class="badges-contenedor">
                        <span class="badge text-bg-primary">HTML</span>
                        <span class="badge text-bg-primary">CSS</span>
                        <span class="badge text-bg-primary">JavaScript</span>
                        <span class="badge text-bg-primary">React</span>
                    </div>
                </div>
                <div class="columna col-12 col-md-4">
                    <i class="bi bi-laptop"></i>
                    <p class="experiencia-titulo">BackEnd</p>
                    <p>Ademas de desarrollo web poseo conocimientos en lenguajes para desarrollo back</p>
                    <div class="badges-contenedor">
                        <span class="badge text-bg-primary">Python</span>
                        <span class="badge text-bg-primary">C#</span>
                        
                    </div>
                </div>
                <div class="columna col-12 col-md-4">
                    <i class="bi bi-laptop"></i>
                    <p class="experiencia-titulo">Base de datos</p>
                    <p>Para realizar los proyectos complemento los programas con bases de datos</p>
                    <div class="badges-contenedor">
                        <span class="badge text-bg-primary">SQL server</span>
                        <span class="badge text-bg-primary">Sqlite3</span>
                        <span class="badge text-bg-primary">MySql</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Proyectos --> */}
    <section id="proyectos" class="proyectos-recientes seccion-clara d-flex flex-column">
        <h2 class="seccion-titulo texto-negro">Mis Proyectos recientes</h2>
        <h3 class="seccion-descripcion">Estos son algunos proyectos que he creado recientemente...</h3>
        {/* <!-- galeria de proyectos --> */}
        <div class="container text-center proyectos-contenedor">
            <div class="row">
                {/* <!-- proyecto 1  --> */}
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="proyecto">
                        <img src={proyecto1} alt="Proyecto 1"/>
                        <div class="overlay">
                            <p>Proyecto 1</p>
                            <div class="iconos-contenedor">
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i
                                        class="bi bi-github"></i></a>
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i
                                        class="bi bi-laptop"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- PROYECTO 2  --> */}
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="proyecto">
                        <img src={proyecto2} alt="Proyecto 1"/>
                        <div class="overlay">
                            <p>Proyecto 2</p>
                            <div class="iconos-contenedor">
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i
                                        class="bi bi-github"></i></a>
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i
                                        class="bi bi-laptop"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- PROYECTO 3  --> */}
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="proyecto">
                        <img src={proyecto3} alt="Proyecto 1"/>
                        <div class="overlay">
                            <p>Proyecto 3</p>
                            <div class="iconos-contenedor">
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i
                                        class="bi bi-github"></i></a>
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i
                                        class="bi bi-laptop"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- PROYECTO 4  --> */}
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="proyecto">
                        <img src={proyecto4} alt="Proyecto 1"/>
                        <div class="overlay">
                            <p>Proyecto 4</p>
                            <div class="iconos-contenedor">
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i
                                        class="bi bi-github"></i></a>
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i
                                        class="bi bi-laptop"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- PROYECTO 5  --> */}
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="proyecto">
                        <img src={proyecto5} alt="Proyecto 1"/>
                        <div class="overlay">
                            <p>Proyecto 5</p>
                            <div class="iconos-contenedor">
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i
                                        class="bi bi-github"></i></a>
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i
                                        class="bi bi-laptop"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- PROYECTO 6  --> */}
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="proyecto">
                        <img src={proyecto6} alt="Proyecto 1"/>
                        <div class="overlay">
                            <p>Proyecto 6</p>
                            <div class="iconos-contenedor">
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i
                                        class="bi bi-github"></i></a>
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i
                                        class="bi bi-laptop"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/* <a href="https://github.com/" target="_blank"> */}
            <button type="button" class="btn btn-info">
                Ver más proyectos
                <i class="bi bi-arrow-right-circle-fill"></i>
            </button>
            {/* </a> */}
    </section>
    {/* <!-- articulos --> */}
    <section class="articulos justify-content-start">
        <h2 class="seccion-titulo texto-negro">Cursos realizados</h2>
        <div class="card">
            <div class="card-header">
                Más recientes
            </div>
            <ul class="list-group list-group-flush">
                {/* <a href="https://www.instagram.com/facundomajolli/" target="_blank"> */}
                    <li class="list-group-item">Free Code Camp - BOOTSTRAP
                    </li>
                {/* </a> */}
                {/* <a href="https://www.instagram.com/facundomajolli/" target="_blank"> */}
                    <li class="list-group-item">Free Code Camp - React</li>
                {/* </a> */}
                {/* <a href="https://www.instagram.com/facundomajolli/" target="_blank"> */}
                    <li class="list-group-item">SoyDalto - SQL</li>
                {/* </a> */}
                {/* <a href="https://www.instagram.com/facundomajolli/" target="_blank"> */}
                    <li class="list-group-item">SoyDalto - Javascript</li>
                {/* </a> */}

            </ul>
        </div>

        {/* <a href="https://github.com/" target="_blank"> */}
            <button type="button" class="btn btn-info">
                Ver más articulos
                <i class="bi bi-arrow-right-circle-fill"></i>
            </button>
            {/* </a> */}

    </section>
    {/* <!-- testimonios --> */}
    <section id="testimonios" class="testimonios seccion-clara">
        <h2 class="seccion-titulo">Testimonios</h2>
        <h3 class="seccion-descripcion">Estos son algunos testimonios de mis clientes,colegas y profesores</h3>
        {/* <!-- carrusel --> */}
        <div id="testimonios-carrusel" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="container">
                        {/* <img class="testimonio-imagen rounded-circle" src={cliente1}
                            alt="Foto de Gino"/> */}
                        <p class="testimonio-texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                            iaculis urna. Fusce a ornare enim, vel interdum turpis. Sed aliquam interdum nisi a
                            placerat.</p>
                        <div class="testimonio-info">
                            <p class="cliente">Gino</p>
                            <p class="cargo">Gerente de proyectos en DesarrolloWeb</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        {/* <img class="testimonio-imagen rounded-circle" src={cliente2}
                            alt="Foto de Nora"/> */}
                        <p class="testimonio-texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                            iaculis urna. Fusce a ornare enim, vel interdum turpis. Sed aliquam interdum nisi a
                            placerat.</p>
                        <div class="testimonio-info">
                            <p class="cliente">Nora</p>
                            <p class="cargo">Gerente de DiseñaMiPáginaWeb</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        {/* <img class="testimonio-imagen rounded-circle" src={cliente3}
                            alt="Foto de Leonardo"/> */}
                        <p class="testimonio-texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                            iaculis urna. Fusce a ornare enim, vel interdum turpis. Sed aliquam interdum nisi a
                            placerat.</p>
                        <div class="testimonio-info">
                            <p class="cliente">Leonardo</p>
                            <p class="cargo">Director de AprendeAProgramar</p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#testimonios-carrusel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#testimonios-carrusel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>



    </section>
    {/* <!-- Contacto --> */}
    <section id="contacto" class="contacto seccion-oscura">
        <div class="container">
            <div class="container text-center rectangulo d-flex justify-content-evenly">
                <div class="row">
                    <div class="col-12 col-md-4 seccion-titulo">
                        ¡Hablemos!
                    </div>
                    <div class="col-12 col-md-4 descripcion">
                        Contáctame para iniciar tu proyecto de desarrollo web y haré que tu visión se vuelva
                        realidad.
                    </div>
                    <div class="col-12 col-md-4">
                        <a href="mailto:janedoe@micorreo.com">
                            <button type="button">
                                Contacto
                                <i class="bi bi-envelope-check-fill"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
 );
};

export default Main;
