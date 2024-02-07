package com.demo.controller;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.demo.models.Ingredient;
import com.demo.models.Recipe;
import com.demo.models.Tag;
import com.demo.models.User;
import com.demo.service.RecipeService;


@RestController
@CrossOrigin("*")
public class RecipeController {
	@Autowired
	RecipeService rservice;
	
	@GetMapping("/recipes")
	public ResponseEntity<List<Recipe>> getallRecipes(){
		List<Recipe> rlist=rservice.getAllRecipes();
		return ResponseEntity.ok(rlist);	
	}
	
	@GetMapping("/recipe/{Recipeid}")
	public ResponseEntity<Recipe> getById(@PathVariable int Recipeid){
		Recipe r=rservice.getRecipeById(Recipeid);
		if (r!=null)
			return ResponseEntity.ok(r);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	@PostMapping("recipe/{Recipeid}")
	public ResponseEntity<String> addNewRecipe(@RequestBody Recipe r){
		rservice.addNewRecipe(r);
		return ResponseEntity.ok("Recipe added successfully");
	}
	
	@PutMapping("recipe/{Recipeid}")
	public ResponseEntity<String> updateRecipe(@RequestBody Recipe r){
		rservice.updateRecipeById(r);
		return ResponseEntity.ok("Recipe updated successfully");	
	}
	
	@DeleteMapping("/recipe/{Recipeid}")
	public ResponseEntity<String> DeleteRecipe(@PathVariable int Recipeid){
		rservice.deleteRecipeById(Recipeid);
		return ResponseEntity.ok("Recipe deleted successfully");	
	}
	
	@GetMapping("/recipe/{recipeId}/users")
	public ResponseEntity<Set<User>> getUsersByRecipe(@PathVariable int recipeId) {
	    Set<User> users = rservice.getUsersByRecipe(recipeId);
	    if (users != null)
	        return ResponseEntity.ok(users);
	    else
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	@GetMapping("/recipe/{recipeId}/tags")
	public ResponseEntity<Set<Tag>> getTagsByRecipe(@PathVariable int recipeId) {
	    Set<Tag> tags = rservice.getTagsByRecipe(recipeId);
	    if (tags != null)
	        return ResponseEntity.ok(tags);
	    else
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	@GetMapping("/recipe/{recipeId}/ingredients")
	public ResponseEntity<Set<Ingredient>> getIngredientsByRecipe(@PathVariable int recipeId) {
	    Set<Ingredient> ingredients = rservice.getIngredientsByRecipe(recipeId);
	    if (ingredients != null)
	        return ResponseEntity.ok(ingredients);
	    else
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
}

	
	



