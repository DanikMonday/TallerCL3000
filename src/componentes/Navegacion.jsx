import React from "react";
import { Link } from "react-router-dom";

export function Navegacion(){
  return(
    <div className="cont-nav">
    <div >
      <Link to="/" className="ini-nav">INICIO</Link>
    </div>
    <div >
      <Link to="/Productos" className="pro-nav">PRODUCTOS</Link>
    </div>
    <div>
      <Link to="/ElCarro" ><img className="img-cart" src={require("../images/cartb.png")}alt="carrito" /></Link>
    </div>
 </div>
  );
}

export default Navegacion;

