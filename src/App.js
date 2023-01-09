
import { Route, Routes } from 'react-router';
import './App.css';
import { Productos } from './componentes/Productos';
import {DataProvider} from './componentes/Dataprovider'
import { Carrito } from './componentes/Carrito';
import {Home} from './Home'
import {Encabezado} from './componentes/Encabezado';
import {Navegacion} from './componentes/Navegacion';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Encabezado></Encabezado>
      <Navegacion></Navegacion>
      {/* <Routes>
          <Route path='/Carrito' element={<Carrito/>}/>
          <Route path='/Descripcion' element={<Descripcion/>}/>
          <Route path='/Productos' element={<Productos/>}/>
          <Route path='/' element={<Home/>}/>
      </Routes> */}
      <Home></Home>
      <Productos></Productos>
      
    </div>
    <Carrito></Carrito>
    </DataProvider>
  );
}

export default App;
