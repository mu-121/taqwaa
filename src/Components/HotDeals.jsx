import React from "react";
import "./HotDeals.css";

const DEALS_DATA = [
  {
    id: 1,
    name: "CHEESE LOVERS PAIR",
    details: [
      "1 Medium Cheese Avalanche",
      "1 Medium Truffle Temptation",
    ],
    price: "1,400",
    image: "/Images/Craving/p11.svg",
    image1: "/Images/Craving/p22.svg",
  },
  {
    id: 2,
    name: "CHEESE LOVERS PAIR",
    details: [
      "1 Medium Cheese Avalanche",
      "1 Medium Truffle Temptation",
    ],
    price: "1,400",
    image: "/Images/Craving/p11.svg",
    image1: "/Images/Craving/p22.svg",
  },
  {
    id: 3,
    name: "CHEESE LOVERS PAIR",
    details: [
      "1 Medium Cheese Avalanche",
      "1 Medium Truffle Temptation",
    ],
    price: "1,400",
    image: "/Images/Craving/p11.svg",
    image1: "/Images/Craving/p22.svg",
  },
  {
    id: 4,
    name: "CHEESE LOVERS PAIR",
    details: [
      "1 Medium Cheese Avalanche",
      "1 Medium Truffle Temptation",
    ],
    price: "1,400",
    image: "/Images/Craving/p11.svg",
    image1: "/Images/Craving/p22.svg",
  },
];

const HotDeals = () => {
  return (
    <div className="hot_deals__section_container">
      {/* Top Checkerboard Strip */}
    

      <div className="hot_deals__content_wrapper">
        <div className="hot_deals__header">
          <h2 className="hot_deals__heading">HOT CRAVING, HOTTER DEALS</h2>
          <p className="hot_deals__subheading">
            From family-sized deals to solo deals, find the perfect offer for your cravings.
          </p>
        </div>

        <div className="hot_deals__grid">
          {DEALS_DATA.map((deal) => (
            <div key={deal.id} className="deal_card">
              <div className="deal_card__info_section">
                <h3 className="deal_card__title">{deal.name}</h3>
                <ul className="deal_card__details">
                  {deal.details.map((detail, index) => (
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

      {/* Bottom Checkerboard Strip */}
    
    </div>
  );
};

export default HotDeals;
