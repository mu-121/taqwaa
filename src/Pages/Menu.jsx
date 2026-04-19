import React, { useState } from 'react';
import './Menu.css';
import Navbar from '../Components/Navbar';
import MenuHero from '../Components/MenuHero';
import CategoryFilter from '../Components/CategoryFilter';
import MenuItemCard from '../Components/MenuItemCard';
import Subscribe from '../Components/Subscribe';
import Footer from '../Components/Footer';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("PIZZAS");

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="menu_page__container">
      <Navbar />
      
      <MenuHero />
      
      <div className="menu_page__content">
        <CategoryFilter 
          categories={MENU_CATEGORIES} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        <div className="menu_page__grid_container">
          <div className="menu_page__grid">
            {filteredItems.map(item => (
              <MenuItemCard 
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Menu;
