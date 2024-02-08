package com.demo.service;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.dao.UserDao;
import com.demo.models.Comment;
import com.demo.models.Feedback;
import com.demo.models.Recipe;
import com.demo.models.User;


@Service
public class UserServiceImpl implements UserService{
	@Autowired
	 private UserDao udao;

	public List<User> getAllUsers() {
		return udao.findAll();
	}
	
	public boolean updatePassword(int userId, String newPassword) {
	    User user = udao.findById(userId).orElse(null);
	    if (user != null) {
	        user.setPassword(newPassword);
	        udao.save(user);
	        return true;
	    } else {
	        return false;
	    }
	}

	public boolean login(String username, String password) {
	    User user = udao.findByUsername(username);
	    if (user != null && user.getPassword().equals(password)) {
	        return true;
	    } else {
	        return false;
	    }
	}
	
	@Override
	public boolean deleteUserByUsernameAndPassword(String username, String password) {
	    User user = udao.findByUsernameAndPassword(username, password);
	    if (user != null) {
	        udao.delete(user);
	        return true;
	    } else {
	        return false;
	    }
	}


	@Override
	public Boolean deleteUserById(int uid) {
		if (udao.existsById(uid)) {
			udao.deleteById(uid);
			return true;
		}
		return false;	
	}

	@Override
	public Boolean updateUserById(User u) {
		Optional<User> op=udao.findById(u.getUserId());
		if(op.isPresent()) {
			User u1=op.get();
			u1.setUsername(u.getUsername());
	        u1.setPassword(u.getPassword());
	        u1.setEmail(u.getEmail());
	        u1.setRole(u.getRole());
	        u1.setUserRecipes(u.getUserRecipes());
	        u1.setUserFeedbacks(u.getUserFeedbacks());
	        u1.setUserComments(u.getUserComments());
			if(udao.save(u1)!=null) {
				return true;
			};
		}
		return false;
	}

	@Override
	public Boolean addNewUser(User u) {       //Register User
		if (udao.existsById(u.getUserId())) {
		    return false;
		}
		User u1=udao.save(u);
		if(u1!=null) {
			return true;
		}
		return false;
	}

	@Override
	public User getUserById(int uid) {
		Optional<User> op=udao.findById(uid);
		 if(op.isPresent()) {
			 return op.get();
		 }
		 return null;
	}

	@Override
	public Set<Recipe> getUserRecipes(int userId) {
		User user = udao.findById(userId).orElse(null);
	    if (user != null) {
	        return user.getUserRecipes();
	    } else {
	        return null;
	    }
	}

	@Override
	public Set<Feedback> getUserFeedbacks(int userId) {
		    User user = udao.findById(userId).orElse(null);
		    if (user != null) {
		        return user.getUserFeedbacks();
		    } else {
		        return null;
		    }
	}

	@Override
	public Set<Comment> getUserComments(int userId) {
	    User user = udao.findById(userId).orElse(null);
	    if (user != null) {
	        return user.getUserComments();
	    } else {
	        return null;
	    }
	}
}
