package com.demo.service;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.dao.RecipeDao;
import com.demo.models.Ingredient;
import com.demo.models.Recipe;
import com.demo.models.Tag;
import com.demo.models.User;


@Service
public class RecipeServiceImpl implements RecipeService {

	@Autowired
	 private RecipeDao rdao;

	public List<Recipe> getAllRecipes() {
		return rdao.findAll();
	}

	@Override
	public Boolean deleteRecipeById(int rid) {
		if (rdao.existsById(rid)) {
			rdao.deleteById(rid);
			return true;
		}
		return false;	
	}

	@Override
	public Boolean updateRecipeById(Recipe r) {
		Optional<Recipe> op=rdao.findById(r.getRecipeId());
		if(op.isPresent()) {
			Recipe r1=op.get();
			r1.setRecipeName(r.getRecipeName());
			r1.setInstructions(r.getInstructions());
			r1.setPrepTime(r.getPrepTime());
			r1.setCookTime(r.getCookTime());
			r1.setTotalCalories(r.getTotalCalories());
			r1.setUserRecipes(r.getUserRecipes());
			r1.setRecipeTags(r.getRecipeTags());
			r1.setRecipeIngredients(r.getRecipeIngredients());
			if(rdao.save(r1)!=null) {
				return true;
			}
		}
		return false;
	}

	@Override
	public Boolean addNewRecipe(Recipe r) {
		if (rdao.existsById(r.getRecipeId())) {
	        return false;
	     }
		Recipe r1=rdao.save(r);
		if(r1!=null) {
			return true;
		 }
	 return false;
	}

	@Override
	public Recipe getRecipeById(int rid) {
		Optional<Recipe> op=rdao.findById(rid);
		 if(op.isPresent()) {
			 return op.get();
		 }
		 return null;
	}
	
	public Set<User> getUsersByRecipe(int recipeId) {
	    Recipe recipe = rdao.findById(recipeId).orElse(null);
	    if (recipe != null) {
	        return recipe.getUserRecipes();
	    } else {
	        return null;
	    }
	}

	public Set<Tag> getTagsByRecipe(int recipeId) {
	    Recipe recipe = rdao.findById(recipeId).orElse(null);
	    if (recipe != null) {
	        return recipe.getRecipeTags();
	    } else {
	        return null;
	    }
	}

	public Set<Ingredient> getIngredientsByRecipe(int recipeId) {
	    Recipe recipe = rdao.findById(recipeId).orElse(null);
	    if (recipe != null) {
	        return recipe.getRecipeIngredients();
	    } else {
	        return null;
	    }
	}
}
