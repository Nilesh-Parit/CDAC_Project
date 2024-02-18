import { useState } from "react";
import "./Navbar.css";
import Login from "../../pages/UserOperations/Login";
import { createContext } from "react";
import { Link } from "react-router-dom";

export const userContext = createContext();
export default function Navbar() {
  // const [recipe, setRecipe] = useState("");

  const [open, close] = useState(false); //for login pop up
  const modalHandler = () => {
    close(true);
  };

  // function sendData() {
  //   const search = document.getElementById("searchbar").value;
  // console.log(search);
  // setRecipe(search);
  // var queryString = "?para1=" + search;
  // window.location.href = "recipepage.js" + queryString;
  // }

  return (
    <>
      {/* <RecipePage val={recipe}></RecipePage> */}
      {/* <userContext.Provider value={recipe}>
        <RecipePage value={recipe}></RecipePage>
      </userContext.Provider> */}
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          className="nav__logo"
          id="logo"
        />

        <ul className="nav__links">
          <li className="nav__item">
            <Link
              className="nav__link"
              to="/user/recipebyname"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Search recipe
            </Link>
          </li>

          <li className="nav__item">
            <Link
              className="nav__link"
              to="/user/allrecipes"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              All Recipes
            </Link>
          </li>

          <li className="nav__item">
            <Link className="nav__link" to="/user/userpage">
              User Profile
            </Link>
          </li>

          <li className="nav__item">
            {/* event listner to open modal */}
            <button
              data-toggle="modal"
              data-target="#modalopen"
              id="login__btn"
              type="button"
              className="btn rounded-pill px-4"
              onClick={modalHandler}
              data-dismiss="modal"
            >
              <b>Login</b>
            </button>
          </li>
        </ul>
      </nav>
      {/* Conditional rendering for login modal */}
      {open && <Login />}
    </>
  );
}
