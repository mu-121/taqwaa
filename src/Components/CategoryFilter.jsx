import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="category_filter__container">
      <div className="category_filter__wrapper">
        {categories.map((category) => (
          <button
            key={category}
            className={`category_filter__btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
