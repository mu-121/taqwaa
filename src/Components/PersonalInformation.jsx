import React, { useEffect, useState } from "react";
import "./PersonalInformation.css";
import { fetchFavorites } from "../services/api";
import { useNavigate } from "react-router-dom";

const PersonalInformation = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const data = await fetchFavorites();
        setFavorites(data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      } finally {
        setLoading(false);
      }
    };
    getFavorites();
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/menu?productId=${productId}`);
  };

  if (loading) return null;
  if (favorites.length === 0) return null;

  return (
    <div className="personal_information__main_container">
      <div className="personal_information__header">
        <div className="personal_information__titles">
          <h2 className="personal_information__heading">PERSONAL FAVORITES</h2>
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
            onClick={() => handleProductClick(item._id)}
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
                    handleProductClick(item._id);
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
    </div>
  );
};

export default PersonalInformation;