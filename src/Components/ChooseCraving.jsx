import React, { useEffect, useState } from "react";
import "./ChooseCraving.css";
import { fetchCategories } from "../services/api";
import { Link, useSearchParams } from "react-router-dom";

const ChooseCraving = () => {
  const [categories, setCategories] = useState([]);
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get("category");
  
  // Persist category selection
  const [lastSelectedCategory, setLastSelectedCategory] = useState(
    localStorage.getItem("lastCategory") || "PIZZAS"
  );

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        // Filter out HOT DEALS if you don't want them in the selection row
        const filteredCategories = data.filter(cat => cat.name !== "HOT DEALS");
        setCategories(filteredCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCategories();
  }, []);

  // Sync localStorage if currentCategory changes (e.g. from URL in menu page)
  useEffect(() => {
    if (currentCategory) {
      localStorage.setItem("lastCategory", currentCategory);
      setLastSelectedCategory(currentCategory);
    }
  }, [currentCategory]);

  const getCategoryImage = (name) => {
    const upperName = name.toUpperCase();
    const map = {
      "STARTERS": "/Images/Craving/s1.svg",
      "PIZZAS": "/Images/ppp.svg",
      "BURGERS": "/Images/Craving/s3.svg",
      "SANDWICHES": "/Images/Craving/s4.svg",
      "PLATTER": "/Images/Craving/ccc.svg",
      "SIDE CRAVING": "/Images/cc.svg",
      "SIDES": "/Images/sides.svg",
      "PASTAS": "/Images/pas.svg",
      "CHEEZY CRUNCH": "/Images/ccc.svg"
    };
    return map[upperName] || "/Images/Craving/s2.svg";
  };

  return (
    <div className="choose_craving__main_container">
      <p className="choose_craving__heading">
        CHOOSE YOUR CRAVING
      </p>

      <div className="choose_craving__options_container">
        {categories.map((cat) => {
          const isActive = (currentCategory || lastSelectedCategory) === cat.name;
          return (
            <Link 
              to={`/menu?category=${cat.name}`} 
              className="choose_craving__option" 
              key={cat._id}
              style={{ textDecoration: 'none' }}
              onClick={() => {
                localStorage.setItem("lastCategory", cat.name);
                setLastSelectedCategory(cat.name);
              }}
            >
              <div className={`choose_craving__option_image_container22 ${isActive ? "active" : ""}`}>
                <img
                  src={getCategoryImage(cat.name)}
                  alt={cat.name}
                  width="80"
                  height="80"
                />
              </div>
              <p className="choose_craving__option_label">{cat.name.charAt(0) + cat.name.slice(1).toLowerCase()}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseCraving;