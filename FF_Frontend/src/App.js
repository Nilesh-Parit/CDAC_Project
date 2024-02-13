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
                <NavbarReg />
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
