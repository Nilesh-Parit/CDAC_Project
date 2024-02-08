package com.demo.models;
import java.util.Arrays;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.NotBlank; 

@Entity
@Table(name = "tbl_recipe")
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recipe_id")
    private Integer recipeId;

    @NotBlank(message = "Recipe name cannot be Blank")
    @Column(name = "recipe_name")
    private String recipeName;

    @Column(name = "instructions")
    private String instructions;

    @Column(name = "prep_time")
    private String prepTime;

    @Column(name = "cook_time")
    private String cookTime;

    @Column(name = "total_calories")
    private Integer totalCalories;
    
    @Lob
    @Column(name = "recipe_image", nullable = true)
    private byte[] recipe_image;
    
    @ManyToOne
    private User u;

    @OneToMany
    private Set<User> userRecipes;

    @OneToMany
    private Set<Tag> recipeTags;

    @OneToMany
    private Set<Ingredient> recipeIngredients;

    public Recipe() {
		super();
	}
    
    public Recipe(Integer recipeId, String recipeName, String instructions, String prepTime, String cookTime,
			Integer totalCalories, Set<User> userRecipes, Set<Tag> recipeTags, Set<Ingredient> recipeIngredients){
		super();
		this.recipeId = recipeId;
		this.recipeName = recipeName;
		this.instructions = instructions;
		this.prepTime = prepTime;
		this.cookTime = cookTime;
		this.totalCalories = totalCalories;
		this.userRecipes = userRecipes;
		this.recipeTags = recipeTags;
		this.recipeIngredients = recipeIngredients;
	}
    
	public Recipe(int recipeId, String recipeName, String instructions, String prepTime, String cookTime,
			Integer totalCalories, Set<User> userRecipes, Set<Tag> recipeTags, Set<Ingredient> recipeIngredients,
			byte[] recipe_image) {
		super();
		this.recipeId = recipeId;
		this.recipeName = recipeName;
		this.instructions = instructions;
		this.prepTime = prepTime;
		this.cookTime = cookTime;
		this.totalCalories = totalCalories;
		this.userRecipes = userRecipes;
		this.recipeTags = recipeTags;
		this.recipeIngredients = recipeIngredients;
		this.recipe_image = recipe_image;
	}

	public byte[] getImages() {
        return recipe_image;
    }

    public void setImages(byte[] recipe_image) {
        this.recipe_image = recipe_image;
    }

	public Integer getRecipeId() {
		return recipeId;
	}

	public void setRecipeId(Integer recipeId) {
		this.recipeId = recipeId;
	}

	public String getRecipeName() {
		return recipeName;
	}

	public void setRecipeName(String recipeName) {
		this.recipeName = recipeName;
	}

	public String getInstructions() {
		return instructions;
	}

	public void setInstructions(String instructions) {
		this.instructions = instructions;
	}

	public String getPrepTime() {
		return prepTime;
	}

	public void setPrepTime(String prepTime) {
		this.prepTime = prepTime;
	}

	public String getCookTime() {
		return cookTime;
	}

	public void setCookTime(String cookTime) {
		this.cookTime = cookTime;
	}

	public Integer getTotalCalories() {
		return totalCalories;
	}

	public void setTotalCalories(Integer totalCalories) {
		this.totalCalories = totalCalories;
	}

	public Set<User> getUserRecipes() {
		return userRecipes;
	}

	public void setUserRecipes(Set<User> userRecipes) {
		this.userRecipes = userRecipes;
	}

	public Set<Tag> getRecipeTags() {
		return recipeTags;
	}

	public void setRecipeTags(Set<Tag> recipeTags) {
		this.recipeTags = recipeTags;
	}

	public Set<Ingredient> getRecipeIngredients() {
		return recipeIngredients;
	}

	public void setRecipeIngredients(Set<Ingredient> recipeIngredients) {
		this.recipeIngredients = recipeIngredients;
	}
	
	@Override
	public String toString() {
		return "Recipe [recipeId=" + recipeId + ", recipeName=" + recipeName + ", instructions=" + instructions
				+ ", prepTime=" + prepTime + ", cookTime=" + cookTime + ", totalCalories=" + totalCalories
				+ ", userRecipes=" + userRecipes + ", recipeTags=" + recipeTags + ", recipeIngredients="
				+ recipeIngredients + ", recipe_image=" + Arrays.toString(recipe_image) + "]";
	}   
}
