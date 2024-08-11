import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/recipes" className="nav-link">Recipes</Link>
        </li>
        <li className="nav-item">
          <Link to="/categories" className="nav-link">Categories</Link>
        </li>
        <li>
              <Link to="/categories/veg"></Link>
            </li>
            <li>
              <Link to="/categories/nonveg"></Link>
            </li>
            <li>
              <Link to="/categories/sweets"></Link>
            </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login/Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
