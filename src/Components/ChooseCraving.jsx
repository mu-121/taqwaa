import React from "react";
import "./ChooseCraving.css";

/* ✅ DATA DEFINED BEFORE COMPONENT */
const CRAVING_OPTIONS = [
  { img: "starter", label: "Starters" },
  { img: "pizza", label: "Pizzas" },
  { img: "burger", label: "Burgers" },
  { img: "sandwich", label: "Sandwiches" },
  { img: "pasta", label: "Pastas" },
  { img: "sides", label: "Sides" },
];

const ChooseCraving = () => {
  return (
    <div className="choose_craving__main_container">
      <p className="choose_craving__heading">
        CHOOSE YOUR CRAVING
      </p>

      <div className="choose_craving__options_container">
        {CRAVING_OPTIONS.map((item) => (
          <div className="choose_craving__option" key={item.label}>
            <img
              src={`/Images/Craving/${item.img}.svg`}
              alt={item.label}
            />
            <p className="choose_craving__option_label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseCraving;