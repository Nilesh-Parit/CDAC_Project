import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/UserOperations/Registration";
import Home from "./pages/LandingPage/Home";
import Navbar from "../src/component/Navbar/Navbar";
import Footer from "../src/component/Footer/Footer";
import NavbarReg from "../src/component/Navbar/NavbarForRegistration";
import Allrecipes from "./pages/RecipePages/AllRecipes";
import AddRecipe from "./pages/RecipeOperations/AddRecipe";
import RecipeByName from "./pages/RecipeOperations/RecipeByName";
import ForgotPassword from "./pages/UserOperations/ForgotPassword";
import UserProfile from "./pages/UserPages/UserProfile";
import EditProfile from "./pages/UserOperations/EditProfile";
import NavbarAfterLogin from "./component/Navbar/NavbarAfterLogin";
import UserRecipes from "./pages/RecipeOperations/UserRecipies";
import EditRecipe from "./pages/RecipeOperations/EditRecipe";
import FeedbackPage from "./pages/UserOperations/Feedback";
import RecipeDetails from "./pages/RecipePages/RecipeDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
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
            path="/registration"
            element={
              <>
                <NavbarReg />
                <Registration />
              </>
            }
          />
          <Route
            path="/allrecipes"
            element={
              <>
                <NavbarReg />
                <Allrecipes />
              </>
            }
          ></Route>
          <Route
            path="/addrecipe"
            element={
              <>
                <NavbarAfterLogin />
                <AddRecipe />
              </>
            }
          ></Route>
          <Route
            path="/recipebyname"
            element={
              <>
                <NavbarReg />
                <RecipeByName />
              </>
            }
          ></Route>
          <Route
            path="/forgotpassword"
            element={
              <>
                <NavbarReg />
                <ForgotPassword />
              </>
            }
          ></Route>
          <Route
            path="/userprofile"
            element={
              <>
                <NavbarAfterLogin />
                <UserProfile />
              </>
            }
          ></Route>
          <Route
            path="/editprofile"
            element={
              <>
                <NavbarAfterLogin />
                <EditProfile />
              </>
            }
          ></Route>
          <Route
            path="/userrecipes"
            element={
              <>
                <NavbarAfterLogin />
                <UserRecipes />
              </>
            }
          ></Route>
          <Route
            path="/editrecipe/:id"
            element={
              <>
                <NavbarAfterLogin />
                <EditRecipe />
              </>
            }
          ></Route>
          <Route
            path="/feedback"
            element={
              <>
                <NavbarAfterLogin />
                <FeedbackPage />
              </>
            }
          ></Route>
          <Route
            path="/recipedetails/:id"
            element={
              <>
                <NavbarAfterLogin />
                <RecipeDetails />
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
