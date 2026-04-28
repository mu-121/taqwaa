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
  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("lastCategory") || "PIZZAS"
  );
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

            {/* Huge background text — two rows */}
            <div className="bg-text-container" aria-hidden="true">
              <div style={{ transform: `translateX(${progress * 250}px)` }}>
                <h1 className="bg-text row-right">CRAVE IT LOVE IT CRAVE IT LOVE IT</h1>
              </div>
              <div style={{ transform: `translateX(${-progress * 250}px)` }}>
                <h1 className="bg-text row-left">LOVE IT CRAVE IT LOVE IT CRAVE IT</h1>
              </div>
            </div>

            {/* Floating decorative elements */}
            <img
              src="/Images/HeroSection/leaf.svg"
              alt="leaf"
              className="floating-leaf"
              style={{
                transform: `translateY(${-progress * 150}px)`
              }}
            />
            <img
              src="/Images/HeroSection/veg.svg"
              alt="veg"
              className="floating-chili"
              style={{
                transform: `translateY(${progress * 150}px)`
              }}
            />

            {/* Pizza + hand scene */}
            <div className="pizza-scene">
              {/* Static Pizza Image with entrance animation */}
              <div className="pizza-wrapper">
                <img
                  src="/Images/HeroSection/Pizza Image.png"
                  alt="Pizza Base"
                  className="main-pizza"
                />
              </div>

              {/* Hand Image wrapper for scroll movement */}
              <div
                style={{
                  transform: `translateX(${progress * 120}vw)`,
                  willChange: 'transform',
                  zIndex: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute'
                }}
              >
                <div className="hand-wrapper">
                  <img
                    src="/Images/HeroSection/Hand Image.png"
                    alt="Hand holding slice"
                    className="hand-img"
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

            {/* Checkerboard pattern at the bottom */}
            <div className="checkerboard" />

          </div>
        </div>
      </div>



      <ChooseCraving onCategoryChange={setSelectedCategory} activeCategory={selectedCategory} />
      <PersonalInformation category={selectedCategory} />
      <HotDeals />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Main;
