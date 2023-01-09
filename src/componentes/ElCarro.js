import React from 'react'
import Bienvenida from './Bienvenida';
import { useContext } from 'react'
import { DataContext } from './Dataprovider'
import { BsTrashFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import { Contador } from './Contador';

export const ElCarro = () => {
    
    const value = useContext(DataContext)
    const [carrito, setCarrito] =value.carrito
    const[total] = value.total

  return (
    <div>
        <Bienvenida titulo='TU CARRITO'/>

        <div className='carritos'>
            <div className='carrito'>
                {
                    carrito.length === 0 ? <h2>Tu Carrito Está Vacío</h2>: <>
                    {
                    carrito.map((producto)=>(
                        <>
                        
                        <div className="sec-descr-gen-carro">

                            <div className="sec-descr-carro">
                                
                                    <div className="cont-prod-carro" key={producto.id}>
                                        <div className='cont-izq-carro'>
                                            
                                            <div className="cont-img-prod-carro"><img className="img-prod" src={producto.image} alt="img carro" /></div> 
                                            <div><p className="cop-prod-car">${producto.price}COP</p></div>
                                            <div className='btn-seguir'><Link  to="/Productos" className='btn-seguir'>Seguir Comprando</Link></div>
                                        </div>
                                        <div>
                                            <h2 className="nom-prod">{producto.title}</h2>
                                            <p className="p-descr-carro">{producto.description}</p> 
                                            {/* <div>{producto.talla.mujer.map(t=><Contador talla={t}></Contador>)}</div> */}
                                            <div><Contador></Contador></div>
                                        </div>
                                    </div>
                                    <div className='res-carro'>
                                        <h3>RESUMEN</h3>
                                        <div className='res-carro-int'>
                                        <p className='cantidad'>{producto.cantidad}</p>
                                        <h2 className="nom-prod">{producto.title}</h2>
                                        <p> {(producto.price*(producto.cantidad))}.000</p>
                                        <div><Link to="/Resumen" className='btn-volver'>CONFIRMAR</Link></div>
                                    </div>
                                    </div>
                            </div> 
                     
                               
                        </div>
                       
                        </>

                    ))
                }  
                
                <h3 className='total'>Total: ${total}.000 COP</h3>
                <p className='entrega'>El tiempo de entrega depende de la cantidad de piezas solicitadas y las características específicas de cada producto, variando entre 15 y 30 días</p>
                </>
}
            </div>

        </div>
    </div>
  )
}

