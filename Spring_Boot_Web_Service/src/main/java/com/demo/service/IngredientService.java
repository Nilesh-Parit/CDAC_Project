package com.demo.service;
import java.util.List;
import java.util.Set;
import com.demo.models.Ingredient;
import com.demo.models.Recipe;

public interface IngredientService {

	List<Ingredient> getAllIngredients();

	Boolean addNewIngredient(Ingredient f);

	Ingredient getIngredientById(int ingid);

	Boolean updateIngredientById(Ingredient f);

	Boolean deleteIngredientById(int ingid);

	Set<Recipe> getRecipesByIngredient(int ingredientId);

}

