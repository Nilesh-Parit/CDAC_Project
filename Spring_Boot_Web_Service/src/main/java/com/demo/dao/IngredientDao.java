package com.demo.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import com.demo.models.Ingredient;

public interface IngredientDao extends JpaRepository<Ingredient,Integer> {

}