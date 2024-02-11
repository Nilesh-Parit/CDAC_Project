DROP DATABASE IF EXISTS flavour_feed;
CREATE DATABASE flavour_feed;

USE flavour_feed;

-- USER TABLE
-- DROP TABLE tbl_users;
CREATE TABLE IF NOT EXISTS tbl_users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    username VARCHAR(30) UNIQUE,
    email_id VARCHAR(30) UNIQUE,
    pass_word VARCHAR(10),
    dob DATE,
    phone_number VARCHAR(15),
    allergies varchar(20),
    preference varchar(20)
);

-- RECIPE TABLE
-- DROP TABLE tbl_recipe;
CREATE TABLE IF NOT EXISTS tbl_recipe (
	recipe_id INT PRIMARY KEY AUTO_INCREMENT,
    recipe_name VARCHAR(50),
    recipe_type VARCHAR(30),
    cuisine VARCHAR(20),
    recipe_procedure VARCHAR(4000),
    time_required INT,
    upload_date DATETIME
);

-- TAG TABLE
-- DROP TABLE tbl_tag;
CREATE TABLE IF NOT EXISTS tbl_tag (
	tag_id INT PRIMARY KEY,
    tags VARCHAR(20)
);

-- INGREDIENTS TABLE
-- DROP TABLE tbl_ingredients;
CREATE TABLE IF NOT EXISTS tbl_ingredients (
	ingredient_id VARCHAR(10) PRIMARY KEY,
    ingredient_name VARCHAR(30),
    ingredient_type VARCHAR(30),
    calorie_count INT
);

-- MEAL PLANNING TABLE
-- DROP TABLE tbl_meal_planning;
CREATE TABLE IF NOT EXISTS tbl_meal_planning(
	meal_id VARCHAR(20) PRIMARY KEY,
    meal_time VARCHAR(20),
    total_calories INT,
    quantity INT    
);

-- COMMENTS TABLE
-- DROP TABLE tbl_comments;
CREATE TABLE IF NOT EXISTS tbl_comments(
	comment_id VARCHAR(10) PRIMARY KEY,
    comments VARCHAR(30)
); 

-- FEEDBACK TABLE
-- DROP TABLE tbl_feedback;
CREATE TABLE IF NOT EXISTS tbl_feedback(
	feedback_id VARCHAR(10) PRIMARY KEY,
    feedback VARCHAR(50)
);


-- +++++++++ CONNECTIONS +++++++++

-- Connection B/W Users Table and Recipe Table
CREATE TABLE IF NOT EXISTS user_recipe (
	user_id VARCHAR(10),
    recipe_id VARCHAR(10),
    FOREIGN KEY (user_id) REFERENCES tbl_users(user_id),
	FOREIGN KEY (recipe_id) REFERENCES tbl_recipe(recipe_id)
);

-- Connection B/W Recipe Table and Tags Table
CREATE TABLE IF NOT EXISTS recipe_tags (
	recipe_id VARCHAR(10),
    tag_id INT,
    FOREIGN KEY (recipe_id) REFERENCES tbl_recipe(recipe_id),
    FOREIGN KEY (tag_id) REFERENCES tbl_tag(tag_id)
);  

-- Connection B/W Recipe Table and Ingredients Table
CREATE TABLE IF NOT EXISTS recipe_ingredients(
	recipe_id VARCHAR(10),
    ingredient_id VARCHAR(10),
	FOREIGN KEY (recipe_id) REFERENCES tbl_recipe(recipe_id),
    FOREIGN KEY (ingredient_id) REFERENCES tbl_ingredients(ingredient_id)
);

-- Connection B/W Recipe Table, User Table and Meal Planning Table
CREATE TABLE IF NOT EXISTS user_meal (
	user_id VARCHAR(10),
    recipe_id VARCHAR(10),
    meal_id VARCHAR(10),
    FOREIGN KEY (user_id) REFERENCES tbl_users(user_id),
	FOREIGN KEY (recipe_id) REFERENCES tbl_recipe(recipe_id),
    FOREIGN KEY (meal_id) REFERENCES tbl_meal_planning(meal_id)
);

-- Connection B/W Comments Table, User Table and Recipe Table
CREATE TABLE IF NOT EXISTS user_comments(
	user_id VARCHAR(10),
    recipe_id VARCHAR(10),
    comment_id VARCHAR(10),
    FOREIGN KEY (user_id) REFERENCES tbl_users(user_id),
    FOREIGN KEY (recipe_id) REFERENCES tbl_recipe(recipe_id),
    FOREIGN KEY (comment_id) REFERENCES tbl_comments(comment_id)
);

-- Connection B/W Feedback Table and User Table
CREATE TABLE IF NOT EXISTS user_feedback(
	feedback_id VARCHAR(10),
    user_id VARCHAR(10),
    FOREIGN KEY (user_id) REFERENCES tbl_users(user_id),
    FOREIGN KEY (feedback_id) REFERENCES tbl_feedback(feedback_id)
);
-- SHOW TABLES;
