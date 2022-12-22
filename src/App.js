import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './paginas/auth/Login';
import CrearCuenta from './paginas/auth/CrearCuenta';
import Home from './paginas/Home';
import ProyectosAdmin from './paginas/proyectos/ProyectosAdmin';
import ProyectosCrear from './paginas/proyectos/ProyectosCrear';
import ProyectosEditar from './paginas/proyectos/ProyectosEditar';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>} />
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/proyectos-admin" exact element={<ProyectosAdmin/>}/>
          <Route path="/proyectos-crear" exact element={<ProyectosCrear/>}/>
          <Route path="/proyectos-editar/:idproyecto" exact element={<ProyectosEditar/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
