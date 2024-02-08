package com.demo.service;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.dao.IngredientDao;
import com.demo.models.Ingredient;
import com.demo.models.MealPlanning;
import com.demo.models.Recipe;


@Service
public class IngredientServiceImpl implements IngredientService {
	
	@Autowired
	private IngredientDao idao;

	@Override
	public List<Ingredient> getAllIngredients() {
		return idao.findAll();
	}

	@Override
	public Boolean addNewIngredient(Ingredient i) {
			if (idao.existsById(i.getIngredientId())) {
			    return false;
			}
			Ingredient i1=idao.save(i);
			if(i1!=null) {
				return true;
			}
			return false;
		}

	@Override
	public Ingredient getIngredientById(int ingid) {
		Optional<Ingredient> op=idao.findById(ingid);
		 if(op.isPresent()) {
			 return op.get();
		 }
		 return null;
	}

	@Override
	public Boolean updateIngredientById(Ingredient i) {
		Optional<Ingredient> op=idao.findById(i.getIngredientId());
		if(op.isPresent()) {
			Ingredient i1=op.get();
			i1.setIngredientName(i.getIngredientName());
			i1.setIngredientType(i.getIngredientType());
			i1.setCalorieCount(i.getCalorieCount());
			i1.setRecipeIngredients(i.getRecipeIngredients());
			i1.setRecipeIngredients(i.getRecipeIngredients());
			if(idao.save(i1)!=null) {
				return true;
			};
		}
		return false;
	}

	@Override
	public Boolean deleteIngredientById(int ingid) {
		if (idao.existsById(ingid)) {
			idao.deleteById(ingid);
			return true;
		}
		return false;
	}
	
	public Set<Recipe> getRecipesByIngredient(int ingredientId) {
	    Ingredient ingredient = idao.findById(ingredientId).orElse(null);
	    if (ingredient != null) {
	        return ingredient.getRecipeIngredients();
	    } else {
	        return null;
	    }
	}
}
