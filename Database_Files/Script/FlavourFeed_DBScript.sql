DROP DATABASE IF EXISTS flavour_feed;
CREATE DATABASE flavour_feed;

USE flavour_feed;

-- USER TABLE
-- DROP TABLE tbl_users;
CREATE TABLE IF NOT EXISTS tbl_users (
    user_id VARCHAR(10) PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    username VARCHAR(30) UNIQUE,
    email_id VARCHAR(30) UNIQUE,
    pass_word VARCHAR(30),
    dob DATE,
    phone_number VARCHAR(15),
    allergies varchar(20),
    preference varchar(20)
);
-- DESC tbl_users;
-- SHOW TABLES;


-- Connection B/W Users Table and Recipe Table
CREATE TABLE IF NOT EXISTS user_recipe (
	user_id VARCHAR(10),
    recipe_id VARCHAR(10),
    FOREIGN KEY (user_id) REFERENCES tbl_users(user_id),
	FOREIGN KEY (recipe_id) REFERENCES tbl_recipe(recipe_id)
);

-- RECIPE TABLE
-- DROP TABLE tbl_recipe;
CREATE TABLE IF NOT EXISTS tbl_recipe (
	recipe_id VARCHAR(10) PRIMARY KEY,
    recipe_name VARCHAR(20),
    recipe_type VARCHAR(20),
    cuisine VARCHAR(20),
    recipe_procedure VARCHAR(600),
    time_required INT,
    upload_date DATETIME
);
-- DESC tbl_recipe;
-- SHOW TABLES;


-- Connection B/W Recipe Table and Tags Table
CREATE TABLE IF NOT EXISTS recipe_tags (
	recipe_id VARCHAR(10),
    tag_id INT,
    FOREIGN KEY (recipe_id) REFERENCES tbl_recipe(recipe_id),
    FOREIGN KEY (tag_id) REFERENCES tbl_tag(tag_id)
);  

-- TAG TABLE
-- DROP TABLE tbl_tag;
CREATE TABLE IF NOT EXISTS tbl_tag (
	tag_id INT PRIMARY KEY,
    tags VARCHAR(20)
);
-- DESC tbl_tag;
-- SHOW TABLES;


-- Connection B/W Recipe Table and Ingredients Table
CREATE TABLE IF NOT EXISTS recipe_ingredients(
	recipe_id VARCHAR(10),
    ingredient_id VARCHAR(10),
	FOREIGN KEY (recipe_id) REFERENCES tbl_recipe(recipe_id),
    FOREIGN KEY (ingredient_id) REFERENCES tbl_ingredients(ingredient_id)
);

-- INGREDIENTS TABLE
-- DROP TABLE tbl_ingredients;
CREATE TABLE IF NOT EXISTS tbl_ingredients (
	ingredient_id VARCHAR(10) PRIMARY KEY,
    ingredient_name VARCHAR(20),
    ingredient_type VARCHAR(20),
    calorie_count INT
);
-- DESC tbl_ingredients;
-- SHOW TABLES;


-- Connection B/W Recipe Table, User Table and Meal Planning Table
CREATE TABLE IF NOT EXISTS user_meal (
	user_id VARCHAR(10),
    recipe_id VARCHAR(10),
    meal_id VARCHAR(10),
    FOREIGN KEY (user_id) REFERENCES tbl_users(user_id),
	FOREIGN KEY (recipe_id) REFERENCES tbl_recipe(recipe_id),
    FOREIGN KEY (meal_id) REFERENCES tbl_meal_planning(meal_id)
);

-- MEAL PLANNING TABLE
-- DROP TABLE tbl_meal_planning;
CREATE TABLE IF NOT EXISTS tbl_meal_planning(
	meal_id VARCHAR(10) PRIMARY KEY,
    meal_time TIME,
    total_calories INT,
    quantity INT    
);
-- DESC tbl_meal_planning;
SHOW TABLES;