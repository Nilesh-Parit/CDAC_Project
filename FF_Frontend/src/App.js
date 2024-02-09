import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Registration from "./pages/registration";
import Menu from "./pages/menu";

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
                <Menu />
                <Footer />
              </div>
            }
          />
          <Route
            path="/registration.js"
            element={
              <>
                <Navbar />
                <Registration />
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
