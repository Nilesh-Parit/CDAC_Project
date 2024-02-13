import React from "react";
import "../styles/registration.css";

export default function Registration() {
  //COUNTRY
  document.addEventListener("DOMContentLoaded", function () {
    // Fetch countries data from the API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // Get the select element
        const countryDropdown = document.getElementById("countryDropdown");

        // Loop through the countries and add options to the dropdown
        data.forEach((country) => {
          const option = document.createElement("option");
          option.value = country.name.common;
          option.text = country.name.common;
          countryDropdown.appendChild(option);
        });
      })
      .catch((error) => console.error("Error fetching countries:", error));
  });

  return (
    <>
      <h1
        id="header"
        style={{ marginTop: "8%", fontFamily: "black", color: "#29293d" }}
        className="text-center"
      >
        FlavourFeed
      </h1>
      <div className="card ">
        <div className="card-body" style={{ marginTop: "2%" }}>
          <h2 className="text-center" id="signUpheader">
            <b style={{ fontSize: "80%" }}>Register Yourself</b>
          </h2>
          <form>
            <div class="container" style={{ marginTop: "1%" }}>
              <div class="row">
                <div class="col-sm">
                  <label for="name">Fullname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="name"
                    placeholder=" Enter fullname"
                  />
                  <label for="email">Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    placeholder="Enter email address"
                  />

                  <label for="dob">DOB</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    placeholder="Enter your DOB"
                  />
                </div>
                <div class="col-sm">
                  <label for="uname">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="uname"
                    aria-describedby="uname"
                    placeholder="Enter your username"
                  />
                  <label for="pword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="pword"
                    aria-describedby="pword"
                    placeholder="Enter your password"
                  />
                  <label for="pref">Preference</label>
                  <input
                    type="test"
                    className="form-control"
                    id="pref"
                    aria-describedby="pref"
                    placeholder="Enter your preference"
                  />
                </div>
                <div class="col-sm">
                  {" "}
                  <label for="alle">Allergies</label>
                  <input
                    type="text"
                    className="form-control"
                    id="alle"
                    aria-describedby="alle"
                    placeholder="Enter your allergies"
                  />
                  <label for="countryDropdown">Country</label>
                  <select className="form-select" id="countryDropdown">
                    <option selected>Enter your country</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-info rounded-pill "
              id="signup"
            >
              SignUp
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
