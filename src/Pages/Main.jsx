import React, { useEffect, useRef, useState } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import ChooseCraving from '../Components/ChooseCraving';
import PersonalInformation from '../Components/PersonalInformation';
import HotDeals from '../Components/HotDeals';
import Subscribe from '../Components/Subscribe';
import Footer from '../Components/Footer';


const Main = () => {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize immediately
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine continuous progress between 0 and 1 over a specific scroll duration
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const scrollDuration = windowHeight * 1.2; // 120% of viewport height for the animation
  const progress = Math.min(Math.max(scrollY / scrollDuration, 0), 1);

  // Clamped Opacities (browsers reject negative opacity values!)
  const fadeOpacityFast = Math.max(0, 1 - progress * 2);
  const fadeOpacityMid = Math.max(0, 1 - progress * 1.5);

  return (
  <div className="main-container1111">
    <div className="hero-scroll-track">
      <div className="hero-sticky-content" style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        <div
          ref={heroRef}
          className="hero-container"
          style={{ height: '100%', paddingBottom: '0' }}
        >

      <Navbar />

      {/* Left & Right fade gradients */}
      <div className="fade-gradient-left" />
      <div className="fade-gradient-right" />

      {/* Huge background text — two rows, animate in opposite directions */}
      <div className="bg-text-container" aria-hidden="true">
         <div className="bg_text__left__image22" />
        <img 
          src="/Images/HeroSection/leaf.svg" 
          alt="leaf" 
          className="bg_text__left__image222" 
          style={{
            transform: `translateY(${-progress * 150}px)`
          }}
        />
        <div style={{ transform: `translateX(${progress * 250}px)` }}>
          <h1 className="bg-text row-right">CRAVE IN LOVE IN CRAVE</h1>
        </div>
        <div style={{ transform: `translateX(${-progress * 250}px)` }}>
          <h1 className="bg-text row-left">LOVE IN CRAVE IN LOVE</h1>
        </div>
        <div className="bg_text__left__image" />
        <img 
          src="/Images/HeroSection/veg.svg" 
          alt="veg" 
          className="bg_text__left__image111" 
          style={{
            transform: `translateY(${progress * 150}px)`
          }}
        />

      </div>

      {/* Pizza + hand scene */}
      <div className="pizza-scene" style={{ marginBottom: '60px' }}>
        {/* The component with the hole (Pizza Image) - Static */}
        <div 
          style={{ 
            position: 'absolute',
            zIndex: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            src="/Images/HeroSection/Pizza Image.png"
            alt="Pizza Base"
            className="main-pizza"
            style={{ height: '500px', objectFit: 'contain' }}
          />
        </div>

        {/* The component with the hand and slice (Hand Image) - Moves */}
        <div 
          style={{ 
            transform: `translateX(${progress * 120}vw)`, 
            willChange: 'transform',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className="hand-wrapper" style={{ position: 'relative', flexShrink: 0, width: 'auto' }}>
            <img
              src="/Images/HeroSection/Hand Image.png"
              alt="Hand holding slice"
              className="hand-img"
              style={{ 
                height: '438px', 
                objectFit: 'contain',
                marginBottom: '49px'
              }}
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="action-container" style={{ transform: `translateY(${progress * 50}px)` }}>
        <Link to="/menu" className="explore-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
          EXPLORE MENU
        </Link>
        </div>

      </div>
    </div>
    </div>
    <ChooseCraving />
    <PersonalInformation />
    <HotDeals />
    <Subscribe />
    <Footer />
    </div>
  );
};

export default Main;
