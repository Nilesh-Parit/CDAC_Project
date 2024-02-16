import React, { useState, useEffect } from 'react';
import { Link,Navigate } from 'react-router-dom';
import RecipeService from '../Service/RecipeService';
import '../Style/AdminGetAllRecipes.css';
import UserService from '../Service/UserService';

const AdminGetAllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  const [isadmin, setisadmin] = useState(true);


  // useEffect(() => {
  //   fetchAllRecipes();
  // }, []);

  // const fetchAllRecipes = async () => {
  //   try {
  //     const response = await RecipeService.getAllRecipes();
  //     setRecipes(response.data);
  //   } catch (error) {
  //     console.error('Error fetching recipes:', error);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) {
          setLoggedIn(false);
          return;
        }

        const userResponse = await UserService.getUserById(userId);
        const userData = userResponse.data;
        if (userData.role === "user") {
          setisadmin(false);
          return;
        }

        const response = await RecipeService.getAllRecipes();
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  if (!loggedIn) {
    // Redirect to login if not logged in
    return <Navigate to="/login" replace />;
  }

  if (!isadmin) {
    // Redirect to login if not logged in
    return <Navigate to="/userdashboard" replace />;
  }


  const deleteRecipe = async (recipeId) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      try {
        await RecipeService.deleteRecipe(recipeId);
        setRecipes(recipes.filter(recipe => recipe.recipeId !== recipeId));
      } catch (error) {
        console.error('Error deleting recipe:', error);
      }
    }
  };

  return (
    <div className="container">
      <h2>All Recipes</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Calories</th>
            {/* Add more fields as needed */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map(recipe => (
            <tr key={recipe.recipeId}>
              <td>{recipe.recipeId}</td>
              <td>{recipe.recipeName}</td>
              <td>{recipe.recipeType}</td>
              <td>{recipe.totalCalories}</td>
              {/* Add more fields as needed */}
              <td>
                <Link to={`/adminviewrecipe/${recipe.recipeId}`}>
                  <button className="btn btn-info">View</button>
                </Link>
                <button className="btn btn-danger" onClick={() => deleteRecipe(recipe.recipeId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminGetAllRecipes;
