import React from 'react';
import './MenuHero.css';

const MenuHero = () => {
  return (
    <div   style={{
        backgroundImage: "url('/Images/HeroSection/Hero Section.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
      }} className="menu_hero__container">
      <div className="menu_hero__content">
        <h1 className="menu_hero__title">CRAVELIST</h1>
        <p className="menu_hero__subtitle">
          A curated list of flavors made to satisfy every craving.
        </p>
        <button className="menu_hero__download_btn">DOWNLOAD MENU</button>
      </div>
      
    </div>
  );
};

export default MenuHero;
