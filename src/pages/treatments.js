// Menu.js
import React from "react";
import { MenuList1 } from "../helpers/MenuList";
import MenuItem from "../components/Subtreatments";
import { useHistory,Link } from "react-router-dom";

import "../styles/Menu.css";


function Menu() {
  const history = useHistory();

  const handleCardClick = (path) => {
    history.push(path);
  };

  const handleRedirect = () => {
    history.push("/");
  };


  return (
    <div >
        <div className="menu">
      <h1 className="menuTitle">Modalities</h1>
      <div className="menuList">
        {MenuList1.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              title={menuItem.title}
              text={menuItem.text}
              to={`/treatment/${menuItem.to}`} // Provide the path to redirect to
              onClick={() => handleCardClick(`/treatment/${menuItem.to}`)} // You can also use onClick for custom behavior
            />
          );
        })}
      </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px",marginBottom: "40px"  }}>

  <button onClick={handleRedirect}>Back</button>


        </div>
    </div>
    

  );
}

export default Menu;
