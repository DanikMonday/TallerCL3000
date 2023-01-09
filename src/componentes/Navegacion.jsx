import React from "react";
import { Link } from "react-router-dom";

export function Navegacion(){
  return(
   <div className="cont-nav">
      <div >
        <a to="#" className="ini-nav">INICIO</a>
      </div>
      <div >
        <a to="/Productos" className="pro-nav">PRODUCTOS</a>
      </div>
      <div>
        <a to="/Carrito" ><img className="img-cart" src={require("../images/cartb.png")}alt="carrito" /></a>
      </div>
   </div>
  );
}

export default Navegacion;

