import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/registration";
import Home from "./pages/home";
import Navbar from "./pages/navbar";
import Footer from "./component/Footer";
import NavbarReg from "./pages/navbarForReg";
import Allrecipes from "./pages/allrecipes";
import AddRecipe from "./pages/addrecipe";
import AllRecipes from "./pages/allrecipes";

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
                <Footer />
              </div>
            }
          />
          <Route
            path="/registration.js"
            element={
              <>
                <NavbarReg />
                <Registration />
              </>
            }
          />
          <Route path="/allrecipes.js" element={<Allrecipes />}></Route>
          <Route path="/addrecipe.js" element={<AddRecipe />}></Route>
          <Route path="/allrecipes.js" element={<AllRecipes />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
