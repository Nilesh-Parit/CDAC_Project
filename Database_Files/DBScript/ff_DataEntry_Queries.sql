--User table;
INSERT INTO tbl_users 
(first_name,last_name,username,email_id,pass_word,dob,phone_number,allergies,preference)
VALUES
('Nilesh','Parit','nilesh-parit','nileshparit4202@gmail.com','pass@1234','1998-02-20','8605660628','NA','South Indian'),
('Anurag','Ghosekar','anurag-ghosekar','anurag@gmail.com','pass@1234','2000-03-21','9156628812','NA','Punjabi'),
('Abhishek','Gaikwad','abhishek-gaikwad','abhishekg@gmail.com','pass@1234','2001-04-22','9527906466','NA','Italian'),
('Abhay','Biramane','abhay-biramane','abhaybg@gmail.com','pass@1234','2000-05-23','9834340158','NA','Continental'),
('Sakshi','Pawar','sakshi-pawar','sakship@gmail.com','pass@1234','1997-06-24','7483825383','Lactose intolerance','Chinese');

--Recipe table;
INSERT INTO tbl_recipe
(recipe_name,recipe_type,cuisine,recipe_procedure,time_required,upload_date)
VALUES
('Aloo Paratha','Breakfast','Punjabi','1.	In a mixing bowl, combine the whole wheat flour, mashed potatoes, cumin seeds, red chili powder, turmeric powder, and salt.
2.	Gradually add water and knead the mixture into a smooth dough. Let it rest for 15-20 minutes.
3.	Divide the dough into small balls, and roll each ball into a flat circle (paratha).
4.	Heat a griddle or tawa over medium heat.
5.	Place a rolled paratha on the hot griddle and cook until bubbles appear on the surface.
6.	Flip the paratha, and apply ghee or oil on the cooked side.
7.	Cook the other side until golden brown spots appear.
8.	Repeat the process for the remaining dough balls.
9.	Serve hot with yogurt, pickle, or your favourite chutney.
10.	Enjoy your delicious Aloo Paratha!
',1,NOW()),
('Dosa','Lunch','South Indian','1.	Rinse rice, urad dal, and fenugreek seeds. Soak them in water separately for 4-6 hours.
2.	Grind rice and urad dal separately into a smooth batter using water as needed.
3.	Mix the rice and urad dal batter together, add salt, and let it ferment overnight (or at least 8 hours).
4.	Heat a non-stick or cast-iron griddle (tawa) over medium heat.
5.	Pour a ladleful of batter onto the centre of the hot griddle and spread it in a circular motion to form a thin dosa.
6.	Drizzle oil or ghee around the edges of the dosa and cook until the edges crisp up and the bottom turns golden brown.
7.	Flip the dosa and cook the other side briefly.
8.	Serve hot with coconut chutney and sambar.
9.	Enjoy your tasty Dosa!',12,NOW()),
('Pizza Margherita','Dinner','Italian','1.	Preheat your oven to the highest temperature (usually around 475-500°F or 245-260°C).
2.	Roll out the pizza dough on a floured surface to your desired thickness.
3.	Spread a thin layer of tomato sauce evenly over the dough, leaving a border around the edges.
4.	Tear or slice fresh mozzarella and place it evenly on the sauce.
5.	Add fresh basil leaves on top of the cheese.
6.	Drizzle olive oil over the pizza and sprinkle with a pinch of salt and pepper.
7.	Transfer the pizza to a preheated oven and bake until the crust is golden and the cheese is melted and bubbly (usually 10-15 minutes).
8.	Remove from the oven, let it cool for a moment, slice, and enjoy your homemade Pizza Margherita!
9.	Note: You can customize the recipe by adding extra toppings if desired.
',0.5,NOW()),
('Egg Fried Rice','Dinner','Chinese','1.	Heat vegetable oil in a large pan or wok over medium-high heat.
2.	Add minced garlic and sauté for a minute until fragrant.
3.	Add mixed vegetables and cook until they are tender-crisp.
4.	Push the vegetables to one side of the pan, pour the beaten eggs into the other side, and scramble them until cooked.
5.	Combine the scrambled eggs with the vegetables.
6.	Add the cooked rice to the pan, breaking up any clumps with a spatula.
7.	Drizzle soy sauce and oyster sauce over the rice, and stir well to combine.
8.	Stir in chopped green onions and season with salt and pepper to taste.
9.	Continue cooking for a few more minutes until everything is heated through.
10.	Serve hot, optionally garnished with additional green onions.
11.	Enjoy your homemade Egg Fried Rice! Feel free to customize with additional ingredients like cooked shrimp, chicken, or tofu if desired.
',0.5,NOW());
