import React, { useState } from 'react';
import './ProductModal.css';

const ProductModal = ({ isOpen, product, onClose }) => {
  if (!isOpen || !product) return null;

  const [selectedStyle, setSelectedStyle] = useState('SMALL');
  const [selectedDrink, setSelectedDrink] = useState('7UP');

  const STYLES = [
    { label: 'SMALL', price: '600' },
    { label: 'MEDIUM', price: '1,200' },
    { label: 'LARGE', price: '1,800' },
    { label: 'EXTRA LARGE', price: '2,600' }
  ];

  const DRINKS = [
    { label: '7UP', price: '90' },
    { label: 'PEPSI', price: '90' },
    { label: 'MIRINDA', price: '90' }
  ];

  const handleBackdropClick = (e) => {
    if (e.target.className === 'product_modal__overlay') {
      onClose();
    }
  };

  return (
    <div className="product_modal__overlay" onClick={handleBackdropClick}>
      <div className="product_modal__container">
        <button className="product_modal__close" onClick={onClose}>×</button>
        
        <div className="product_modal__image_section">
          <img src={product.image} alt={product.name} className="product_modal__image" />
        </div>

        <div className="product_modal__info_section">
          <h2 className="product_modal__title">{product.name}</h2>
          <p className="product_modal__description">{product.description}</p>

          <div className="product_modal__price_row">
            <span className="product_modal__label">STARTING PRICE</span>
            <span className="product_modal__starting_price">Rs. {product.price}</span>
          </div>

          <div className="product_modal__selection_group">
            <h3 className="product_modal__group_title">SELECT YOUR STYLE</h3>
            {STYLES.map((style) => (
              <label key={style.label} className="product_modal__option">
                <input
                  type="radio"
                  name="style"
                  value={style.label}
                  checked={selectedStyle === style.label}
                  onChange={() => setSelectedStyle(style.label)}
                />
                <span className="product_modal__radio_custom"></span>
                <span className="product_modal__option_label">{style.label}</span>
                <span className="product_modal__option_price">Rs. {style.price}</span>
              </label>
            ))}
          </div>

          <div className="product_modal__selection_group">
            <h3 className="product_modal__group_title">SELECT YOUR DRINK</h3>
            {DRINKS.map((drink) => (
              <label key={drink.label} className="product_modal__option">
                <input
                  type="radio"
                  name="drink"
                  value={drink.label}
                  checked={selectedDrink === drink.label}
                  onChange={() => setSelectedDrink(drink.label)}
                />
                <span className="product_modal__radio_custom"></span>
                <span className="product_modal__option_label">{drink.label}</span>
                <span className="product_modal__option_price">Rs. {drink.price}</span>
              </label>
            ))}
          </div>

          <div className="product_modal__footer">
            <button className="product_modal__add_btn" onClick={() => {
              console.log('Added to cart:', { product, selectedStyle, selectedDrink });
              onClose();
            }}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
