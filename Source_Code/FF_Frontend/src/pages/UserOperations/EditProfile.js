// import React, { useState, useEffect } from 'react';
// import UserService from '../Service/UserService';
// // import { Link } from 'react-router-dom';

// export default function EditProfile() {
//         const [user, setUser] = useState(null);
//         const [editedUser, setEditedUser] = useState(null);
//         const [showConfirmation, setShowConfirmation] = useState(false);
//         const [successMessage, setSuccessMessage] = useState('');
//         const [errorMessage, setErrorMessage] = useState('');

//         useEffect(() => {
//           const userId = localStorage.getItem('userId');
//           UserService.getUserById(userId)
//             .then(response => {
//               setUser(response.data);
//               setEditedUser(response.data);
//             })
//             .catch(error => {
//               console.error('Error fetching user data:', error);
//             });
//         }, []);

//         const handleInputChange = (e) => {
//           const { name, value } = e.target;
//           setEditedUser({ ...editedUser, [name]: value });
//         };

//         const handleUpdateProfile = () => {
//           setShowConfirmation(true);
//         };

//         const confirmUpdate = () => {
//           UserService.updateUser(editedUser)
//             .then(response => {
//               console.log('Profile Updated Successfully:', response.data);
//               setSuccessMessage('Profile Updated Successfully.');
//               setShowConfirmation(false);
//             })
//             .catch(error => {
//               console.error('Error Updating Profile:', error);
//               setErrorMessage('An error occurred. Profile cannot be updated.');
//               setShowConfirmation(false);
//             });
//         };

//         const cancelUpdate = () => {
//           setShowConfirmation(false);
//         };

//         if (!user) {
//           return <div className="loading">Loading...</div>;
//         }
import React, { useState, useEffect } from "react";
import UserService from "../../services/UserService";
import "./EditProfile.css";
export default function EditProfile() {
  const [user, setUser] = useState(null);
  const [editedUser, setEditedUser] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    UserService.getUserById(userId)
      .then((response) => {
        setUser(response.data);
        setEditedUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleUpdateProfile = () => {
    setShowConfirmation(true);
  };

  const confirmUpdate = () => {
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    Object.keys(editedUser).forEach((key) => {
      formData.append(key, editedUser[key]);
    });

    UserService.updateUser(formData, userId)
      .then((response) => {
        console.log("Profile Updated Successfully:", response.data);
        setSuccessMessage("Profile Updated Successfully.");
        setShowConfirmation(false);
      })
      .catch((error) => {
        console.error("Error Updating Profile:", error);
        setErrorMessage("An error occurred. Profile cannot be updated.");
        setShowConfirmation(false);
      });
  };

  const cancelUpdate = () => {
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
      <div className="card ">
        <div className="card-body" id="card-body" style={{ marginTop: "2%" }}>
          <h3
            id="editp-header"
            style={{ marginTop: "8%", fontFamily: "black", color: "#29293d" }}
            className="text-center"
          >
            <b>Edit Profile</b>
          </h3>
          <form>
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              name="firstname"
              className="form-control"
              id="editp-fname"
              value={editedUser.firstname}
              onChange={handleInputChange}
            />

            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="editp-lname"
              name="lastname"
              value={editedUser.lastname}
              onChange={handleInputChange}
            />

            <label htmlFor="profileImage">Profile Image:</label>
            <input
              type="file"
              className="form-control"
              id="editp-pimage"
              name="profileImage"
              onChange={handleImageChange}
            />

            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="editp-uname"
              value={editedUser.username}
              onChange={handleInputChange}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="editp-pword"
              name="password"
              value={editedUser.password}
              onChange={handleInputChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="editp-email"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
            />

            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              className="form-control"
              id="editp-dob"
              value={editedUser.dateOfBirth}
              onChange={handleInputChange}
            />

            <label htmlFor="gender">Gender:</label>
            <select
              name="gender"
              className="form-select"
              id="editp-gender-drp"
              value={editedUser.gender}
              onChange={handleInputChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="phonenumber">Phone Number:</label>
            <input
              type="text"
              name="phonenumber"
              className="form-control"
              id="editp-num"
              value={editedUser.phonenumber}
              onChange={handleInputChange}
            />

            <label htmlFor="preferences">Preferences:</label>
            <input
              type="text"
              name="preferences"
              className="form-control"
              id="editp-pref"
              value={editedUser.preferences}
              onChange={handleInputChange}
            />

            <label htmlFor="allergies">Allergies:</label>
            <input
              type="text"
              name="allergies"
              className="form-control"
              id="editp-alle"
              value={editedUser.allergies}
              onChange={handleInputChange}
            />

            <button
              type="button"
              className="btn btn-info rounded-pill"
              id="updateprofile-btn"
              onClick={handleUpdateProfile}
            >
              Update Profile
            </button>
          </form>
          {showConfirmation && (
            <div className="confirmation-popup">
              <p>Do you want to update your profile?</p>
              <button onClick={confirmUpdate}>Yes</button>
              <button onClick={cancelUpdate}>No</button>
            </div>
          )}
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
