package com.demo.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import com.demo.models.Comment;

public interface CommentDao extends JpaRepository<Comment, String> {

}