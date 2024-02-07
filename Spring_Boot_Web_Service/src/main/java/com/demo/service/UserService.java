package com.demo.service;
import java.util.List;
import java.util.Set;
import com.demo.models.Comment;
import com.demo.models.Feedback;
import com.demo.models.Recipe;
import com.demo.models.User;

public interface UserService {

	List<User> getAllUsers();

	Boolean addNewUser(User u);

	User getUserById(int pid);

	Boolean updateUserById(User u);

	Boolean deleteUserById(int id);

	Set<Recipe> getUserRecipes(int userId);

	Set<Feedback> getUserFeedbacks(int userId);

	Set<Comment> getUserComments(int userId);

	boolean updatePassword(int userId, String newPassword);

	boolean login(String username, String password);

	boolean deleteUserByUsernameAndPassword(String username, String password);

}
