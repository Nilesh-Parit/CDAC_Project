import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './pages/navbar';
import Registration from "./pages/registration";

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
              </div>
            }
          />
          <Route
            path="/registration.js"
            element={
              <>
                <Navbar />
                <Registration />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
