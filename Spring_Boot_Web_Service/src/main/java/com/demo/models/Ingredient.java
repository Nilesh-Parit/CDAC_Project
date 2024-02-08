package com.demo.models;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.NotBlank; 

@Entity
@Table(name = "tbl_ingredients")
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ingredient_id")
    private Integer ingredientId;

    @NotBlank(message = "Ingredient name cannot be Blank")
    @Column(name = "ingredient_name")
    private String ingredientName;

    @Column(name = "ingredient_type")
    private String ingredientType;

    @Column(name = "calorie_count")
    private Integer calorieCount;

    @OneToMany
    private Set<Recipe> recipeIngredients;
    
    @ManyToOne
    private Recipe r;

	public Ingredient() {
		super();
	}

	public Ingredient(Integer ingredientId, String ingredientName, String ingredientType, Integer calorieCount,
			Set<Recipe> recipeIngredients) {
		super();
		this.ingredientId = ingredientId;
		this.ingredientName = ingredientName;
		this.ingredientType = ingredientType;
		this.calorieCount = calorieCount;
		this.recipeIngredients = recipeIngredients;
	}

	public Integer getIngredientId() {
		return ingredientId;
	}

	public void setIngredientId(Integer ingredientId) {
		this.ingredientId = ingredientId;
	}

	public String getIngredientName() {
		return ingredientName;
	}

	public void setIngredientName(String ingredientName) {
		this.ingredientName = ingredientName;
	}

	public String getIngredientType() {
		return ingredientType;
	}

	public void setIngredientType(String ingredientType) {
		this.ingredientType = ingredientType;
	}

	public Integer getCalorieCount() {
		return calorieCount;
	}

	public void setCalorieCount(Integer calorieCount) {
		this.calorieCount = calorieCount;
	}

	public Set<Recipe> getRecipeIngredients() {
		return recipeIngredients;
	}

	public void setRecipeIngredients(Set<Recipe> recipeIngredients) {
		this.recipeIngredients = recipeIngredients;
	}

	@Override
	public String toString() {
		return "Ingredient [ingredientId=" + ingredientId + ", ingredientName=" + ingredientName + ", ingredientType="
				+ ingredientType + ", calorieCount=" + calorieCount + ", recipeIngredients=" + recipeIngredients + "]";
	}   
}
