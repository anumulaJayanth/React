import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import BannerImage from "../assets/banner1.jpg";
import BannerImage2 from "../assets/banner2.jpg";
import BannerImage3 from "../assets/banner3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.css";
import Menu from "../pages/Menu.js";
import Contact from "../pages/Contact.js";

const carouselImages = [
  BannerImage,
  BannerImage2,
  BannerImage3,

  // Add more image URLs as needed
];

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="home-carousel">
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index} style={{ position: "relative" }}>
              <div className="banner"
                style={{
                  backgroundImage: `url(${image})`,
                  height: "100vh",
                 
                          }}
              >
                <div
                  className="headerContainer"
                  // style={{
                  //   width: "auto",
                  //   marginLeft: "50px",
                  // }}
                >
                 
              
                  <Link to="/contact">
                    <button style={{alignItems: "center"}}>Book</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

     

      

      <Menu />

    



      <Contact />
    </div>
  );
}

export default Home;
