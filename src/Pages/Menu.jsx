import React, { useState } from 'react';
import './Menu.css';
import Navbar from '../Components/Navbar';
import MenuHero from '../Components/MenuHero';
import CategoryFilter from '../Components/CategoryFilter';
import MenuItemCard from '../Components/MenuItemCard';
import ProductModal from '../Components/ProductModal';
import CartModal from '../Components/CartModal';
import Subscribe from '../Components/Subscribe';
import Footer from '../Components/Footer';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("PIZZAS");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Cart modal state
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartData, setCartData] = useState(null);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleProductAdded = (fullCartData) => {
    setCartData(fullCartData);
    setIsModalOpen(false); // Close first modal
    setIsCartModalOpen(true); // Open second modal
  };

  const handleCloseCartModal = () => {
    setIsCartModalOpen(false);
    setCartData(null);
  };

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
                product={item}
                onAddToCart={handleOpenModal}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* First Modal: Customization */}
      <ProductModal 
        isOpen={isModalOpen} 
        product={selectedProduct} 
        onClose={handleCloseModal} 
        onAddToCart={handleProductAdded}
      />

      {/* Second Modal: Cart / Checkout */}
      <CartModal 
        isOpen={isCartModalOpen} 
        cartData={cartData} 
        onClose={handleCloseCartModal} 
      />

      <Subscribe />
      <Footer />
    </div>
  );
};

export default Menu;
