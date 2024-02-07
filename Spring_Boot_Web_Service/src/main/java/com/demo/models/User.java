package com.demo.models;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Arrays;
import java.util.Set;   


@Entity
@Table(name = "tbl_users")
public class User {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer userId;

	@NotBlank(message = "Username is required")
    @Column(name = "username")
    private String username;

	@NotBlank(message = "Password is required")
	@Size(min = 8, message = "Password must be at least 8 characters Long")
    @Column(name = "password")
    private String password;
    
	@NotBlank(message = "Email is required")
	@Email(message = "Invalid email format")
    @Column(name = "email_id")
    private String email;

    @Column(name = "role")
    private String role;
    
    @Lob
    @Column(name = "user_image", nullable = true)
    private byte[] user_image;
    
    @OneToMany
    private Set<Recipe> userRecipes;

    @OneToMany
    private Set<Feedback> userFeedbacks;
    
    @ManyToOne
    private MealPlanning m;
    
    @OneToMany
    private Set<Comment> userComments;
    
    public User() {
		super();
	}

    public User(int userId, String username, String password, String email, String role){
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.email = email;
		this.role = role;
	}
    
	public User(int userId, String username, String password, String email, String role, byte[] user_image) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.email = email;
		this.role = role;
		this.user_image = user_image;
	}

    public byte[] getImages() {
        return user_image;
    }

    public void setImages(byte[] images) {
        this.user_image = images;
    }

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	
	public Set<Recipe> getUserRecipes() {
		return userRecipes;
	}

	public void setUserRecipes(Set<Recipe> userRecipes) {
		this.userRecipes = userRecipes;
	}

	public Set<Feedback> getUserFeedbacks() {
		return userFeedbacks;
	}

	public void setUserFeedbacks(Set<Feedback> userFeedbacks) {
		this.userFeedbacks = userFeedbacks;
	}

	public Set<Comment> getUserComments() {
		return userComments;
	}

	public void setUserComments(Set<Comment> userComments) {
		this.userComments = userComments;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", username=" + username + ", password=" + password + ", email=" + email
				+ ", role=" + role + ", user_image=" + Arrays.toString(user_image) + "]";
	}
}
