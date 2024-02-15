import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RecipeService from "../services/RecipeService";
import "../styles/editrecipe.css";

export default function EditRecipe() {
  const { id } = useParams();
  const [formDetails, setFormDetails] = useState({
    recipeId: "",
    recipeName: "",
    instructions: "",
    cookTime: "",
    totalCalories: "",
    recipeType: "",
    recipeDescription: "",
    recipeIngredients: [],
    recipe_image: null,
  });

  const navigate = useNavigate();
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await RecipeService.getRecipeById(id);
        const recipe = response.data;
        const ingredientsResponse = await RecipeService.getIngredientsByRecipe(
          id
        );
        const ingredients = ingredientsResponse.data;

        const updatedFormDetails = {
          ...recipe,
          recipeIngredients: ingredients,
        };

        setFormDetails(updatedFormDetails);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  const updateRecipe = () => {
    if (
      formDetails.recipeId === "" ||
      formDetails.recipeName === "" ||
      formDetails.instructions === "" ||
      formDetails.cookTime === "" ||
      formDetails.totalCalories === "" ||
      formDetails.recipeType === "" ||
      formDetails.recipeDescription === ""
    ) {
      alert("Please fill in all the fields");
      return;
    }

    RecipeService.updateRecipe(formDetails)
      .then((result) => {
        setFormDetails({
          recipeId: "",
          recipeName: "",
          instructions: "",
          cookTime: "",
          totalCalories: "",
          recipeType: "",
          recipeDescription: "",
          recipe_image: null,
          recipeIngredients: [],
        });
        navigate("/userrecipes");
      })
      .catch((err) => {
        console.log("Error occurred", err);
      });
  };

  return (
    <>
      <h1
        id="header"
        style={{ marginTop: "8%", fontFamily: "black", color: "#29293d" }}
        className="text-center"
      >
        FlavourFeed
      </h1>
      <div className="card " id="editrecipe-card">
        <div
          className="card-body"
          id="editr-card-body"
          style={{ marginTop: "2%" }}
        >
          <h2 className="text-center" id="editrheader">
            <b>Edit your recipe</b>
          </h2>
          <form>
            <label htmlFor="recipeId">Recipe Id:</label>
            <input
              type="text"
              className="form-control"
              id="recipeId"
              name="recipeId"
              value={formDetails.recipeId}
              readOnly
            />

            <label htmlFor="recipeName">Recipe Name</label>
            <input
              type="text"
              className="form-control"
              id="recipeName"
              name="recipeName"
              value={formDetails.recipeName}
              onChange={(event) => {
                setFormDetails({
                  ...formDetails,
                  recipeName: event.target.value,
                });
              }}
            />

            <label htmlFor="instructions">Instructions</label>
            <input
              type="text"
              className="form-control"
              id="instructions"
              name="instructions"
              value={formDetails.instructions}
              onChange={(event) => {
                setFormDetails({
                  ...formDetails,
                  instructions: event.target.value,
                });
              }}
            />

            <label htmlFor="cookTime">Cook Time</label>
            <input
              type="text"
              className="form-control"
              id="cookTime"
              name="cookTime"
              value={formDetails.cookTime}
              onChange={(event) => {
                setFormDetails({
                  ...formDetails,
                  cookTime: event.target.value,
                });
              }}
            />

            <label htmlFor="totalCalories">Total Calories</label>
            <input
              type="text"
              className="form-control"
              id="totalCalories"
              name="totalCalories"
              value={formDetails.totalCalories}
              onChange={(event) => {
                setFormDetails({
                  ...formDetails,
                  totalCalories: event.target.value,
                });
              }}
            />

            <label htmlFor="recipeType">Recipe Type</label>
            <select
              className="form-control"
              id="recipeType"
              name="recipeType"
              value={formDetails.recipeType}
              onChange={(event) => {
                setFormDetails({
                  ...formDetails,
                  recipeType: event.target.value,
                });
              }}
            >
              <option value="">Select Recipe Type</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>

            <label htmlFor="recipeDescription">Recipe Description</label>
            <input
              type="text"
              className="form-control"
              id="recipeDescription"
              name="recipeDescription"
              value={formDetails.recipeDescription}
              onChange={(event) => {
                setFormDetails({
                  ...formDetails,
                  recipeDescription: event.target.value,
                });
              }}
            />

            <label htmlFor="recipeIngredients">Recipe Ingredients</label>
            <ul>
              {formDetails.recipeIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient.ingredientName}</li>
              ))}
            </ul>
            {console.log(formDetails.recipeIngredients)}

            <button
              type="button"
              id="editr-btn"
              className="btn rounded-pill"
              onClick={updateRecipe}
            >
              Update Recipe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
