package com.demo.dao;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.models.Ingredient;

public interface IngredientDao extends JpaRepository<Ingredient,Integer> {

	@Query(value = "SELECT * FROM (SELECT * FROM tbl_ingredients GROUP BY ingredient_name) AS temp GROUP BY ingredient_id", nativeQuery = true)
	List<Ingredient> findAllDistinctIngredientNames();


}