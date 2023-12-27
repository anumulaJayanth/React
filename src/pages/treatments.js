// Menu.js
import React from "react";
import { MenuList1 } from "../helpers/MenuList";
import MenuItem from "../components/Subtreatments";
import { useHistory } from "react-router-dom";
import "../styles/Menu.css";

function Menu() {
  const history = useHistory();

  const handleCardClick = (path) => {
    history.push(path);
  };
  return (
    <div >
        <div className="menu">
      <h1 className="menuTitle">Our Treatments</h1>
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
      
    </div>
    

  );
}

export default Menu;
