// import "../styles/Navbar.css";
import { useState } from "react";
import "../style/login.css";
import "../style/navbar.css";
import Login from "../pages/login";

export default function Navbar() {
  const [pop, setpop] = useState(false);
  const LoginpopHandler = () => {
    setpop(true);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <img
          src="/Images/Logo.png"
          alt="Logo"
          className="nav__logo"
          id="logo"
        />
        <ul className="nav__links">
          <li className="nav__item">
            <a className="nav__link" href="#section--1">
              Features
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#section--2">
              Operations
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#section--3">
              Help
            </a>
          </li>
          <li className="nav__item">
            {/* event listner to open modal */}
            <button
              data-toggle="modal"
              data-target="#modalopen"
              id="login__btn"
              type="button"
              className="btn btn-outline-secondary rounded-pill px-4"
              onClick={LoginpopHandler}
            >
              Click to login
            </button>
          </li>
        </ul>
      </nav>
      <div className="line"></div>
      {pop && <Login />}
    </>
  );
}
