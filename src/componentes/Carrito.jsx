import React from 'react'
import { useContext } from 'react'
import { DataContext } from './Dataprovider'
import { BsTrashFill} from "react-icons/bs";
import { Link } from "react-router-dom";

export const Carrito = () => {
    const value = useContext(DataContext)
    const [carrito, setCarrito] =value.carrito
    const[total] = value.total

    const restar = id =>{
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
            }
            setCarrito([...carrito])
        })

    }

    const sumar = id =>{
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad +=1;
            }
            setCarrito([...carrito])
        })

    }

    const removeProducto = id =>{
        if (window.confirm('¿Eliminar producto?')) {
           carrito.forEach((item, index)=>{
            if (item.id === id) {
                item.cantidad = 1;
                carrito.splice(index, 1)
            }
           
           })
           setCarrito([...carrito])
        }
      
    }
  return (
    <div>
      
        <div className='carritos'>
            <div className='carrito'>
                {
                    carrito.length === 0 ? <h2>Tu Carrito Está Vacío</h2>: <>
                    {
                    carrito.map((producto)=>(
                        <>
                        
                        <div className="sec-descr-gen">
                            <div className="sec-descr">
                                <div className="cada-prod">
                                    <div className="cont-prod" key={producto.id}>
                                        <h2 className="nom-prod">{producto.title}</h2>
                                        <div className="cont-img-prod"><img className="img-prod" src={producto.image} alt="img carro" /></div> 
                                    </div>
                                    <div className="precio-prod"><p className="cop-prod">${producto.price}COP</p></div>
                                </div>
                                <div className="cont-p-descr">
                                    <div><h2 className="tit-descr">DESCRIPCIÓN</h2></div>
                                    <p className="p-descr">{producto.description}</p> 
                                </div>
                            </div> 
                            <div className="sec-conta">  
                                <div className='btn-volver'><Link  to="/Productos" className='btn-volver'>Volver</Link></div>
                                <div className="cont-conta">
                                    <button className="btn-sus" onClick={() => restar(producto.id)}>-</button>
                                    <p className='cantidad'>{producto.cantidad}</p>
                                    <button className="btn-adi" onClick={() => sumar(producto.id)}>+</button>
                                    <div className="btn-basu"  onClick={()=>removeProducto(producto.id)}><BsTrashFill className='ico-trash'/></div>
                                </div>
                                <div className='btn-volver'><Link  to="/ElCarro" className='btn-volver'>Ir al Carrito</Link></div>
                            </div> 
                            <p className='subtotal'> <strong>Subtotal {producto.title}: ${(producto.price*(producto.cantidad))}.000</strong></p>
                        </div>
                        
                        </>

                    )) 
                }
                <h3 className='total'>Total: ${total}.000 COP</h3>
                </>
}
            </div>

        </div>

    </div>
  )
}
