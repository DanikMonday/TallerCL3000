import React from "react";

function Bienvenida(props){
  return(
   <div className="cont-bie">
        <div className="tit-bie">{props.titulo}</div>
        <p>{props.parrafo} </p>
   </div>
  );
}

export default Bienvenida;