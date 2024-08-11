// src/components/Veg.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Veg.css'; // Import CSS file for styling
import chickenImage from '../images/chicken.jpeg';
import briyaniImage from '../images/briyani.jpeg';
import chicken65 from '../images/chicken65.jpg';
import mutton from '../images/muttonbriyani.jpg'
import ctikka from '../images/ctikka.jpg'
import cnoodles from '../images/cnoodles.jpg'
const vegRecipes = [

  {
    id: 'briyani',
    title: 'Briyani',
    image: briyaniImage,
    description: 'Biryani is a mixed rice dish, mainly popular in South Asia.',
    ingredients: ['Rice', 'Chicken', 'Spices', 'Onions', 'Yogurt'],
    instructions: 'Cook rice separately. Marinate chicken with spices and yogurt. Fry onions, add marinated chicken, and cook until done. Layer cooked rice and chicken, cook on low heat.'
},
{
    id: 'chicken-curry',
    title: 'Chicken Curry',
    image: chickenImage,
    description: 'Chicken curry is a South Asian dish originating from the Indian subcontinent.',
    ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices', 'Garlic', 'Ginger'],
    instructions: 'Fry onions until golden. Add garlic and ginger, cook briefly. Add tomatoes and spices, cook until oil separates. Add chicken, cook until done.'
},
{
    id: 'ctikka',
    title: 'Chiken Tikka',
    image: ctikka,
    description: 'Chicken tikka, a delicious Indian appetizer! Marinated chicken cubes (aka kebabs), threaded on skewers and grilled to perfection.',
    ingredients: ['Rice', 'Chicken', 'Spices', 'Onions', 'Yogurt'],
    instructions: 'Cook rice separately. Marinate chicken with spices and yogurt. Fry onions, add marinated chicken, and cook until done. Layer cooked rice and chicken, cook on low heat.'
},
{
    id: 'cnoodles',
    title: 'Chicken Noodles',
    image: cnoodles,
    description: 'Chicken noodles are a delicious flavor packed meal of stir fried noodles, chicken, vegetables and sauces.',
    ingredients: ['Rice', 'Chicken', 'Spices', 'Onions', 'Yogurt'],
    instructions: 'Cook rice separately. Marinate chicken with spices and yogurt. Fry onions, add marinated chicken, and cook until done. Layer cooked rice and chicken, cook on low heat.'
},
{
    id: 'chicken 65',
    title: 'Chicken 65',
    image:chicken65,
    description: "Chicken 65 is a South Indian deep fried chicken appetizer, originated in Hotel Buhari in Chennai.",
    ingredients: ['Rice', 'Vegetables', 'Spices', 'Onions', 'Ginger', 'Garlic'],
    instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
},
{
    id: 'mutton briyani',
    title: 'Mutton Briyani',
    image:mutton,
    description: "Mutton Biryani is a royal dish with beautifully spiced and fragrant layers of biryani rice centered with juicy, tender mutton",
    ingredients: ['Rice', 'Vegetables', 'Spices', 'Onions', 'Ginger', 'Garlic'],
    instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
},
];

const NonVeg = () => {
  return (
    <div className="veg-container">
      <h2>Non - Vegetarian Recipes</h2>
      <div className="veg-recipes">
        {vegRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`} className="btn">View Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NonVeg;
