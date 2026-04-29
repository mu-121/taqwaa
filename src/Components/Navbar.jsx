import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu  = () => setIsMenuOpen(false);

  /* lock body scroll when panel is open */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <nav className="navbar-container">
      <div className="navbar-inner">

        {/* Desktop Left */}
        <div className="nav-section desktop-only nav-left">
          <Link to="/" className="nav-btn-white" style={{ textDecoration: 'none' }}>HOME</Link>
        </div>

        {/* Logo */}
        <div className="nav-section nav-center">
          <img src="/Images/Navbar/logo.svg" alt="Logo" className="navbar-logo" />
        </div>

        {/* Desktop Right */}
        <div className="nav-section desktop-only nav-right">
          <button className="nav-btn-white">CART</button>
          <button className="nav-btn-white phone-btn">0333-1449995</button>
        </div>

        {/* Mobile Hamburger */}
        <div className="mobile-only">
          <button
            className="hamburger-btn"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`nav-overlay ${isMenuOpen ? 'is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Right-Side Drawer */}
      <div className={`nav-drawer ${isMenuOpen ? 'is-open' : ''}`}>
        <div className="drawer-header">
          <img src="/Images/Navbar/logo.svg" alt="Logo" className="drawer-logo" />
        </div>

        <nav className="drawer-links">
          <Link to="/" className="drawer-link" onClick={closeMenu}>HOME</Link>
          <button className="drawer-link" onClick={closeMenu}>CART</button>
          <a href="tel:03331449995" className="drawer-link phone-drawer-link" onClick={closeMenu}>
            0333-1449995
          </a>
        </nav>

        <div className="drawer-footer">
          <p className="drawer-tagline">Taste the Tradition ✦</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
