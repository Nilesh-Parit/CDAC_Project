package com.demo.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import com.demo.models.Recipe;

public interface RecipeDao extends JpaRepository<Recipe, Integer> {

}