import { useState } from "react";
import "../styles/Navbar.css";
import Login from "./login";
import axios from "axios";
import { createContext } from "react";
import ReactDOM from "react-dom/client";
import RecipeByName from "./recipebyname";
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
            <Link className="nav__link" to="/recipebyname">
              Search recipe by name
            </Link>
          </li>

          <li className="nav__item">
            <Link className="nav__link" to="/addrecipe">
              Add new recipe
            </Link>
          </li>

          <li className="nav__item">
            <Link className="nav__link" to="/allrecipes">
              All Recipes
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
