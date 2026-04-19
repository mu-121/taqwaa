import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-inner">
        {/* Desktop Left Section */}
        <div className="nav-section desktop-only nav-left">
          <button className="nav-btn-white">HOME</button>
        </div>

        {/* Logo Section */}
        <div className="nav-section nav-center">
          <img src="/Images/Navbar/logo.svg" alt="Logo" className="navbar-logo" />
        </div>

        {/* Desktop Right Section */}
        <div className="nav-section desktop-only nav-right">
          <button className="nav-btn-white">CART</button>
          <button className="nav-btn-white phone-btn">0333-1449795</button>
        </div>

        {/* Mobile Toggle Button (visible below 1000px) */}
        <div className="mobile-only">
          <button 
            className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`nav-dropdown ${isMenuOpen ? 'is-open' : ''}`}>
        <div className="dropdown-content">
          <button className="dropdown-link" onClick={() => setIsMenuOpen(false)}>HOME</button>
          <button className="dropdown-link" onClick={() => setIsMenuOpen(false)}>CART</button>
          <button className="dropdown-link phone-link" onClick={() => setIsMenuOpen(false)}>0333-1449795</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
