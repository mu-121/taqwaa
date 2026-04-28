import React, { useEffect, useState } from "react";
import "./PersonalInformation.css";
import { fetchFavorites } from "../services/api";
import { useNavigate } from "react-router-dom";
import ProductModal from "./ProductModal";
import CartModal from "./CartModal";
import OrderModal from "./OrderModal";

const PersonalInformation = ({ category }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Modal States
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartData, setCartData] = useState(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const getFavorites = async () => {
      setLoading(true);
      try {
        const data = await fetchFavorites(category);
        // Sort by orderCount descending (most ordered first), then limit to 3
        const sorted = data.length > 0 
          ? [...data].sort((a, b) => (b.orderCount || 0) - (a.orderCount || 0))
          : [];
        setFavorites(sorted.slice(0, 3));
      } catch (error) {
        console.error("Error fetching favorites:", error);
      } finally {
        setLoading(false);
      }
    };
    getFavorites();
  }, [category]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleProductAddedToCart = (fullCartData) => {
    setCartData(fullCartData);
    setIsProductModalOpen(false);
    setIsCartModalOpen(true);
  };

  const handleProceedToCheckout = (finalOrderData) => {
    setOrderDetails({ ...cartData, ...finalOrderData });
    setIsCartModalOpen(false);
    setIsOrderModalOpen(true);
  };

  if (loading) return (
    <div className="personal_information__main_container">
      <h2 className="personal_information__heading">LOADING FAVORITES...</h2>
    </div>
  );
  
  if (favorites.length === 0) return (
    <div className="personal_information__main_container">
      <h2 className="personal_information__heading">NO FAVORITES FOR {category || "THIS CATEGORY"}</h2>
      <p className="personal_information__subheading">Try ordering some items to see them here!</p>
    </div>
  );

  return (
    <div className="personal_information__main_container">
      <div className="personal_information__header">
        <div className="personal_information__titles">
          <h2 className="personal_information__heading">
            FAVORITE {category ? category.toUpperCase() : "ITEMS"}
          </h2>
          <p className="personal_information__subheading">
            Signature picks you’ll keep craving again and again.
          </p>
        </div>
        <button 
          className="personal_information__view_all_btn"
          onClick={() => navigate('/menu')}
        >
          VIEW ALL
        </button>
      </div>

      <div className="personal_information__grid">
        {favorites.map((item) => (
          <div 
            key={item._id} 
            className="favorite_card" 
            onClick={() => handleProductClick(item)}
            style={{ cursor: 'pointer' }}
          >
            <div className="favorite_card__image_container">
              <img src={item.image} alt={item.name} className="favorite_card__image" />
            </div>
            <div className="favorite_card__content">
              <h3 className="favorite_card__title">{item.name}</h3>
              <p className="favorite_card__description">{item.description}</p>
              <div className="favorite_card__footer">
                <button 
                  className="favorite_card__add_btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(item);
                  }}
                >
                  ADD TO CART
                </button>
                <span className="favorite_card__price">Rs. <span className="deal_card__price_valqq">{item.price}</span></span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modals for Ordering */}
      <ProductModal
        isOpen={isProductModalOpen}
        product={selectedProduct}
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={handleProductAddedToCart}
      />

      <CartModal
        isOpen={isCartModalOpen}
        cartData={cartData}
        onClose={() => setIsCartModalOpen(false)}
        onProceed={handleProceedToCheckout}
      />

      <OrderModal
        isOpen={isOrderModalOpen}
        orderDetails={orderDetails}
        onClose={() => setIsOrderModalOpen(false)}
        onBack={() => {
          setIsOrderModalOpen(false);
          setIsCartModalOpen(true);
        }}
      />
    </div>
  );
};

export default PersonalInformation;