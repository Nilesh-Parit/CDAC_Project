import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";

import MealPlanning from "./pages/MealPlanning";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
               <MealPlanning/>
              </div>
            }
          />
          <Route
            path="/registration.js"
            element={
              <>
               
              <MealPlanning/>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
