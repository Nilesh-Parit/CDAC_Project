import React from "react";
import "../styles/registration.css";
import axios from "axios";

export default function Registration() {
  //COUNTRY
  function country() {
    const count = axios.get(`https://restcountries.com/v3.1/all`);
    count.then((res) => {
      // console.log(res.data[0].name.common);
      const countryDropdown = document.getElementById("countryDropdown");
      //   console.log(info);
      res.data.forEach((res, i) => {
        const option = document.createElement("option");
        // console.log(res.name.common);
        option.value = res.name.commonn;
        option.text = res.name.common;
        countryDropdown.appendChild(option);
      });
    });
  }
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
        <div className="card-body" id="card-body" style={{ marginTop: "2%" }}>
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
                  <select
                    className="form-select"
                    id="countryDropdown"
                    onClick={country}
                  >
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
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
