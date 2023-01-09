import React from "react";
import { Link } from "react-router-dom";

function Descubrir(props){
  return(
   <div className="cont-bie">
        <div className="tit-bie">{props.titulo}</div>
        <div className="gal-des">
        <Link to="/Productos" ><div className="ele-gal-des"><img className="img-prod" src={ require('../images/CH02SFA-2.png')} alt="productibiris" /></div></Link>
        <Link to="/Productos" ><div className="ele-gal-des"><img className="img-prod" src={ require('../images/CA01LA.png')} alt="productibiris" /></div></Link>    
        <Link to="/Productos" >  <div className="ele-gal-des"><img className="img-prod" src={ require('../images/OV01DR-2.png')} alt="productibiris" /></div></Link>  
        <Link to="/Productos" >  <div className="ele-gal-des"><img className="img-prod" src={ require('../images/PI01DA.png')} alt="productibiris" /></div></Link>  
          
        </div>
   </div>
  );
}

export default Descubrir;