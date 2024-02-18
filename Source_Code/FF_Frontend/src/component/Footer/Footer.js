import React, { useState } from "react";
import "./Footer.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
            <Link className="footer__link" to="/user/aboutus">
              About
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to="/user/termsofuse">
              Terms of Use
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to="/user/privacypolicy">
              Privacy Policy
            </Link>
          </li>

          <li className="footer__item">
            <Link className="footer__link" to="/user/contactus">
              Contact Us
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to="/user/feedback">
              Feedback
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
