import React, {useContext} from 'react'
import {DataContext} from '../componentes/Dataprovider'
import Bienvenida from './Bienvenida';
import { ProductoItem } from './ProductoItem';

export function Productos() {

    const value = useContext(DataContext);
    const [productos] = value.productos;
    console.log(productos);
    return (
        <>  
        <section className="sec-prod" >
        <Bienvenida titulo='Ropa de Trabajo'/> 
            <div className='ProductosTrabajo'>
                {
                    productos.map(producto => (
                        <ProductoItem 
                        key={producto.id}
                        id={producto.id}
                        title={producto.title}
                        price ={producto.price}
                        image ={producto.image}
                        category={producto.category}
                        cantidad={producto.cantidad}
                        />
                    ))
                }
                
            </div>
         </section>
        </>
)
}

