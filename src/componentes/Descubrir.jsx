import React from "react";


function Descubrir(props){
  return(
   <div className="cont-bie">
        <div className="tit-bie">{props.titulo}</div>
        <div className="gal-des">
            <div className="ele-gal-des"><img className="img-prod" src={ require('../images/CH02SFA-2.png')} alt="productibiris" /></div>
            <div className="ele-gal-des"><img className="img-prod" src={ require('../images/CH02SFA-2.png')} alt="productibiris" /></div>
            <div className="ele-gal-des"><img className="img-prod" src={ require('../images/OV01DR-2.png')} alt="productibiris" /></div>
            <div className="ele-gal-des"><img className="img-prod" src={ require('../images/CH02SFA-2.png')} alt="productibiris" /></div>
          
        </div>
   </div>
  );
}

export default Descubrir;