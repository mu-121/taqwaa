import React, { useState } from 'react';
import './CartModal.css';

const CartModal = ({ isOpen, cartData, onClose }) => {
  if (!isOpen || !cartData) return null;

  const { product, style, drink } = cartData;
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const basePrice = parseInt(style.price.replace(',', '')) || 0;
  const drinkPrice = parseInt(drink.price.replace(',', '')) || 0;
  const totalItemPrice = (basePrice + drinkPrice) * quantity;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBackdropClick = (e) => {
    if (e.target.className === 'cart_modal__overlay') {
      onClose();
    }
  };

  return (
    <div className="cart_modal__overlay" onClick={handleBackdropClick}>
      <div className="cart_modal__container">
        <h2 className="cart_modal__main_title">YOUR CART</h2>

        <div className="cart_modal__item_card">
          <div className="cart_modal__item_image_container">
            <img src={product.image} alt={product.name} className="cart_modal__item_image" />
          </div>
          <div className="cart_modal__item_details">
            <h3 className="cart_modal__item_name">{product.name}</h3>
            <p className="cart_modal__item_style">{style.label}</p>
            <div className="cart_modal__item_price">
              Rs. <span className="cart_modal__item_price_val">{style.price}</span>
            </div>
          </div>
          <div className="cart_modal__quantity_selector">
          <button
  className="cart_modal__qty_btn"
  onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : onClose())}
>
  {quantity > 1 ? (
    "-"
  ) : (
    <img
      src="/Images/HeroSection/del.svg"
      alt="delete"
      className="w-4 h-4 object-contain"
    />
  )}
</button>
            <span className="cart_modal__qty_val">{quantity}</span>
            <button 
              className="cart_modal__qty_btn" 
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="cart_modal__section_group">
          <h3 className="cart_modal__section_title">DROP ZONE</h3>
          <div className="cart_modal__form">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              className="cart_modal__input"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input 
              type="text" 
              name="phone" 
              placeholder="Phone Number" 
              className="cart_modal__input"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <input 
              type="text" 
              name="address" 
              placeholder="Address" 
              className="cart_modal__input"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="cart_modal__section_group">
          <h3 className="cart_modal__section_title">TOTAL</h3>
          <p className="cart_modal__delivery_time">Estimated Delivery Time 45 Mins</p>
          <div className="cart_modal__total_row">
            <span>{quantity} x {product.name} PIZZA</span>
            <span className="cart_modal__highlight_text">Rs. <span className="cart_modal__item_price_val">{totalItemPrice.toLocaleString()}</span></span>
          </div>
          <div className="cart_modal__total_row">
            <span>DISCOUNT</span>
            <span className="cart_modal__highlight_text">Rs. <span className="cart_modal__item_price_val">0</span></span>
          </div>
          <hr className="cart_modal__divider" />
        </div>

        <div className="cart_modal__due_payment_row">
          <span className="cart_modal__due_label">DUE PAYMENT</span>
          <span className="cart_modal__due_amount">Rs. <span className="cart_modal__due_amount_val">{totalItemPrice.toLocaleString()}</span></span>
        </div>

        <div className="cart_modal__footer">
          <button className="cart_modal__proceed_btn" onClick={() => {
            console.log('Final Order:', { ...formData, items: [{ ...cartData, quantity }] });
            onClose();
          }}>
            PROCEED
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
