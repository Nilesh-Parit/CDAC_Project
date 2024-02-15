import { useState } from "react";
import "./Navbar.css";
import Login from "../../pages/UserOperations/Login";
// import Help from "../../pages/UserOperations/Help";
import { Link } from "react-router-dom";
export default function NavbarReg() {
  const [open, close] = useState(false);
  const modalHandler = () => {
    close(true);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="nav__logo"
            id="logo"
          />
        </Link>

        <ul className="nav__links">
          <li className="nav__item">
            <Link className="nav__link" to="/recipebyname">
              Search recipe by name
            </Link>
          </li>

          <li className="nav__item">
            <Link className="nav__link" to="/allrecipes">
              All Recipes
            </Link>
          </li>
        </ul>
      </nav>
      {open && <Login />}
    </>
  );
}
