import React, { useState } from 'react';
import './Menu.css';
import Navbar from '../Components/Navbar';
import MenuHero from '../Components/MenuHero';
import CategoryFilter from '../Components/CategoryFilter';
import MenuItemCard from '../Components/MenuItemCard';
import ProductModal from '../Components/ProductModal';
import CartModal from '../Components/CartModal';
import OrderModal from '../Components/OrderModal';
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

  // Order modal state
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

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
    setIsModalOpen(false); // Close customization modal
    setIsCartModalOpen(true); // Open cart modal
  };

  const handleCloseCartModal = () => {
    setIsCartModalOpen(false);
    setCartData(null);
  };

  const handleProceedToCheckout = (finalOrderData) => {
    setOrderDetails({ ...cartData, ...finalOrderData });
    setIsCartModalOpen(false);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setOrderDetails(null);
  };

  const handleGoBackToCart = () => {
    setIsOrderModalOpen(false);
    setIsCartModalOpen(true);
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

      {/* Second Modal: Cart */}
      <CartModal 
        isOpen={isCartModalOpen} 
        cartData={cartData} 
        onClose={handleCloseCartModal} 
        onProceed={handleProceedToCheckout}
      />

      {/* Third Modal: Order Checkout */}
      <OrderModal 
        isOpen={isOrderModalOpen} 
        orderDetails={orderDetails} 
        onClose={handleCloseOrderModal} 
        onBack={handleGoBackToCart}
      />

      <Subscribe />
      <Footer />
    </div>
  );
};

export default Menu;
