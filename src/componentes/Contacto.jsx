import React from "react";

function Contacto(props){
  return(
   <div className="cont-con">
        <p><strong>{props.parrafo}</strong></p>
        <p>Celular:{props.celular} </p>
        <p>E-mail:{props.correo} </p>
   </div>
  );
}

export default Contacto;