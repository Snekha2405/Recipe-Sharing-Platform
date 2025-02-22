import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from the backend
    const fetchRecipes = async () => {
      // Replace with your API call
      const mockRecipes = [
        { id: 1, title: 'Pasta', description: 'Delicious pasta recipe' },
        { id: 2, title: 'Pizza', description: 'Homemade pizza recipe' },
      ];
      setRecipes(mockRecipes);
    };
    fetchRecipes();
  }, []);

  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>View Recipe</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;