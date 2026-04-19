import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer__section">
      {/* Top Checkerboard Strip */}


      <div className="footer__content">
        <div className="footer__logo_wrapper">
          {/* Using logo.svg as placeholder for the food illustration */}
          <img src="/Images/Navbar/logo1.svg" alt="Taqwa Foods" className="footer__illustration" />
        </div>

        <h2 className="footer__heading">READY TO GRAB THE MEAL OF HAPPINESS?</h2>

        <div className="footer__actions">
          <div className="footer__pill contact_pill">
            ORDER NOW: 0333-1449995
          </div>
          <div className="footer__pill address_pill">
            SHOP # 10, ELANZA MALL & RESIDENCY, D MARKAZ, GULBERG RESIDENCIA, ISLAMABAD.
          </div>
        </div>
      </div>

      {/* Large Background Watermark Text */}
      <div className="footer__watermark">TAQWA FOODS</div>
    </footer>
  );
};

export default Footer;
