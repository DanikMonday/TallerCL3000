import React from "react";
import ReactWhatsapp from "react-whatsapp";
import { BsWhatsapp } from "react-icons/bs";

function Contacto(props){
  return(
    <div className="contacto-con-wa">
        <div className="cont-con">
              <p><strong>{props.parrafo}</strong></p>
              <p>Celular:{props.celular} </p>
              <p>E-mail:{props.correo} </p>
        </div>
        <div className="ico-wa-con">
        <ReactWhatsapp
                      number="+57-316-406-6946"
                      message=""><BsWhatsapp className="ico-wa"></BsWhatsapp></ReactWhatsapp>
        </div>
    </div>
  );
}

export default Contacto;