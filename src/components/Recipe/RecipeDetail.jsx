import React from 'react';
import { useParams } from 'react-router-dom';
import './Recipe.css';

const RecipeDetail = () => {
  const { id } = useParams();
  // Fetch recipe details based on ID (replace with API call)
  const recipe = {
    id: 1,
    title: 'Pasta',
    description: 'Delicious pasta recipe',
    ingredients: 'Pasta, Sauce, Cheese',
    instructions: 'Cook pasta, add sauce, sprinkle cheese',
  };

  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;