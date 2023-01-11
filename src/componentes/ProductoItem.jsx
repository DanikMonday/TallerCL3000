import React, {useContext} from "react";
import {DataContext} from './Dataprovider';
import {BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

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
                {/* <div><Link to="/Carrito" className="cont-img-prod"><img className="img-prod" src={image}  alt="productibiris"/></Link></div> */}
                <Link to= "/Carrito" ><button className="cont-img-prod" onClick={()=>addCarrito(id)}><img className="img-prod" src={image}  alt="productibiris"/></button></Link>
                
            </div>
            <div className="precio-prod">
                <p className="cop-prod">${price}COP</p>
                <Link to= "/ElCarro"><button className='carrito-btn' onClick={()=>addCarrito(id)}><BsCartPlus className="ico-carro"></BsCartPlus></button></Link>
            </div>
        </div>
    
  )
}

