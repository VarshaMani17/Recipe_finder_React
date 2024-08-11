import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/Home';
import RecipeDetails from './components/RecipeDetails';
import Navigation from './components/Navigation';
import Recipes from './components/Recipe'; // Import the Recipes component
import Categories from './components/Categories';
import Veg from './components/Veg';
import NonVeg from './components/Nonveg';
import Sweets from './components/Sweets';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation /> {/* Include the Navigation component */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/recipes" element={<Recipes/>} /> 
          <Route path="/categories" element={<Categories/>} /> 
          <Route path="/categories/veg" element={<Veg />} />
          <Route path="/categories/nonveg" element={<NonVeg />} />
          <Route path="/categories/sweets" element={<Sweets />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
