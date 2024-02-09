import React from "react";
import "../style/registration.css";
export default function Registration() {
  return (
    <>
      <div className="card ">
        <div className="card-body">
          <h2 className="text-center">
            <b>Sign Up</b>
          </h2>
          <form>
            <div className="form-group">
              <div class="container text-center">
                <div class="row">
                  <div class="col">
                    <label for="fname">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      aria-describedby="fname"
                      placeholder="Enter your first name"
                    />
                    <label for="lname">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lname"
                      aria-describedby="lname"
                      placeholder="Enter your last name"
                    />
                    <label for="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Tell us your email id"
                    />
                  </div>
                  <div class="col">
                    <label for="uname">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="uname"
                      aria-describedby="uname"
                      placeholder="Enter username"
                    />

                    <label for="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="create a password for your account"
                    />
                    <label for="dob">Date of Birth</label>
                    <input type="date" className="form-control" id="dob" />
                  </div>
                  <div class="col">
                    <label for="country">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      aria-describedby="country"
                      placeholder="Enter your Country"
                    />
                    <label for="pref">Preferences</label>
                    <input
                      type="text"
                      className="form-control"
                      id="pref"
                      aria-describedby="pref"
                      placeholder="Enter your Preferences"
                    />
                    <label for="alle">Allergies</label>
                    <input
                      type="text"
                      className="form-control"
                      id="alle"
                      aria-describedby="alle"
                      placeholder="Enter your Allergies"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="form-check"></div> */}

            <div id="btn-div">
              <button type="submit" className="btn btn-primary " id="signup">
                Submit
              </button>
              <button type="reset" className="btn btn-primary " id="reset">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
