import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/registration";
import Home from "./pages/home";
import Navbar from "./pages/navbar";
import Footer from "./component/Footer";
import NavbarReg from "./pages/navbarForReg";
import Allrecipes from "./pages/allrecipes";
import AddRecipe from "./pages/addrecipe";
import RecipeByName from "./pages/recipebyname";
import ForgotPassword from "./pages/forgotpassword";
import UserProfile from "./pages/userprofile";
import EditProfile from "./pages/editprofile";
import Navbar_Loggedin from "./pages/navbar_loggedin";
import UserRecipes from "./pages/userrecipies";
import EditRecipe from "./pages/editrecipe";
import FeedbackPage from "./pages/feedback";
import RecipeDetails from "./pages/recipedetails";

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
                <Navbar_Loggedin />
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
                <Navbar_Loggedin />
                <UserProfile />
              </>
            }
          ></Route>
          <Route
            path="/editprofile"
            element={
              <>
                <Navbar_Loggedin />
                <EditProfile />
              </>
            }
          ></Route>
          <Route
            path="/userrecipes"
            element={
              <>
                <Navbar_Loggedin />
                <UserRecipes />
              </>
            }
          ></Route>
          <Route
            path="/editrecipe/:id"
            element={
              <>
                <Navbar_Loggedin />
                <EditRecipe />
              </>
            }
          ></Route>
          <Route
            path="/feedback"
            element={
              <>
                <Navbar_Loggedin />
                <FeedbackPage />
              </>
            }
          ></Route>
          <Route
            path="/recipedetails/:id"
            element={
              <>
                <Navbar_Loggedin />
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
