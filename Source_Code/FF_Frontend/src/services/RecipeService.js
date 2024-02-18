import axios from "axios";

const baseUrl = "http://localhost:8080/";

class RecipeService {
  getAllRecipes() {
    return axios.get(baseUrl + "recipes");
  }

  getRecipeById(recipeId) {
    return axios.get(baseUrl + "recipe/" + recipeId);
  }

  addRecipe(recipe, userId) {
    return axios.post(baseUrl + "recipe?userId=" + userId, recipe, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  updateRecipe(recipe) {
    return axios.put(baseUrl + "recipe/" + recipe.recipeId, recipe);
  }

  deleteRecipe(recipeId) {
    return axios.delete(baseUrl + "recipe/" + recipeId);
  }

  getUsersByRecipe(recipeId) {
    return axios.get(baseUrl + "recipe/" + recipeId + "/users");
  }

  getTagsByRecipe(recipeId) {
    return axios.get(baseUrl + "recipe/" + recipeId + "/tags");
  }

  getIngredientsByRecipe(recipeId) {
    return axios.get(baseUrl + "recipe/" + recipeId + "/ingredients");
  }
}

export default new RecipeService();
