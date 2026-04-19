import React, { useEffect, useState } from "react";
import "./HotDeals.css";
import { fetchProducts } from "../services/api";

const HotDeals = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDeals = async () => {
      try {
        const products = await fetchProducts();
        const hotDeals = products.filter(p => p.category === "HOT DEALS");
        setDeals(hotDeals);
      } catch (err) {
        console.error("Error fetching deals:", err);
      } finally {
        setLoading(false);
      }
    };
    loadDeals();
  }, []);

  if (loading) return null; // Or a subtle loading indicator
  if (deals.length === 0) return null;

  return (
    <div className="hot_deals__section_container">
      <div className="hot_deals__content_wrapper">
        <div className="hot_deals__header">
          <h2 className="hot_deals__heading">HOT CRAVING, HOTTER DEALS</h2>
          <p className="hot_deals__subheading">
            From family-sized deals to solo deals, find the perfect offer for your cravings.
          </p>
        </div>

        <div className="hot_deals__grid">
          {deals.map((deal) => (
            <div key={deal._id} className="deal_card">
              <div className="deal_card__info_section">
                <h3 className="deal_card__title">{deal.name}</h3>
                <ul className="deal_card__details">
                  {deal.details && deal.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <div className="deal_card__footer">
                  <button className="deal_card__add_btn">ADD TO CART</button>
                  <div className="deal_card__price">
                    Rs. <span className="deal_card__price_val">{deal.price}</span>
                  </div>
                </div>
              </div>
              <div className="deal_card__image_section">
                <img src={deal.image} alt={deal.name} className="deal_card__image left" />
                <img src={deal.image1} alt={deal.name} className="deal_card__image right" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
