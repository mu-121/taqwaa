import React, { useState } from 'react';
import './MenuItemCard.css';
import { toggleProductFavorite } from '../services/api';

const MenuItemCard = ({ product, onAddToCart, onToggleFavorite }) => {
  const { _id, name, description, price, image, isFavorite } = product;

  const handleToggleFavorite = async (e) => {
    e.stopPropagation();
    try {
      // Optimistically update the UI in the parent
      onToggleFavorite(_id || product.id);
      await toggleProductFavorite(_id || product.id);
    } catch (error) {
      console.error("Error toggling favorite:", error);
      // Revert if API fails
      onToggleFavorite(_id || product.id);
    }
  };
  
  return (
    <div className="menu_item__card">
      <div className="menu_item__image_container">
        <img src={image} alt={name} className="menu_item__image" />
        <button 
          className={`menu_item__favorite_btn ${isFavorite ? 'active' : ''}`}
          onClick={handleToggleFavorite}
          aria-label="Toggle favorite"
        >
          <svg viewBox="0 0 24 24" className="menu_item__heart_icon">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
      <div className="menu_item__info">
        <h3 className="menu_item__name">{name}</h3>
        <p className="menu_item__description">{description}</p>
        <div className="menu_item__footer">
          <button 
            className="menu_item__add_btn" 
            onClick={() => onAddToCart(product)}
          >
            ADD TO CART
          </button>
          <div className="menu_item__price">
            Rs. <span className="menu_item__price_val">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
