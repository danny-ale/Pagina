import ImagenFondo from '../../Assets/Purple decoration.png'
import './Tecnologias.css';

function Tecnologias() {
  return (
    <div className="MainTecno">
        <h3>Mis Tecnologias</h3>
        <div className='ContenedorFondo'>
        <img src={ImagenFondo} alt="Imagen"></img>  
        </div>
        <div className='Contenedor1'>
        <img className="iconos" src="https://skillicons.dev/icons?i=cpp,cs,js,java,py,r,html,css,bootstrap,react,jquery,vscode,visualstudio,figma,unity,ps,pr,mysql,cassandra&perline=10" alt="Imagen"></img>  
        </div>
    </div>
  )
}

export default Tecnologias;