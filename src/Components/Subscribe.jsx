import React from "react";
import "./Subscribe.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Subscribe = () => {
  return (
    <div className="subscribe__main_container">
    <div className="subscribe__section">
      <div className="subscribe__container">
        <div className="subscribe__card">
          <h2 className="subscribe__heading">SUBSCRIBE AND SAVE ON YOUR <span className="craving__shadow__text" >CRAVINGS </span></h2>
          <p className="subscribe__subheading">
            Get exclusive deals that keep your craving game strong
          </p>
          
          <div className="subscribe__socials">
            <img src ="/Images/HeroSection/facebook.svg" alt="Instagram" className="social-icon" />
            <img src ="/Images/HeroSection/insta.svg" alt="Facebook" className="social-icon" />
            <img src ="/Images/HeroSection/tiktok.svg" alt="TikTok" className="social-icon" />


          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Subscribe;
