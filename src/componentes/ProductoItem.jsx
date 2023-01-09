import React, {useContext} from "react";
import {DataContext} from './Dataprovider';
import {BsCartPlus } from "react-icons/bs";

export const ProductoItem = ({
    id,
    title,
    price ,
    image ,
    category,
    cantidad}) => {

        const value = useContext(DataContext);
        const addCarrito = value.addCarrito;

  return (

        <div className="cada-prod"> 
            <div className="cont-prod">
                <h2 className="nom-prod">{title}</h2>
                <div><a to="/Carrito" className="cont-img-prod"><img className="img-prod" src={image}  alt="productibiris"/></a></div>
                
            </div>
            <div className="precio-prod">
                <p className="cop-prod">${price}COP</p>
                <button className='carrito-btn' onClick={()=>addCarrito(id)}><BsCartPlus></BsCartPlus></button>
            </div>
        </div>
    
  )
}
