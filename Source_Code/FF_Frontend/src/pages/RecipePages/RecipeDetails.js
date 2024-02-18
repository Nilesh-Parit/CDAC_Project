import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import RecipeService from "../../services/RecipeService";
import "./RecipeDetails.css";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const recipeResponse = await RecipeService.getRecipeById(id);
        const recipeData = recipeResponse.data;
        const ingredientsResponse = await RecipeService.getIngredientsByRecipe(
          id
        );
        const ingredientsData = ingredientsResponse.data;
        const updatedRecipe = {
          ...recipeData,
          recipeIngredients: ingredientsData,
        };
        setRecipe(updatedRecipe);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };
    fetchRecipeDetails();
  }, [id]);

  return (
    <>
      <br /> <br /> <br /> <br />
      <div className="container">
        {recipe ? (
          <div className="card" id="recipedetail-card">
            <div className="card-body" id="recipedetail-card">
              <h5 className="card-title">Recipe Information</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                ID: {recipe.recipeId}
              </h6>
              <p className="card-text">Name: {recipe.recipeName}</p>
              <p className="card-text">Instructions: {recipe.instructions}</p>
              <p className="card-text">Cook Time: {recipe.cookTime}</p>
              <p className="card-text">
                Total Calories: {recipe.totalCalories}
              </p>
              <p className="card-text">Type: {recipe.recipeType}</p>
              <p className="card-text">
                Description: {recipe.recipeDescription}
              </p>
              {recipe.recipe_image && (
                <img
                  src={`data:image/jpeg;base64,${recipe.recipe_image}`}
                  alt={recipe.recipeName}
                />
              )}
              {recipe.recipeIngredients && (
                <div>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Ingredients:
                  </h6>
                  <ul>
                    {recipe.recipeIngredients.map((ingredient) => (
                      <li key={ingredient.ingredientId}>
                        {ingredient.ingredientName}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Link
              to="/user/userrecipes"
              className="btn btn-primary rounded-pill"
              id="back-btn"
            >
              Back
            </Link>
            <br />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <br /> <br /> <br /> <br />
    </>
  );
}
