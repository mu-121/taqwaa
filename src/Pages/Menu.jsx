import React, { useState,useEffect } from 'react';
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
import { fetchProducts, fetchCategories } from '../services/api';
import { useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("PIZZAS");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Cart modal state
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartData, setCartData] = useState(null);

  // Order modal state
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [fetchedCategories, fetchedProducts] = await Promise.all([
          fetchCategories(),
          fetchProducts()
        ]);
        setCategories(fetchedCategories.map(c => c.name));
        setProducts(fetchedProducts);
        
        // Handle category from URL search params
        const queryParams = new URLSearchParams(location.search);
        const categoryParam = queryParams.get('category');
        
        if (categoryParam && fetchedCategories.some(c => c.name === categoryParam)) {
          setActiveCategory(categoryParam);
        } else if (fetchedCategories.length > 0) {
          setActiveCategory(fetchedCategories[0].name);
        }

        // Handle direct product opening from Favorites
        const productId = queryParams.get('productId');
        if (productId) {
          const directProduct = fetchedProducts.find(p => p._id === productId || p.id === productId);
          if (directProduct) {
            handleOpenModal(directProduct);
            // Optionally set active category to match the product
            setActiveCategory(directProduct.category);
          }
        }
      } catch (err) {
        console.error("Failed to fetch menu data:", err);
        setError("Could not load menu. Please make sure the server is running.");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredItems = products.filter(item => item.category === activeCategory);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleToggleFavoriteInState = (productId) => {
    setProducts(prevProducts => 
      prevProducts.map(p => 
        (p._id === productId || p.id === productId) 
          ? { ...p, isFavorite: !p.isFavorite } 
          : p
      )
    );
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
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        {loading ? (
          <div className="menu_page__loading">Loading Delicious Food...</div>
        ) : error ? (
          <div className="menu_page__error">{error}</div>
        ) : (
          <div className="menu_page__grid_container">
            <div className="menu_page__grid">
              {filteredItems.map(item => (
                <MenuItemCard 
                  key={item._id || item.id}
                  product={item}
                  onAddToCart={handleOpenModal}
                  onToggleFavorite={handleToggleFavoriteInState}
                />
              ))}
            </div>
          </div>
        )}
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
