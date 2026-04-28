import React from "react";
import { useLocation } from "react-router-dom";
import "./Subscribe.css";

const Subscribe = () => {
  const location = useLocation();
  const isMenuPage = location.pathname === "/menu";

  return (
    <div className="subscribe__main_container">
      <div className={`subscribe__section ${isMenuPage ? "subscribe__section--menu" : ""}`}>
        <div className="subscribe__container">
          <div className="subscribe__card">
            <h2 className="subscribe__heading">
              SUBSCRIBE AND SAVE ON YOUR <span className="craving__shadow__text">CRAVINGS </span>
            </h2>
            <p className="subscribe__subheading">
              Get exclusive deals that keep your craving game strong
            </p>
            
            <div className="subscribe__socials">
              <div className="subscribe__socials_group22">
              <img src="/Images/HeroSection/f.svg" alt="Facebook" className="social-icon" />
              </div>
                <div className="subscribe__socials_group22">
              <img src="/Images/HeroSection/i.svg" alt="Instagram" className="social-icon" />
              </div>
              <div className="subscribe__socials_group22">
              <img src="/Images/HeroSection/t.svg" alt="TikTok" className="social-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
