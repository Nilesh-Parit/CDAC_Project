import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await UserService.login({ username, password });
      if (response.status === 200) {
        console.log("Login successful");
        const userData = response.data;
        localStorage.setItem("userId", userData.userId);
        navigate("/allrecipes");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An error occurred while logging in");
    }
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };
  return (
    <>
      <div
        className="modal fade"
        id="modalopen"
        tabindex="-1"
        role="dialog"
        // aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title" style={{ marginLeft: "35%" }}>
                  <b>FlavourFeed</b>
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">╳</span>
                </button>
              </div>
              <div className="modal-body">
                {error && <div className="error-message">{error}</div>}
                <form className="login-user" onSubmit={handleSubmit}>
                  <div className="form-outline mb-4 w-50">
                    <label
                      className="form-label"
                      for="form2Example1"
                      style={{ fontSize: "14px", marginLeft: "50%" }}
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="form2Example1"
                      className="form-control"
                      placeholder="Enter username"
                      value={username}
                      onChange={handleUsernameChange}
                      required
                      style={{
                        height: "30px",
                        marginLeft: "50%",
                        // marginTop: "6%",
                        borderRadius: "15px",
                      }}
                    />

                    <label
                      className="form-label"
                      for="password"
                      style={{
                        fontSize: "14px",
                        marginLeft: "50%",
                        // marginBottom: "5%",
                      }}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter Password"
                      required
                      onChange={handlePasswordChange}
                      style={{
                        height: "30px",
                        marginLeft: "50%",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                  <div className="row mb-4" style={{ marginLeft: "7%" }}>
                    <div className="col d-flex justify-content-center">
                      <div className="form-check">
                        <label
                          className="form-check-label"
                          for="checkbox"
                          style={{ fontSize: "14px" }}
                        >
                          {" "}
                          Remember me{" "}
                        </label>{" "}
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkbox"
                          style={{ width: "2em;", height: "1.8em" }}
                        />
                      </div>
                    </div>

                    <div
                      className="col d-flex justify-content-center"
                      style={{ fontSize: "14px" }}
                    >
                      <Link to="forgotpassword" data-dismiss="model">
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-outline-primary btn-block mb-4 rounded-pill w-25"
                    style={{ marginLeft: "37%" }}
                    data-dismiss="model"
                  >
                    Sign in
                  </button>

                  <div className="text-center" style={{ fontSize: "14px" }}>
                    <p>
                      Not a member?{" "}
                      <Link to="/registration" data-dismiss="model">
                        Register
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
