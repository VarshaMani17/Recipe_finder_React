// src/components/Veg.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Veg.css'; // Import CSS file for styling
import kunafa from '../images/kunafa.jpeg'
import jamun from '../images/jamun.jpg'
import rasmalai from '../images/rasmalai.webp'
import mysorepak from '../images/mysorepak.jpeg'
import tiramisu from '../images/tiramisu.jpeg'
import kesri from '../images/kesri.jpeg'
import halwa from '../images/halwa.jpeg'
import rasgula from '../images/rasgula.jpeg'
import coconut from '../images/coconut.jpg'

const vegRecipes = [
  {
    id: 'jamun',
    title: 'Gulab Jamun',
    image: jamun,
    description: ' It is a milk-solid-based sweet from the Indian subcontinent, popular in India. It is made mainly from milk solids, traditionally from Khoya, which is milk reduced to the consistency of a soft dough.',
    ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices', 'Garlic', 'Ginger'],
    instructions: 'Fry onions until golden. Add garlic and ginger, cook briefly. Add tomatoes and spices, cook until oil separates. Add chicken, cook until done.'
  },
  {
    id: 'mysorepak',
    title: 'Mysore Pak',
    image: mysorepak,
    description: 'Mysore pak is an Indian sweet prepared in ghee. It originated in the city of Mysore, one of the major cities in the Indian state of Karnataka. ',
    ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices', 'Garlic', 'Ginger'],
    instructions: 'Fry onions until golden. Add garlic and ginger, cook briefly. Add tomatoes and spices, cook until oil separates. Add chicken, cook until done.'
  },
  {
    id: 'kesari',
    title: 'Kesari',
    image: kesri,
    description: 'Kesari is a pudding like sweet that is good to look at as it is to eat. To make this delicious sweet dish the rava is roasted/toasted in ghee',
    ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices', 'Garlic', 'Ginger'],
    instructions: 'Fry onions until golden. Add garlic and ginger, cook briefly. Add tomatoes and spices, cook until oil separates. Add chicken, cook until done.'
  },
  {
    id: 'halwa',
    title: 'Halwa',
    image: halwa,
    description: 'Halwa is said to have originated in the Middle East and the word comes from Arabic which means “sweet” & is a confectionary.',
    ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices', 'Garlic', 'Ginger'],
    instructions: 'Fry onions until golden. Add garlic and ginger, cook briefly. Add tomatoes and spices, cook until oil separates. Add chicken, cook until done.'
  },
  {
    id: 'rasgula',
    title: 'Rasgula',
    image: rasgula,
    description: 'Rasgulla is a milk based sweet made by curdling milk, draining the whey and kneading the milk solids to make balls.',
    ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices', 'Garlic', 'Ginger'],
    instructions: 'Fry onions until golden. Add garlic and ginger, cook briefly. Add tomatoes and spices, cook until oil separates. Add chicken, cook until done.'
  },
  {
    id: 'kunafa',
    title: 'Kunafa',
    image: kunafa,
    description: 'Kunafa- A traditional, Middle Eastern dessert made with fine semolina dough, soaked in sweet, sugar-based syrup, then layered with cheese, or with ingredients such as cream and nuts.',
    ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices', 'Garlic', 'Ginger'],
    instructions: 'Fry onions until golden. Add garlic and ginger, cook briefly. Add tomatoes and spices, cook until oil separates. Add chicken, cook until done.'
  },
  {
    id: 'rasmalai',
    title: 'Rasmalai',
    image: rasmalai,
    description: 'Ras malai consists of flattened balls of chhena soaked in malai (a type of clotted cream) flavoured with cardamom.',
    ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices', 'Garlic', 'Ginger'],
    instructions: 'Fry onions until golden. Add garlic and ginger, cook briefly. Add tomatoes and spices, cook until oil separates. Add chicken, cook until done.'
  },
  {
    id: 'tiramisu',
    title: 'Tiramisu',
    image: tiramisu,
    description: "Tiramisu is an Italian dessert that has layers of coffee-soaked ladyfingers and a cream made from mascarpone, eggs and sugar.",
    ingredients: [' chilly pepper', 'Tamarind juice', 'Tomato', 'Onions', 'Turmeric', 'Pepper', 'Garlic', 'Cumin', 'Curry leaves', 'Coriander', 'Mustard', 'Sea salt', 'Water'],
    instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
  },
  {
    id: 'coconut burfi',
    title: 'Coconut Burfi',
    image: coconut,
    description: "Coconut burfi recipe, or thengai burfi is very easy to make with just two main ingredients. No sugar syrup consistency required.",
    ingredients: [' chilly pepper', 'Tamarind juice', 'Tomato', 'Onions', 'Turmeric', 'Pepper', 'Garlic', 'Cumin', 'Curry leaves', 'Coriander', 'Mustard', 'Sea salt', 'Water'],
    instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
  },
];

const Sweets = () => {
  return (
    <div className="veg-container">
      <h2>Sweet Recipes</h2>
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

export default Sweets;
