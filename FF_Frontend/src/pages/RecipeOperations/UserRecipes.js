import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserService from "../../services/UserService";
import RecipeService from "../../services/RecipeService";
import "./UserRecipes.css";

export default function UserRecipes() {
  const [postedRecipes, setPostedRecipes] = useState([]);

  useEffect(() => {
    const fetchPostedRecipes = async () => {
      try {
        const userId = localStorage.getItem("userId");
        console.log(userId);
        const recipesResponse = await UserService.getUserRecipes(userId);
        setPostedRecipes(recipesResponse.data);
      } catch (error) {
        console.error("Error fetching posted recipes:", error);
      }
    };
    fetchPostedRecipes();
  }, []);

  const deleteRecipe = async (recipeId) => {
    try {
      await RecipeService.deleteRecipe(recipeId);
      setPostedRecipes(
        postedRecipes.filter((recipe) => recipe.recipeId !== recipeId)
      );
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="recipe-card">
        <div style={{ marginTop: "2%" }} id="userrecipies-card">
          <h2>
            <b>User Recipies</b>
          </h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Recipe Name</th>
                <th>Instructions</th>
                <th>Cook Time</th>
                <th>Total Calories</th>
                <th>Recipe Type</th>
                <th>Recipe Description</th>
                <th>Recipe Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {postedRecipes &&
                postedRecipes.map((recipe) => (
                  <tr key={recipe.recipeId}>
                    <td>{recipe.recipeName}</td>
                    <td>{recipe.instructions}</td>
                    <td>{recipe.cookTime}</td>
                    <td>{recipe.totalCalories}</td>
                    <td>{recipe.recipeType}</td>
                    <td>{recipe.recipeDescription}</td>
                    <td>
                      {recipe.recipe_image ? (
                        <img
                          src={`data:image/jpeg;base64,${recipe.recipe_image}`}
                          alt={recipe.recipeName}
                        />
                      ) : (
                        <span>No Image</span>
                      )}
                    </td>
                    <td>
                      <Link to={`/user/editrecipe/${recipe.recipeId}`}>
                        <button className="btn btn-sm rounded-pill">
                          Edit
                        </button>
                      </Link>
                      &nbsp;
                      <button
                        className="btn btn-sm rounded-pill"
                        onClick={() => deleteRecipe(recipe.recipeId)}
                      >
                        Delete
                      </button>
                      &nbsp;
                      <Link to={`/user/recipedetails/${recipe.recipeId}`}>
                        <button className="btn btn-sm rounded-pill">
                          View
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div id="addrec-div">
            <Link to="/user/addrecipe">
              <button className="btn rounded-pill ">Add New Recipe</button>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
