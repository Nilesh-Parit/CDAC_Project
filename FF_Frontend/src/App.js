import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Registration from "./pages/UserOperations/Registration";
import Home from "./pages/LandingPage/Home";
import Navbar from "../src/component/Navbar/Navbar";
import Footer from "../src/component/Footer/Footer";
import NavbarReg from "../src/component/Navbar/NavbarForRegistration";
import Allrecipes from "./pages/RecipePages/AllRecipes";
import AddRecipe from "./pages/RecipeOperations/AddRecipe";
import RecipeByName from "./pages/RecipeOperations/RecipeByName";
import ForgotPassword from "./pages/UserOperations/ForgotPassword";
import EditProfile from "./pages/UserOperations/EditProfile";
import NavbarAfterLogin from "./component/Navbar/NavbarAfterLogin";
import UserRecipes from "./pages/RecipeOperations/UserRecipes";
import EditRecipe from "./pages/RecipeOperations/EditRecipe";
import FeedbackPage from "./pages/UserOperations/Feedback";
import RecipeDetails from "./pages/RecipePages/RecipeDetails";
import UserPage from "./pages/UserPages/UserPage";
import AdminDashboard from "./pages/AdminPages/Dashboard";
import AllUserRecipies from "./pages/AdminPages/AllUserRecipies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/">
            <Redirect to="/user/home" />
          </Route> */}

          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Home />
              </div>
            }
          />

          <Route
            path="/user/registration"
            element={
              <>
                <NavbarReg />
                <Registration />
              </>
            }
          />
          <Route
            path="/user/allrecipes"
            element={
              <>
                <NavbarReg />
                <Allrecipes />
              </>
            }
          ></Route>
          <Route
            path="/user/addrecipe"
            element={
              <>
                <NavbarAfterLogin />
                <AddRecipe />
              </>
            }
          ></Route>
          <Route
            path="/user/recipebyname"
            element={
              <>
                <NavbarReg />
                <RecipeByName />
              </>
            }
          ></Route>
          <Route
            path="/user/forgotpassword"
            element={
              <>
                <NavbarReg />
                <ForgotPassword />
              </>
            }
          ></Route>
          <Route
            path="/user/userpage"
            element={
              <>
                <NavbarAfterLogin />
                <UserPage />
              </>
            }
          ></Route>
          <Route
            path="/user/editprofile"
            element={
              <>
                <NavbarAfterLogin />
                <EditProfile />
              </>
            }
          ></Route>
          <Route
            path="/user/userrecipes"
            element={
              <>
                <NavbarAfterLogin />
                <UserRecipes />
              </>
            }
          ></Route>
          <Route
            path="/user/editrecipe/:id"
            element={
              <>
                <NavbarAfterLogin />
                <EditRecipe />
              </>
            }
          ></Route>
          <Route
            path="/user/feedback"
            element={
              <>
                <NavbarAfterLogin />
                <FeedbackPage />
              </>
            }
          ></Route>
          <Route
            path="/user/recipedetails/:id"
            element={
              <>
                <NavbarAfterLogin />
                <RecipeDetails />
              </>
            }
          ></Route>
          <Route
            path="/admin/dashboard"
            element={
              <>
                <Navbar />
                <AdminDashboard />
              </>
            }
          ></Route>
          <Route
            path="/admin/alluserrecipies"
            element={
              <>
                <AllUserRecipies />
              </>
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
