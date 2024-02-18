import { Link, Navigate, useNavigate } from "react-router-dom";
import "./AboutUs.css";
export default function AboutUs() {
  const navigate = useNavigate();
  document.addEventListener("DOMContentLoaded", function () {
    let parallax = document.querySelector(".parallax-container");
    let speed = 0.5; // Adjust the speed as needed

    window.addEventListener("scroll", function () {
      let yPos = -window.scrollY * speed;
      parallax.style.backgroundPositionY = yPos + "px";
    });
  });
  return (
    <>
      <h1>About Us</h1>
    </>
  );
}
