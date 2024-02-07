package com.demo.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import com.demo.models.MealPlanning;

public interface MealPlanningDao extends JpaRepository<MealPlanning, Integer> {

}
