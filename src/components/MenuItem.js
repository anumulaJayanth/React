import React from "react";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../styles/Menu.css";



function MenuItem({ image, title, text, to, backgroundColor }) {
  const linkStyle = {
    textDecoration: 'none', // Remove underline
    color: '#00345f', // Set text color
  };
  const history = useHistory();

  const handleCardClick = (path) => {
    history.push(path);
  };

 
  

  return (
    
   
    <Link to={to} style={linkStyle} className="menuCard">
      
      <div className="menuItem" style={{ backgroundColor }}>
      
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <p style={{ color: '#00345f', marginTop:"15px" }}>{title}</p>
        <div className="learnMoreLink" style={{border:"none"}}>
                  <p>
                    Know More{" "}
                    <span
                      className="arrowSymbol"
                      onClick={() =>
                        handleCardClick(`/treatment/Subtreatments`)
                      }
                    >
                      &#8594;
                    </span>
                  </p>
                </div>
       
      </div>
    
    </Link>
    
  );
 
}

export default MenuItem;
