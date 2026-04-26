import React, { useState, useEffect } from "react";
import "./HotDeals.css";
import { fetchProducts } from "../services/api";
import ProductModal from "./ProductModal";
import CartModal from "./CartModal";
import OrderModal from "./OrderModal";

const HotDeals = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal States
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartData, setCartData] = useState(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const getDeals = async () => {
      try {
        const allProducts = await fetchProducts();
        const hotDeals = allProducts.filter(p => p.category === "HOT DEALS").slice(0, 4);
        setDeals(hotDeals);
      } catch (error) {
        console.error("Error fetching hot deals:", error);
      } finally {
        setLoading(false);
      }
    };
    getDeals();
  }, []);

  const handleOpenProductModal = (product) => {
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

  if (loading) return null; // Or a spinner
  if (deals.length === 0) return null;

  return (
    <div className="hot_deals__section_container">
      <div className="checker_bar top"></div>
      <div className="hot_deals__content_wrapper">
        <div className="hot_deals__header">
          <h2 className="hot_deals__heading">HOT CRAVING, HOTTER DEALS</h2>
          <p className="hot_deals__subheading">
            From family-sized deals to solo deals, find the perfect offer for your cravings.
          </p>
        </div>

        <div className="hot_deals__grid">
          {deals.map((deal) => (
            <div key={deal._id || deal.id} className="deal_card">
              <div className="deal_card__content">
                <div className="deal_card__info">
                  <h3 className="deal_card__title">{deal.name}</h3>

                  <div className="deal_card__detail_group">
                    {(() => {
                      const items = (deal.description || "").split(",");
                      const isFour = items.length >= 4;
                      return (
                        <ul className={`deal_card__details${isFour ? " deal_card__details--four" : ""}`}>
                          {items.map((item, index) => (
                            <li key={index}>{item.trim()}</li>
                          ))}
                        </ul>
                      );
                    })()}

                    <div className="deal_card__price_container">
                      <span className="deal_card__currency">Rs.</span>
                      <span className="deal_card__amount">{deal.price}</span>
                    </div>

                    <button
                      className="deal_card__add_btn"
                      onClick={() => handleOpenProductModal(deal)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>

                <div className="deal_card__image_container">
                  <img src={deal.image} alt={deal.name} className="deal_card__image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="checker_bar bottom"></div>

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

export default HotDeals;
