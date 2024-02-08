package com.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.demo.models.Comment;
import com.demo.service.CommentService;


@RestController
@CrossOrigin("*")
public class CommentController {
	@Autowired
	CommentService cservice;
	
	@GetMapping("/comments")
	public ResponseEntity<List<Comment>> getallComments(){
		List<Comment> clist=cservice.getAllComments();
		return ResponseEntity.ok(clist);	
	}
	
	@GetMapping("/comment/{cid}")
	public ResponseEntity<Comment> getById(@PathVariable String cid){
		Comment c=cservice.getCommentById(cid);
		if (c!=null)
			return ResponseEntity.ok(c);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	@PostMapping("/comment")
	public ResponseEntity<String> addNewComment(@RequestBody Comment c){
		cservice.addNewComment(c);
		return ResponseEntity.ok("Comment added successfully");
	}
	
	@PutMapping("/comment/{cid}")
	public ResponseEntity<String> updateComment(@RequestBody Comment c){
		cservice.updateCommentById(c);
		return ResponseEntity.ok("Comment updated successfully");
	}
	
	@DeleteMapping("/comment/{cid}")
	public ResponseEntity<String> DeleteComment(@PathVariable String cid){
		cservice.deleteCommentById(cid);
		return ResponseEntity.ok("Comment deleted successfully");	
	}
}





