import React from "react";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../styles/Menu.css";



function MenuItem({ image, title, text, to }) {
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
      
      <div className="menuItem">
      
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <p style={{ color: '#00345f' }}>{title}</p>
        <div className="learnMoreLink">
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
