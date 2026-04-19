import React, { useEffect, useState } from "react";
import "./ChooseCraving.css";
import { fetchCategories } from "../services/api";
import { Link } from "react-router-dom";

const ChooseCraving = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCategories();
  }, []);

  // Map backend names to image filenames
  const getCategoryImage = (name) => {
    const map = {
      "STARTERS": "starter",
      "PIZZAS": "pizza",
      "BURGERS": "burger",
      "SANDWICHES": "sandwich",
      "PLATTER": "pasta", // Fallback image
      "SIDES": "sides"
    };
    return map[name] || "pizza";
  };

  return (
    <div className="choose_craving__main_container">
      <p className="choose_craving__heading">
        CHOOSE YOUR CRAVING
      </p>

      <div className="choose_craving__options_container">
        {categories.map((cat) => (
          <Link 
            to={`/menu?category=${cat.name}`} 
            className="choose_craving__option" 
            key={cat._id}
            style={{ textDecoration: 'none' }}
          >
            <img
              src={`/Images/Craving/${getCategoryImage(cat.name)}.svg`}
              alt={cat.name}
            />
            <p className="choose_craving__option_label">{cat.name.charAt(0) + cat.name.slice(1).toLowerCase()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChooseCraving;