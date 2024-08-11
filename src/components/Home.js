// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file for styling
import briyani from '../images/briyani.jpeg';
import chicken from '../images/chicken.jpeg';
import sambar from '../images/sambar.jpeg';
import pulao from '../images/pulao.jpeg';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">
          <Link to="/">Recipe Finder</Link>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Find Your Next Delicious Recipe</h1>
            <p>Explore thousands of recipes from around the world.</p>
            {/* Optionally, add a search bar here */}
          </div>
        </section>

        <section className="featured-recipes">
          <h2>Featured Recipes</h2>
          <div className="recipe-cards">
            {/* Example recipe cards */}
            <div className="recipe-card">
              <img src={briyani} alt="Briyani" />
              <h3>Briyani</h3>
              <p>Biryani is a mixed rice dish, mainly popular in South Asia.</p>
              {/* <Link to="./recipepage" className="btn">View Recipe</Link> */}
            </div>
            <div className="recipe-card">
              <img src={chicken} alt="Chicken Curry" />
              <h3>Chicken Curry</h3>
              <p>Chicken curry or curry/curried chicken is a South Asian dish originating from the Indian subcontinent.</p>
              {/* <Link to="/recipe/chicken-curry" className="btn">View Recipe</Link> */}
            </div>
            <div className="recipe-card">
              <img src={sambar} alt="Sambar" />
              <h3>Sambar</h3>
              <p>It originates from South Indian cuisine and is now popular in large parts of India and beyond.</p>
              {/* <Link to="/recipe/sambar" className="btn">View Recipe</Link> */}
            </div>
            <div className="recipe-card">
              <img src={pulao} alt="Pulao" />
              <h3>Pulao</h3>
              <p>Pulao, also known as veg pulao, is a delicious one-pot Indian dish made with rice, vegetables, spices, and herbs.</p>
              {/* <Link to="/recipe/sambar" className="btn">View Recipe</Link> */}
            </div>
            {/* Add more recipe cards as needed */}
          </div>
        </section>

        {/* Add more sections like Categories, About, etc. */}
      </main>

      <br /><br />

      <footer className="footer">
        <div className="footer-links">
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="social-media">
          {/* Add social media icons/links */}
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
