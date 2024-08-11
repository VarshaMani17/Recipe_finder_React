import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import recipesData from './RecipesData';


const Recipes = () => {
    return (
        <div className="recipe-cards">
            {recipesData.map(recipe => (
                <div className="recipe-card" key={recipe.id}>
                    <img src={recipe.image} alt={recipe.title} />
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                    <Link to={`/recipe/${recipe.id}`} className="btn">View Recipe</Link>
                </div>
            ))}
        </div>
    );
};

export default Recipes;
