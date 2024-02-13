package com.demo.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import com.demo.models.Tag;

public interface TagDao extends JpaRepository<Tag, Integer> {

}