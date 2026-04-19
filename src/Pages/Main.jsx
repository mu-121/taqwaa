import React, { useEffect, useRef, useState } from 'react';
import './Main.css';
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

  // Determine continuous progress between 0 and 1 over roughly 70% of viewport height
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const progress = Math.min(Math.max(scrollY / (windowHeight * 0.7), 0), 1);

  // Clamped Opacities (browsers reject negative opacity values!)
  const fadeOpacityFast = Math.max(0, 1 - progress * 2);
  const fadeOpacityMid = Math.max(0, 1 - progress * 1.5);

  return (
  <div className="main-container1111">
    <div
      ref={heroRef}
      className="hero-container"
      style={{
        backgroundImage: "url('/Images/HeroSection/Hero Section.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
      }}
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
            opacity: fadeOpacityFast,
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
            opacity: fadeOpacityFast,
            transform: `translateY(${progress * 150}px)`
          }}
        />

      </div>

      {/* Pizza + hand scene */}
      <div className="pizza-scene">
        <div 
          style={{ 
            transform: `translateY(${progress * 100}px) scale(${Math.max(0, 1 - progress * 0.22)})`, 
            opacity: fadeOpacityFast,
            willChange: 'transform, opacity' /* Force hardware acceleration fix for iOS/Safari */
          }}
        >
          <div className="pizza-wrapper">
            <img
              src="/Images/HeroSection/gGIsm5PPowFM8rqpltxZMzH8Y.png"
              alt="Pepperoni Pizza"
              className="main-pizza"
            />
          </div>
        </div>

        <div 
          style={{ 
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0, /* fully cover parent */
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: `translate(${progress * 420}px, ${progress * 300}px) scale(${1 - progress * 0.25})`, 
            opacity: fadeOpacityMid,
            zIndex: 8,
            pointerEvents: 'none'
          }}
        >
          {/* Internal relative wrapper to allow flex-center alignment to act just like absolute placement */}
          <div className="hand-wrapper" style={{ position: 'relative', flexShrink: 0 }}>
            <img
              src="/Images/HeroSection/NzOX0DiiIPMTOlnQ1Jg1uBLolE.png"
              alt="Hand grabbing pizza slice"
              className="hand-img"
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="action-container" style={{ opacity: fadeOpacityFast, transform: `translateY(${progress * 50}px)` }}>
        <button className="explore-btn">EXPLORE MENU</button>
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
