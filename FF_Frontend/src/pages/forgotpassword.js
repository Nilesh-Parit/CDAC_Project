import React, { useState } from "react";
import UserService from "../services/UserService";
import "../styles/forgotpassword.css";

export default function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [newPassword, setPassword] = useState("");
  const [confirmnewPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (newPassword !== confirmnewPassword) {
        setError("Passwords do not match");
        return;
      }
      const response = await UserService.updateUserPassword(
        username,
        newPassword
      );
      if (response.status === 200) {
        console.log("Password updated successfully");
      } else {
        setError("Invalid Username");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      setError("An error occurred while updating password");
    }
  };

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
            <b>Reset Password</b>
          </h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <label for="name">Username</label>
            <input
              type="text"
              className="form-control"
              id="uname"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username"
              required
            />
            <label for="name">Password</label>
            <input
              type="password"
              className="form-control"
              id="pword"
              value={newPassword}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />
            <label for="name">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="cnfpword"
              value={confirmnewPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm Password"
              required
            />
            <button
              type="submit"
              className="btn rounded-pill"
              id="resetpword-btn"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
