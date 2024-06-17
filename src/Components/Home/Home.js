import React, { useState, useEffect } from 'react';
import './Home.css'
import ImagenHome from '../../Assets/Programming-cuate.png'
import archivoADescargar from '../../Assets/CV-Actualizado.pdf';
import { ReactTyped } from "react-typed";
import { MdFileDownload } from "react-icons/md";

function Home() {
  const descargarArchivo = () => {
    const enlace = document.createElement('a');
    enlace.href = archivoADescargar;
    enlace.download = 'CV';
    enlace.click();
  };


    return (
      <div className="HomePrimero">
        <div className='Contenedor'>
        <div className='Image'> 
        <img src={ImagenHome}
        alt="Imagen"></img>
        </div>
        <div className="Home">
        <p id="PrimerTexto">Hola, Soy Daniela</p>
        <h3>
        <ReactTyped strings={["Estudiante de Programación"]} typeSpeed={40}  backSpeed={50} loop/>
        </h3>
        <p id="Contenido">Me encanta colaborar en proyectos desafiantes y mi principal objetivo es utilizar la tecnología 
        para resolver problemas y mejorar la vida de las personas a través de soluciones digitales creativas.</p>
        <br></br>
        <button className="botonCV" onClick={descargarArchivo} >Descarga mi CV<MdFileDownload className='icono' /></button>
        </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  