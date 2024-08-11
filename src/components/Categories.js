// src/components/Categories.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="category veg">
        <h2>Veg</h2>
        <p>Explore a variety of delicious vegetarian recipes.</p>
        <Link to="/categories/veg" className="btn">Explore Veg</Link>
      </div>
      <div className="category non-veg">
        <h2>Non-Veg</h2>
        <p>Discover mouth-watering non-vegetarian dishes.</p>
        <Link to="/categories/nonveg" className="btn">Explore Non-Veg</Link>
      </div>
      <div className="category sweets">
        <h2>Sweets / Deserts</h2>
        <p>Indulge in delightful and sweet treats.</p>
        <Link to="/categories/sweets" className="btn">Explore Sweets</Link>
      </div>
    </div>
  );
};

export default Categories;
