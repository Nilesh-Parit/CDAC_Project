import React, { useState } from "react";
import "../styles/Footer.css";
import { Navigate, useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();

  return (
    <>
      

      <footer className="footer" id="footer">
        <img
          src="/images/logo2.png"
          alt="Logo"
          className="nav__logo"
          id="flogo"
        />
        <ul className="footer__nav">
          <li className="footer__item">
            <a className="footer__link" href="#">
              About
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Terms of Use
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Privacy Policy
            </a>
          </li>

          <li className="footer__item">
            <a className="footer__link" href="#">
              Blog
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
