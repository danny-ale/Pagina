import './Proyectos.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image1Proy from '../../Assets/Blog.png';
import Image2Proy from '../../Assets/PowerBi.png';
import Image3Proy from '../../Assets/VideoJuego.png';
import { RxVideo } from "react-icons/rx";

function Proyectos() {
  return (
    <div className="MainProy">
      <h3>Mis Proyectos</h3>

      <div className='ContenedorProy'>
      <div className='Proyecto'>
      <Card className='Carta' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ Image1Proy } />
      <Card.Body>
        <Card.Title className='Titulo'>Página Web de Moda</Card.Title>
        <Card.Text className='Texto'>
          Un trabajo colaborativo de una página web tipo blog de moda en el cual 
          se podia iniciar sesión y realizar publicaciones, me desarrolle en gran medida
          en el área backend.
        </Card.Text>
        <a href='https://youtu.be/1X-w2YH7vUk'>
        <Button variant="primary">Ver Video <RxVideo className='icono'/></Button>
        </a>
      </Card.Body>
    </Card>
      </div>

      <div className='Proyecto'>
      <Card className='Carta'style={{ width: '18rem' }}>
      <Card.Img style={{ height: '130px' }}variant="top" src={ Image2Proy } />
      <Card.Body>
        <Card.Title className='Titulo'>Reportes en Dashboard</Card.Title>
        <Card.Text className='Texto'>
          Se realizo en base a un problema de un cliente, se uso tecnologías
          como SQL y Excel para la gestión de la base de datos asi como
          PowerBi para la visualización de datos  .
        </Card.Text>
        <a href='https://youtu.be/D6DqOz4dCAs'>
        <Button variant="primary">Ver Video <RxVideo className='icono'/></Button>
        </a>
      </Card.Body>
    </Card>

      </div>

      <div className='Proyecto'>
      <Card className='Carta'style={{ width: '18rem' }}>
      <Card.Img style={{ height: '130px' }}variant="top" src={ Image3Proy } />
      <Card.Body>
        <Card.Title className='Titulo'>VideoJuego en C++</Card.Title>
        <Card.Text className='Texto'>
          Trabajo colaborativo en el cual se uso DirectX11 y c++ para la creacion 
          de un juego en primera y tercera persona, me desarolle principalmente en 
          la creacion de shaders y jugabilidad.
        </Card.Text>
        <a href='https://youtu.be/txeo2jjIYNw'>
        <Button variant="primary">Ver Video <RxVideo className='icono'/></Button>
        </a>
      </Card.Body>
    </Card>
      </div>
      </div>
    </div>
  )
}

export default Proyectos;