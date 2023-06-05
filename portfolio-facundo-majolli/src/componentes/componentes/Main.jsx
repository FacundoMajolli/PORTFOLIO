import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../CSS/style.css'
import facundo from "../../assets/2.jpg";
import rugby from '../../assets/rugby.jpeg'
import siprosa2 from '../../assets/siprosa2.jpg'
import { Button, Card } from 'react-bootstrap';
import utn from "../../assets/utnlogo.jpg"
import { about } from "../../constants/constants";
import { Link } from "react-router-dom";
import tictactoe from '../../assets/tictactoe.png';
import adivina from '../../assets/adivinarNumero.png';


const Main = (props) => {

    const handleClick =()=>{
        alert("estoy presionando un h1");
      }

  return (
    <main>
   
    <section class="hero align-items-stretch">
        <div class="hero-principal d-flex flex-column justify-content-center align-items-center">
            <img class="hero-imagen-desarrollador rounded-circle" src={facundo}
                alt="Foto de Facundo Majolli"/>
            <h1 onClick={handleClick}>Hola, soy {props.nombre} {props.apellido}</h1>
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
                <p class="seccion-texto">Soy estudiante de {props.estudios}, actualmente estoy cursando el 2do año de la carrera en la {props.universidad}. Vivo en {props.ciudad}, Argentina. Tengo {props.edad} años.</p>
                <div className="tarjetas">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={utn} />
      <Card.Body>
        <Card.Title>FORMACION</Card.Title>
        <Card.Text>
         <p>Mi secundaria fue en el colegio:  <b> {props.colegio}</b>. Actualmente estudio <b>{props.tecnicatura}</b>  en la UTN
          </p> 
        </Card.Text>
        <Button variant="primary"><Link to={about}> Ver más </Link></Button>
      </Card.Body>
    </Card>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={siprosa2} />
      <Card.Body>
        <Card.Title>TRABAJO</Card.Title>
        <Card.Text>
          En la actualidad trabajo en el <b>{props.actualidad}</b>  desde hace <b>{props.siprosaTiempo}</b> 
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={rugby} />
      <Card.Body>
        <Card.Title>HOBBYS</Card.Title>
        <Card.Text>
          Juego al <b>{props.deporte1}</b> me gusta escuchar musica como <b>{props.musica}</b>.
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    </div>
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
    <div className='row mt-1 p-5'>
        <h2 className='mb-5'>Mis proyectos</h2>
        <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3'>
          <div className='card'>
            <img className="card-img-top" src={tictactoe} alt=""/>
            <div className="card-body">
              <h5 className="card-title">Tic Tac Toe</h5>
              <p className='card-text'>Juego de Tic Tac Toe simple. Desarrollado con HTML, CSS y JS.</p>
            </div>
          </div>
        </div>

        <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3'>
          <div className='card'>
            <img src={adivina} alt="" className="card-img-top" />
            <div className="card-body">
              <h5 className='card-title'>Juego: Adivinar nùmero</h5>
              <div className="card-text">Desarrollado con HTML, CSS, JS</div>
            </div>
          </div>
        </div>
      </div>
    
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
                        <a href="mailto:facundomajolli12@gmail.com">
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
