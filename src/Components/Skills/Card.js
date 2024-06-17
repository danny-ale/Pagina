import Card from 'react-bootstrap/Card';
import Imagen1 from '../../Assets/Code.jpg'
import Imagen2 from '../../Assets/VideoGame.jpg'
import Imagen3 from '../../Assets/UX.jpg'
import Imagen4 from '../../Assets/Bases.jpg'
import './Card.css'

function Cards() {
    return (
        <div className="TextMain">
            <h3 className="textogg">¿Qué proyectos desarollo?</h3>
        <div className="ConteinerCards">

      <div id='uno' className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
    <Card className='Card-front'>
      <Card.Body>
        <img src={Imagen3} alt="Imagen"></img>
        <Card.Title className="text-lg">Desarrollo Front-End</Card.Title>
      </Card.Body>
    </Card> 
          </div>
          <div className="flip-card-back">
    <Card className='Card-back'>
      <Card.Body>
        <Card.Title className="text-lg">Desarrollo Front-End</Card.Title>
        <Card.Text>
          <ul>
            <li>HTML,CSS y JavaScript</li>
            <li>Frameworks y bibliotecas: React y Angular</li>
            <li>Diseño responsivo y adaptable a dispositivos móviles</li>
            <li>Bootstrap y Tailwind para interfaces de usuario</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card> 
          </div>
        </div>
      </div>


      <div id='dos' className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
    <Card className='Card-front'>
      <Card.Body>
      <img src={Imagen1} alt="Imagen"></img>
        <Card.Title className="text-lg">Desarrollo Back-End</Card.Title>
      </Card.Body>
    </Card> 
          </div>
          <div className="flip-card-back">
    <Card className='Card-back'>
      <Card.Body>
        <Card.Title className="text-lg">Desarrollo Back-End</Card.Title>
        <Card.Text>
          <ul>
            <li>Uso de Java y Servlets</li>
            <li>Gestión y despliegue de aplicaciones en Apache Tomcat</li>
            <li>Manejo de JPA para la persistencia de datos</li>
            <li>Desarrollo de aplicaciones web con Node.js</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card> 
          </div>
        </div>
      </div>

      
      <div id='tres'className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
    <Card className='Card-front'>
      <Card.Body>
      <img src={Imagen4} alt="Imagen"></img>
        <Card.Title className="text-lg">Gestión de Bases de Datos</Card.Title>
      </Card.Body>
    </Card> 
          </div>
          <div className="flip-card-back">
    <Card className='Card-back'>
      <Card.Body>
        <Card.Title className="text-lg">Gestión de Bases de Datos</Card.Title>
        <Card.Text>
          <ul>
            <li>Diseño de Bases de Datos</li>
            <li>Gestión de Bases de Datos Relacionales (SQL)</li>
            <li>Consultas SQL</li>
            <li>Extracción, manipulación de datos, uso de JOINS y subconsultas</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card> 
          </div>
        </div>
      </div>

      <div id='cuatro' className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
    <Card className='Card-front'>
      <Card.Body>
      <img src={Imagen2} alt="Imagen"></img>
        <Card.Title className="text-lg">Desarrollo de Videojuegos</Card.Title>
      </Card.Body>
    </Card> 
          </div>
          <div className="flip-card-back">
    <Card className='Card-back'>
      <Card.Body>
        <Card.Title className="text-lg">Desarrollo de Videojuegos</Card.Title>
        <Card.Text>
          <ul>
            <li>Motores de Juego: Unity</li>
            <li>Modelado 3D: Blender</li>
            <li>Diseño de Arte 2D: Photoshop y Illustrator</li>
            <li>Shaders:HLSL</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card> 
          </div>
        </div>
      </div>

        </div>  
        </div>
    );
  }
  
  export default Cards;
  