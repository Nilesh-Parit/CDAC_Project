package com.demo.controller;
import java.util.List;
import java.util.Set;
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
import com.demo.models.Feedback;
import com.demo.models.Recipe;
import com.demo.models.User;
import com.demo.service.UserService;


@RestController
@CrossOrigin("*")
public class UserController {
	@Autowired
	UserService uservice;
	
	@GetMapping("/users")
	public ResponseEntity<List<User>> getallusers(){
		List<User> ulist=uservice.getAllUsers();
		return ResponseEntity.ok(ulist);
	}
	
	@PutMapping("/user/{userId}/updatepassword")
	public ResponseEntity<String> updatePassword(@PathVariable int userId, @RequestBody String newPassword) {
	    boolean passwordUpdated = uservice.updatePassword(userId, newPassword);
	    if (passwordUpdated)
	        return ResponseEntity.ok("Password updated successfully");
	    else
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found or password not updated");
	}

	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody User user) {
	    boolean loggedIn = uservice.login(user.getUsername(), user.getPassword());
	    if (loggedIn)
	        return ResponseEntity.ok("Login successful");
	    else
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
	}

	@GetMapping("/user/{userid}")
	public ResponseEntity<User> getById(@PathVariable int userid){
		User u=uservice.getUserById(userid);
		if (u!=null)
			return ResponseEntity.ok(u);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	@PostMapping("/user")
	public ResponseEntity<String> addNewUser(@RequestBody User u){
		Boolean status=uservice.addNewUser(u);
		if(status)
			return ResponseEntity.ok("User added successfully");
		else
			return ResponseEntity.badRequest().body("User insertion unsuccessful: User ID or username already exists");
	}
	
	@PutMapping("/user/{userid}")
	public ResponseEntity<String> updateUser(@RequestBody User u){
		Boolean status=uservice.updateUserById(u);
		if(status)
			return ResponseEntity.ok("User Updated successfully");
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	@DeleteMapping("/user/{userid}")
	public ResponseEntity<String> DeleteUser(@PathVariable int userid){
		Boolean status=uservice.deleteUserById(userid);
		if(status)
			return ResponseEntity.ok("User Deleted successfully");
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	@GetMapping("/user/{userId}/recipes")
	public ResponseEntity<Set<Recipe>> getUserRecipes(@PathVariable int userId) {
	    Set<Recipe> recipes = uservice.getUserRecipes(userId);
	    if (recipes != null)
	        return ResponseEntity.ok(recipes);
	    else
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	@GetMapping("/user/{userId}/feedbacks")
	public ResponseEntity<Set<Feedback>> getUserFeedbacks(@PathVariable int userId) {
	    Set<Feedback> feedbacks = uservice.getUserFeedbacks(userId);
	    if (feedbacks != null)
	        return ResponseEntity.ok(feedbacks);
	    else
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	@GetMapping("/user/{userId}/comments")
	public ResponseEntity<Set<Comment>> getUserComments(@PathVariable int userId) {
	    Set<Comment> comments = uservice.getUserComments(userId);
	    if (comments != null)
	        return ResponseEntity.ok(comments);
	    else
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
}                                                                                     