import React from "react";

export function Encabezado(){
  return(
    <div className="cont-enc">
      <img className="img-enc" src={require("../images/logodef.png")} alt="logo"/>
    </div>
  );
}

export default Encabezado;