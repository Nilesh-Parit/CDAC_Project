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
import com.demo.service.IngredientService;


@RestController
@CrossOrigin("*")
public class IngredientController {
	@Autowired
	IngredientService iservice;
	
	@GetMapping("/ingredients")
	public ResponseEntity<List<Ingredient>> getallIngredients(){
		List<Ingredient> ilist=iservice.getAllIngredients();
		return ResponseEntity.ok(ilist);	
	}
	
	@GetMapping("/ingredient/{ingid}")
	public ResponseEntity<Ingredient> getById(@PathVariable int ingid){
		Ingredient i=iservice.getIngredientById(ingid);
		if (i!=null)
			return ResponseEntity.ok(i);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	@PostMapping("ingredient/{ingid}")
	public ResponseEntity<String> addNewIngredient(@RequestBody Ingredient i){
		iservice.addNewIngredient(i);
		return ResponseEntity.ok("Ingredient added successfully");
	}
	
	@PutMapping("ingredient/{ingid}")
	public ResponseEntity<String> updateIngredient(@RequestBody Ingredient i){
		iservice.updateIngredientById(i);
		return ResponseEntity.ok("Ingredient updated successfully");	
	}
	
	@DeleteMapping("/mealplanning/{ingid}")
	public ResponseEntity<String> DeleteIngredient(@PathVariable int ingid){
		iservice.deleteIngredientById(ingid);
		return ResponseEntity.ok("Ingredient deleted successfully");
	}
	
	@GetMapping("/ingredient/{ingredientId}/recipes")
	public ResponseEntity<Set<Recipe>> getRecipesByIngredient(@PathVariable int ingredientId) {
	    Set<Recipe> recipes = iservice.getRecipesByIngredient(ingredientId);
	    if (recipes != null)
	        return ResponseEntity.ok(recipes);
	    else
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
}


