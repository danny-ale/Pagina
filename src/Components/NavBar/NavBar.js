import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdMenu } from "react-icons/md";
import './NavBar.css'
import Logo from '../../Assets/Logo.png'


function NavBar(){
    return(
        <Navbar className="invisible-navbar"  expand="lg">
        <Container>
          <Navbar.Brand>
           <img className='logo' src={Logo} alt="LOGO"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <MdMenu className='IconoMenu'/>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="custom-nav-link" 
              >Inicio</Nav.Link>
              <Nav.Link href="#Skills" className="custom-nav-link"
               >Habilidades</Nav.Link>
              <Nav.Link href="#Proyect" className="custom-nav-link"
               >Proyectos</Nav.Link>
            </Nav>
            <span className='NavText'>
                <div className='social-icons'>
                    <a href="#"><img src={''} alt=""></img></a>
                    <a href="#"><img src={''} alt=""></img></a>
                    <a href="#"><img src={''} alt=""></img></a>
                </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;