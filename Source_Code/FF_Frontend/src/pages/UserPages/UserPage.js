import React, { useState, useEffect } from "react";
import UserService from "../../services/UserService";
import { Link } from "react-router-dom";
import "./UserPage.css";

export default function UserPage() {
  const [user, setUser] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [imageURL, setImageURL] = useState(null); // New state for storing image URL

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    UserService.getUserById(userId)
      .then((response) => {
        console.log(response.data.imageBase64);
        setUser(response.data);
        setImageURL(response.data.imageBase64); // Set image URL directly from base64 data
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleDeleteAccount = () => {
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    UserService.deleteUser(user.userId)
      .then((response) => {
        console.log("User deleted successfully:", response.data);
        window.location.href = "/login";
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  if (!user) {
    return <div className="loading">Loading...</div>;
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
      <div className="card " id="userp-card">
        <div
          className="card-body"
          id="userp-card-body"
          style={{ marginTop: "2%" }}
        >
          <h3
            id="userp-header"
            style={{ marginTop: "8%", fontFamily: "black", color: "#29293d" }}
            className="text-center"
          >
            <b>User Profile</b>
          </h3>
          {imageURL && (
            <img
              src={`data:image/jpeg;base64,${imageURL}`}
              alt="User"
              id="user-image"
            />
          )}
          <span>
            <label htmlFor="firstname">First Name:&nbsp;</label>
            {user.firstname}
          </span>

          <span>
            <label htmlFor="lastname">Last Name:&nbsp;</label>
            {user.lastname}
          </span>
          <span>
            <label htmlFor="username">Username:&nbsp;</label>
            {user.username}
          </span>
          <span>
            <label htmlFor="email">Email:&nbsp;</label>
            {user.email}
          </span>
        </div>
        <div id="userrecipies-div">
          <Link to="/user/userrecipes">
            <button className="form-control rounded-pill" id="userrecipies-btn">
              My Recipies
            </button>
          </Link>
        </div>
        <div id="user-actions">
          <div>
            <Link to="/user/editprofile">
              <button className="edit-btn rounded-pill" id="user-btn">
                Edit Profile
              </button>
            </Link>
          </div>
          <div>
            <button
              className="delete-btn rounded-pill"
              id="user-btn"
              onClick={handleDeleteAccount}
            >
              Delete Account
            </button>
          </div>
        </div>
        {showConfirmation && (
          <div className="confirmation-popup">
            Are you sure you want to delete your account? This action cannot be
            undone.
            <button
              onClick={confirmDelete}
              className="rounded-pill"
              id="delete-btn"
            >
              Yes
            </button>
            <button
              onClick={cancelDelete}
              className="rounded-pill"
              id="delete-btn"
            >
              No
            </button>
          </div>
        )}
      </div>
    </>
  );
}
