package com.demo.service;
import java.util.List;
import java.util.Set;
import com.demo.models.Ingredient;
import com.demo.models.Recipe;
import com.demo.models.Tag;
import com.demo.models.User;

public interface RecipeService {

	List<Recipe> getAllRecipes();

	Boolean addNewRecipe(Recipe r);

	Recipe getRecipeById(int rid);

	Boolean updateRecipeById(Recipe u);

	Boolean deleteRecipeById(int rid);

	Set<Ingredient> getIngredientsByRecipe(int recipeId);

	Set<User> getUsersByRecipe(int recipeId);

	Set<Tag> getTagsByRecipe(int recipeId);

}

