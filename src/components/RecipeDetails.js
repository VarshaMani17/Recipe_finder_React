import React from 'react';
import { useParams } from 'react-router-dom';
import recipesData from './RecipesData'; // Import your recipes data

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const recipe = recipesData.find(r => r.id === recipeId);

    if (!recipe) {
        return <h2>Recipe not found!</h2>;
    }

    return (
        <div className="recipe-details">
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.description}</p>
            <h3>Ingredients</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
        </div>
    );
};

export default RecipeDetails;
