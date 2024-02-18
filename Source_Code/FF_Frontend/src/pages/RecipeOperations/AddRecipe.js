import React, { useEffect, useState } from "react";
import "./AddRecipe.css";
import RecipeService from "../../services/RecipeService";
import IngredientService from "../../services/IngredientService";
import { Link, useNavigate } from "react-router-dom";

export default function AddRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [totalCalories, setTotalCalories] = useState("");
  const [recipeType, setRecipeType] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeImage, setRecipeImage] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);
  const navigate = useNavigate();
  const [newIngredient, setNewIngredient] = useState({
    ingredientName: "",
    ingredientType: "",
    ingredientDescription: "",
    calorieCount: "",
  });
  const [showAddIngredientForm, setShowAddIngredientForm] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchAllIngredients = async () => {
      try {
        const ingredientsResponse = await IngredientService.getAllIngredients();
        setAllIngredients(ingredientsResponse.data);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    };
    fetchAllIngredients();
  }, []);

  const addIngredient = () => {
    setSelectedIngredients([...selectedIngredients, newIngredient]);
    setNewIngredient({
      ingredientName: "",
      ingredientType: "",
      ingredientDescription: "",
      calorieCount: "",
    });
  };
  const handleAddRecipe = async () => {
    try {
      const newRecipe = {
        recipeName: recipeName,
        instructions: instructions,
        cookTime: cookTime,
        totalCalories: totalCalories,
        recipeType: recipeType,
        recipeDescription: recipeDescription,
        recipeImage: recipeImage,
      };
      const userId = localStorage.getItem("userId");
      const addedRecipeResponse = await RecipeService.addRecipe(
        newRecipe,
        userId
      );
      const addedRecipeId = parseInt(addedRecipeResponse.data.recipeId);

      const addedIngredientsResponse = await Promise.all(
        selectedIngredients.map(async (ingredient) => {
          return await IngredientService.addIngredient(
            ingredient,
            addedRecipeId
          );
        })
      );

      navigate("/userrecipies");
    } catch (error) {
      console.error("Error adding recipe and ingredients:", error);
    }
  };

  const handleIngredientChange = (e) => {
    const { name, value } = e.target;
    setNewIngredient({ ...newIngredient, [name]: value });
  };

  const handleImageChange = (e) => {
    setRecipeImage(e.target.files[0]);
  };
  return (
    <>
      {/* <nav
        className="navbar navbar-expand-lg navbar-light fixed-top "
        id="navbar--id"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="nav__logo"
            id="logo"
          />
        </a>
      </nav> */}
      {/* <div id="logodiv">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="nav__logo"
          id="logo"
        />
      </div> */}

      <h1
        id="header"
        style={{ marginTop: "8%", fontFamily: "black", color: "#29293d" }}
        className="text-center"
      >
        FlavourFeed
      </h1>
      <div className="card ">
        <div
          className="card-body"
          id="addr-card-body"
          style={{ marginTop: "2%" }}
        >
          <h3
            id="header"
            style={{ marginTop: "8%", fontFamily: "black", color: "#29293d" }}
            className="text-center"
          >
            <b>Add Your Recipe</b>
          </h3>
          <form>
            <div className="form-group">
              <label htmlFor="recipeName">Recipe Name</label>
              <input
                type="text"
                className="form-control"
                id="addr-recipeName"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="instructions">Instructions</label>
              <textarea
                className="form-control"
                id="addr-instructions"
                rows="3"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="cookTime">Cook Time</label>
              <input
                type="text"
                className="form-control"
                id="addr-cookTime"
                value={cookTime}
                onChange={(e) => setCookTime(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="totalCalories">Total Calories</label>
              <input
                type="number"
                className="form-control"
                id="addr-totalCalories"
                value={totalCalories}
                onChange={(e) => setTotalCalories(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipeType">Recipe Type</label>
              <select
                className="form-control"
                id="addr-recipeType"
                value={recipeType}
                onChange={(e) => setRecipeType(e.target.value)}
              >
                <option value="">Select Recipe Type</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="recipeDescription">Recipe Description</label>
              <textarea
                className="form-control"
                id="addr-recipeDescription"
                rows="3"
                value={recipeDescription}
                onChange={(e) => setRecipeDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="recipeImage">Recipe Image</label>
              <div class="input-group mb-3" id="rec-img-div">
                <input
                  type="file"
                  class="form-control"
                  id="addr-inputGroupFile01"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div className="form-group">
              <ul>
                {selectedIngredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.ingredientName} - {ingredient.ingredientType} -{" "}
                    {ingredient.ingredientDescription} -{" "}
                    {ingredient.calorieCount}
                  </li>
                ))}
              </ul>
            </div>
            <div className="form-group">
              <label htmlFor="existingIngredients">Select Ingredient</label>
              <select
                className="form-select"
                id="addr-existingIngredients"
                onChange={(e) =>
                  setSelectedIngredients([
                    ...selectedIngredients,
                    allIngredients.find(
                      (ingredient) =>
                        ingredient.ingredientName === e.target.value
                    ),
                  ])
                }
              >
                <option value="">Select Ingredient</option>
                {allIngredients.map((ingredient) => (
                  <option
                    key={ingredient.ingredientId}
                    value={ingredient.ingredientName}
                  >
                    {ingredient.ingredientName}
                  </option>
                ))}
              </select>
            </div>
            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <br />

            <div className="accordion" id="accordionExample-addr">
              <div className="accordion-item" id="accordion-item-addr">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <b className="text-center" id="accordian-txt">
                      Add Ingredients Manually
                    </b>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    className="accordion-body collapse show"
                    id="accordion-body-addr"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div>
                      <div className="form-group">
                        <label htmlFor="ingredientName">Ingredient Name</label>
                        <input
                          type="text"
                          className="accordian-input"
                          id="ingredientName"
                          name="ingredientName"
                          value={newIngredient.ingredientName}
                          onChange={handleIngredientChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="ingredientType">Ingredient Type</label>
                        <select
                          className="accordian-input"
                          id="ingredientType"
                          name="ingredientType"
                          value={newIngredient.ingredientType}
                          onChange={handleIngredientChange}
                        >
                          <option value="">Select Ingredient Type</option>
                          <option value="Veg">Veg</option>
                          <option value="Non-Veg">Non Veg</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="ingredientDescription">
                          Ingredient Description
                        </label>
                        <textarea
                          className="accordian-input"
                          id="ingredientDescription"
                          rows="3"
                          name="ingredientDescription"
                          value={newIngredient.ingredientDescription}
                          onChange={handleIngredientChange}
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="calorieCount">Calorie Count</label>
                        <input
                          type="number"
                          className="accordian-input"
                          id="calorieCount"
                          name="calorieCount"
                          value={newIngredient.calorieCount}
                          onChange={handleIngredientChange}
                        />
                      </div>
                      <div id="addingr-div">
                        <button
                          type="button"
                          className="btn rounded-pill"
                          onClick={addIngredient}
                        >
                          Add Ingredients
                        </button>
                        <button
                          type="button"
                          className="btn mr-2 rounded-pill"
                          onClick={() => setShowAddIngredientForm(false)}
                          id="cancel-btn"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <button
              type="button"
              className="btn rounded-pill"
              onClick={() => setShowAddIngredientForm(true)}
              id="adding-btn"
            >
              Add Ingredient Manually
            </button> */}
            {/* {showAddIngredientForm && (
              
              // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            )} */}
            <br />

            <div id="addr-div">
              <button
                type="button"
                className="btn rounded-pill"
                onClick={handleAddRecipe}
              >
                Add Recipe
              </button>
              <Link to="/user/userrecipies" className="btn ml-2 rounded-pill">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
