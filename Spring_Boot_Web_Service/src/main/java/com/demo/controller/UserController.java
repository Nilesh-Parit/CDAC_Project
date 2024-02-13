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
	
	@PutMapping("/user/{username}/updatepassword")
	public ResponseEntity<String> updatePassword(@RequestBody User u) {
	    boolean passwordUpdated = uservice.updatePassword(u);
	    if (passwordUpdated)
	        return ResponseEntity.ok("Password updated successfully");
	    else
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found or password not updated");
	}

	@PostMapping("/login")
	public ResponseEntity<User> login(@RequestBody User user) {
	    User u = uservice.login(user.getUsername(), user.getPassword());
	    if (u != null)
	        return ResponseEntity.ok(u);
	    else 
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
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
		System.out.println(u.getDateOfBirth());
		System.out.println("abhay");
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
	public List<Recipe> getUserRecipes(@PathVariable int userId) {
	    List<Recipe> recipes = uservice.getUserRecipes(userId);
	    System.out.println(recipes);
	    if (recipes != null)
	        return recipes;
	    else
	        return null;
	}
	
	@GetMapping("/user/{userId}/feedbacks")
	public ResponseEntity<List<Feedback>> getUserFeedbacks(@PathVariable Integer userId) {
	    List<Feedback> feedbacks = uservice.getUserFeedbacks(userId);
	    if (feedbacks != null)
	        return ResponseEntity.ok(feedbacks);
	    else
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	@GetMapping("/user/{userId}/comments")
	public ResponseEntity<List<Comment>> getUserComments(@PathVariable int userId) {
	    List<Comment> comments = uservice.getUserComments(userId);
	    if (comments != null)
	        return ResponseEntity.ok(comments);
	    else
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	@GetMapping("/user/{userId}/allergies")
    public ResponseEntity<String[]> getUserAllergies(@PathVariable int userId) {
        String[] allergies = uservice.getUserAllergies(userId);
        if (allergies != null)
            return ResponseEntity.ok(allergies);
        else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @GetMapping("/user/{userId}/preferences")
    public ResponseEntity<String[]> getUserPreferences(@PathVariable int userId) {
        String[] preferences = uservice.getUserPreferences(userId);
        if (preferences != null)
            return ResponseEntity.ok(preferences);
        else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}                                                                                     