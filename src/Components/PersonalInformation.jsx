import React from "react";
import "./PersonalInformation.css";

const FAVORITES_DATA = [
  {
    id: 1,
    name: "CROWN CRUST",
    description: "Scrumptious Pizza With A Yummy Blend Of Grilled Chicken, Olives, Onion, Capsicum.",
    price: "1,400",
    image: "/Images/Craving/pizza1.svg",
  },
  {
    id: 2,
    name: "STUFF CRUST PIZZA",
    description: "Special Chicken, Green Olives, Mushrooms with the Crust Filled with Cheese.",
    price: "1,400",
        image: "/Images/Craving/pizza1.svg",
  },
  {
    id: 3,
    name: "CROWN CRUST",
    description: "Scrumptious Pizza With A Yummy Blend Of Grilled Chicken, Olives, Onion, Capsicum.",
    price: "1,400",
      image: "/Images/Craving/pizza1.svg",
  },
];

const PersonalInformation = () => {
  return (
    <div className="personal_information__main_container">
      {/* Header Section */}
      <div className="personal_information__header">
        <div className="personal_information__titles">
          <h2 className="personal_information__heading">PERSONAL FAVORITES</h2>
          <p className="personal_information__subheading">
            Signature picks you’ll keep craving again and again.
          </p>
        </div>
        <button className="personal_information__view_all_btn">VIEW ALL</button>
      </div>

      {/* Favorites Cards Grid */}
      <div className="personal_information__grid">
        {FAVORITES_DATA.map((item) => (
          <div key={item.id} className="favorite_card">
            <div className="favorite_card__image_container">
              <img src={item.image} alt={item.name} className="favorite_card__image" />
            </div>
            <div className="favorite_card__content">
              <h3 className="favorite_card__title">{item.name}</h3>
              <p className="favorite_card__description">{item.description}</p>
              <div className="favorite_card__footer">
                <button className="favorite_card__add_btn">ADD TO CART</button>
                <span className="favorite_card__price">Rs. <span style={{fontSize:'45px'}}>{item.price}</span></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInformation;