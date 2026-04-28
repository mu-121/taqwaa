import React, { useEffect, useState } from "react";
import "./ChooseCraving.css";
import { fetchCategories, fetchFavorites } from "../services/api";
import { Link, useSearchParams } from "react-router-dom";

const ChooseCraving = ({ onCategoryChange, activeCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        const filteredCategories = data.filter(
          (cat) => cat.name !== "HOT DEALS",
        );

        // Move PIZZAS to the second position (index 1)
        const pizzaIndex = filteredCategories.findIndex(cat => cat.name.toUpperCase() === "PIZZAS" || cat.name.toUpperCase() === "PIZZA");
        if (pizzaIndex > -1) {
          const pizzaCat = filteredCategories.splice(pizzaIndex, 1)[0];
          // If at least one item remains, insert at index 1, otherwise just push it
          if (filteredCategories.length > 0) {
            filteredCategories.splice(1, 0, pizzaCat);
          } else {
            filteredCategories.push(pizzaCat);
          }
        }

        setCategories(filteredCategories);

        // Optional: Initialize parent state if it's empty
        if (!activeCategory && filteredCategories.length > 0) {
          const firstCat = filteredCategories[0].name;
          onCategoryChange(firstCat);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCategories();
  }, [activeCategory, onCategoryChange]);

  const getCategoryImage = (name) => {
    const upperName = name.toUpperCase();
    const map = {
      STARTERS: "/Images/Craving/s1.svg",
      PIZZAS: "/Images/ppp.svg",
      BURGERS: "/Images/Craving/s3.svg",
      SANDWICHES: "/Images/Craving/s4.svg",
      PLATTER: "/Images/Craving/ccc.svg",
      "SIDE CRAVING": "/Images/cc.svg",
      SIDES: "/Images/sides.svg",
      PASTAS: "/Images/pas.svg",
      "CHEEZY CRUNCH": "/Images/ccc.svg",
    };
    return map[upperName] || "/Images/Craving/s2.svg";
  };

  return (
    <div className="choose_craving__main_container">
      <p className="choose_craving__heading">CHOOSE YOUR CRAVING</p>

      <div className="choose_craving__options_container">
        {categories.map((cat, index) => {
          const isActive = activeCategory === cat.name;

          const sizeStyle =
            isActive
              ? { width: "100px", height: "100px" } // Active item is largest
              : index === 0
                ? { width: "90px", height: "90px" } // 1st is slightly large
                : { width: "80px", height: "80px" }; // others

          return (
            <div
              className={`choose_craving__option ${isActive ? "active-tab" : ""}`}
              key={cat._id}
              onClick={() => {
                localStorage.setItem("lastCategory", cat.name);
                onCategoryChange(cat.name);
              }}
            >
              <div
                className={`choose_craving__option_image_container22 ${
                  isActive ? "active" : ""
                }`}
              >
                <img
                  src={getCategoryImage(cat.name)}
                  alt={cat.name}
                  style={sizeStyle}
                />
              </div>

              <p className="choose_craving__option_label">
                {cat.name.charAt(0) + cat.name.slice(1).toLowerCase()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseCraving;
