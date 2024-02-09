import React from "react";
import "../style/menu.css";
export default function Menu() {
  return (
    <div class="container">
      <div class="cards">
        <div class="image">
          <span>Veg Cuisines</span>
        </div>
        <div class="image">
          <span>Non-veg Cuisines</span>
        </div>
        <div class="image">
          <span>Desserts</span>
        </div>
        <div class="image">
          <span>Snacks</span>
        </div>
        <div class="image">
          <span>Maharashtrian Cuisines</span>
        </div>
        <div class="image">
          <span>South Indian Cuisines</span>
        </div>
        <div class="image">
          <span>Punjabi Cuisines</span>
        </div>
        <div class="image">
          <span>Malvani Cuisines</span>
        </div>
        <div class="image">
          <span>
            <a href="custom.html">Custom Order</a>
          </span>
        </div>
      </div>
    </div>
  );
}
