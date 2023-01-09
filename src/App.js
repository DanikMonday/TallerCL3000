
import { Route, Routes } from 'react-router';
import './App.css';
import { Productos } from './componentes/Productos';
import {DataProvider} from './componentes/Dataprovider'
import { Carrito } from './componentes/Carrito';
import {Home} from './Home'
import {Encabezado} from './componentes/Encabezado';
import {Navegacion} from './componentes/Navegacion';
import Pie from './componentes/Pie';
import Contacto from './componentes/Contacto';
import { ElCarro } from './componentes/ElCarro';
import { Resumen } from './componentes/Resumen';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Encabezado></Encabezado>
      <Navegacion></Navegacion>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Carrito' element={<Carrito/>}/>
        <Route path='/Productos' element={<Productos/>}/>
        <Route path= '/ElCarro' element={<ElCarro/>}></Route>
        <Route path= '/Resumen' element={<Resumen/>}></Route>
      </Routes>
     <Contacto
     parrafo='CONTACTO' 
     celular=' +57 321 9536176'
     correo=' luce_2358@hotmail.com'></Contacto>
       <Pie/>
      
    </div>
    
    
    </DataProvider>
  );
}

export default App;
