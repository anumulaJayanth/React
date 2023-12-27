import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.jpg";
import "../styles/Home.css";
import Menu from "../pages/Menu.js";
import Contact from "../pages/Contact.js";
function Home() {
  return (
    <div>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        
        <Link to="/contact">
          <button> Book  </button>
        </Link>
      </div>
    </div>
   
    
    <Menu />
    
    <Contact/>
    </div>
    
  );
}

export default Home;
