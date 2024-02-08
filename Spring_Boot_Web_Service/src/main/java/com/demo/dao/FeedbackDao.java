package com.demo.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import com.demo.models.Feedback;

public interface FeedbackDao extends JpaRepository<Feedback,String> {

}
