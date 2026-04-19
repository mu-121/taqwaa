import React from 'react';
import './MenuItemCard.css';

const MenuItemCard = ({ name, description, price, image }) => {
  return (
    <div className="menu_item__card">
      <div className="menu_item__image_container">
        <img src={image} alt={name} className="menu_item__image" />
      </div>
      <div className="menu_item__info">
        <h3 className="menu_item__name">{name}</h3>
        <p className="menu_item__description">{description}</p>
        <div className="menu_item__footer">
          <button className="menu_item__add_btn">ADD TO CART</button>
          <div className="menu_item__price">
            Rs. <span className="menu_item__price_val">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
