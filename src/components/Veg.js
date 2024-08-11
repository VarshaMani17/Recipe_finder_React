// src/components/Veg.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Veg.css'; // Import CSS file for styling
import Channa from '../images/channa.jpg'
import sambarImage from '../images/sambar.jpeg';
import pulaoImage from '../images/pulao.jpeg';
import Panner from '../images/pannermasal.jpeg';
import naan from '../images/butternaan.jpg';
import rasam from '../images/rasam.jpg';
import potatofry from '../images/potatofry.jpg';
import curd from '../images/curd.webp'
import lemon from '../images/lemon.jpeg'


const vegRecipes = [
 
  {
    id: 'chana-masala',
    title: 'Chana Masala',
    image: Channa,
    description: 'Chana masala is a North Indian curried dish made with white chickpeas, onions, tomatoes, spices and herbs. Chana is a Hindi word for Chickpeas and Masala here refers to a spiced gravy.',
    ingredients: ['Chickpeas', 'Onions', 'Tomatoes', 'Spices', 'Ginger', 'Garlic'],
    instructions: 'Cook chickpeas with onions, tomatoes, and spices to make a flavorful curry.'
  },
  {
    id: 'curd rice',
    title: 'Curd Rice',
    image: curd ,
    description: "Curd Rice is a South Indian dish where soft cooked mushy rice is simply mixed with curd (Indian yogurt) and salt. ",
    ingredients: ['Rice', 'Vegetables', 'Spices', 'Onions', 'Ginger', 'Garlic'],
    instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
},
  {
    id: 'rasam',
    title: 'Rasam',
    image: rasam,
    description: "Rasam, a soup of spices, is a traditional South Indian food. It is traditionally prepared using tamarind juice .",
    ingredients: [' chilly pepper', 'Tamarind juice', 'Tomato', 'Onions', 'Turmeric', 'Pepper','Garlic','Cumin','Curry leaves','Coriander','Mustard','Sea salt','Water'],
    instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
},
  {
    id: 'sambar',
    title: 'Sambar',
    image: sambarImage,
    description: 'Sambar is a popular dish in South Indian cuisine.',
    ingredients: ['Lentils', 'Tamarind', 'Vegetables', 'Spices', 'Mustard Seeds', 'Curry Leaves'],
    instructions: 'Cook lentils separately. Prepare tamarind extract. Cook vegetables with spices, add tamarind and lentils. Simmer until flavors blend.'
},
{
    id: 'pulao',
    title: 'Pulao',
    image: pulaoImage,
    description: 'Pulao is a delicious one-pot Indian dish made with rice, vegetables, spices, and herbs.',
    ingredients: ['Rice', 'Vegetables', 'Spices', 'Onions', 'Ginger', 'Garlic'],
    instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
},
{
    id: 'panner',
    title: 'Panner Butter Masala',
    image: Panner,
    description: "This paneer butter masala is a curry lover's dream!! Soft paneer dunked in a creamy, silky, super flavorful and delicious curry.",
    ingredients: ['Rice', 'Vegetables', 'Spices', 'Onions', 'Ginger', 'Garlic'],
    instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
},
{
    id: 'butter naan',
    title: 'Butter Naan',
    image: naan,
    description: "Naan is a single-layer bread with a light and slightly fluffy texture and golden-brown spots from the baking process. ",
    ingredients: ['Rice', 'Vegetables', 'Spices', 'Onions', 'Ginger', 'Garlic'],
    instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
},
{
    id: 'potato fry',
    title: 'Potato Fry',
    image: potatofry,
    description: "Potato fry is an Indian side dish made with potatoes, spices and herbs. Also known as aloo fry.",
    ingredients: ['Rice', 'Vegetables', 'Spices', 'Onions', 'Ginger', 'Garlic'],
    instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
},
{
    id: 'lemon rice',
    title: 'Lemon Rice',
    image: lemon ,
    description: "Lemon rice recipe also known as chitrannna or nimmakaya pulihora is a South Indian dish made with rice, tempering spices & curry leaves. ",
    ingredients: ['Rice', 'Vegetables', 'Spices', 'Onions', 'Ginger', 'Garlic'],
    instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
},
];

const Veg = () => {
  return (
    <div className="veg-container">
      <h2>Vegetarian Recipes</h2>
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

export default Veg;
