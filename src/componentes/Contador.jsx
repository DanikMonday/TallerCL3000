import React from 'react'
import { useContext } from 'react'
import { DataContext } from './Dataprovider'
import { BsTrashFill} from "react-icons/bs";

export const Contador = () => {  
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
        {carrito.map((producto)=>(
        <div className="cont-conta">
            <div>T</div>
            <button className="btn-sus" onClick={() => restar(producto.id)}>-</button>
            <p className='cantidad'>{producto.cantidad}</p>
            <button className="btn-adi" onClick={() => sumar(producto.id)}>+</button>
            <div className="btn-basu"  onClick={()=>removeProducto(producto.id)}><BsTrashFill/></div>
        </div>))}
    </div>
  )
}
