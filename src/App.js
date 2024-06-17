import NavBar from './Components/NavBar/NavBar.js'
import Home from './Components/Home/Home.js'
import Card from './Components/Skills/Card.js'
import Tecno from './Components/Tecnolo/Tecnologias.js'
import Proy from './Components/Proyectos/Proyectos.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
      <NavBar/>
      <div id="home">
        <Home/> 
      </div>
      <div id="Skills">
        <Card/> 
      <div className='Seccion4'>
      <Tecno/>
      </div>
      </div>
      <div id="Proyect">
       <Proy/>
      </div>
      </div>
    </div>
  );
}

export default App;

