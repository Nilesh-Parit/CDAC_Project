import React, { useState, useEffect } from 'react';
import UserService from '../Service/UserService';
import { Link,Navigate } from 'react-router-dom';
import '../Style/UserProfile.css';

export default function AdminProfile() {
  const [user, setUser] = useState(null);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [imageURL, setImageURL] = useState(null); // New state for storing image URL
  const [loggedIn, setLoggedIn] = useState(true);
  const [isadmin, setisadmin] = useState(true);
  // useEffect(() => {
  //   const userId = localStorage.getItem('userId');
  //   if (!userId) {
  //     setLoggedIn(false);
  //   } else {
  //   UserService.getUserById(userId)
  //     .then(response => {
  //       console.log(response.data.imageBase64);
  //       setUser(response.data);
  //       setImageURL(response.data.imageBase64); // Set image URL directly from base64 data
  //     })
  //     .catch(error => {
  //       console.error('Error fetching user data:', error);
  //     });
  //  }},[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) {
          setLoggedIn(false);
          return;
        }

        const userResponse = await UserService.getUserById(userId);
        const userData = userResponse.data;
        if (userData.role === "admin") {
          setisadmin(true);
        } 
        setUser(userData);
        setImageURL(userData.imageBase64);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

   if (!loggedIn) {
    // Redirect to login if not logged in
    return <Navigate to="/login" replace />;
  }

  if (!isadmin) {
    // Redirect to login if not logged in
    return <Navigate to="/userdashboard" replace />;
  }
  
  

  const handleDeleteAccount = () => {
    setShowDeleteConfirmation(true);
    };

  const confirmDelete = () => {
    UserService.deleteUser(user.userId)
      .then(response => {
        localStorage.removeItem('userId');
        console.log('User deleted successfully:', response.data);
        window.location.href = '/login';
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  const confirmLogout = () => {
    UserService.logout()
      .then(response => {
        localStorage.removeItem('userId');
        console.log('User Logged Out successfully:', response.data);
        window.location.href = '/login';
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const cancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

//   return (
//     <div className="user-profile">
//       <h2>Admin Profile</h2>
//       <div className="user-details">
//       <p><strong>Profile Photo: </strong> {imageURL && <img src={`data:image/jpeg;base64,${imageURL}`} alt="User" />}</p>
//       <p><strong>Name:</strong> {user.firstname+" "+user.lastname}</p>
//         <p><strong>Username:</strong> {user.username}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Phone Number:</strong> {user.phonenumber}</p>
//         <p><strong>Username:</strong> {user.email}</p>
//         <p><strong>Gender:</strong> {user.gender}</p>
//         <p><strong>Date Of Birth:</strong> {user.dateOfBirth}</p>
//       </div>
//       <div className="user-actions">
//         <div>
//           <Link to="/editadminprofile">
//             <button className="edit-btn">Edit Profile</button>
//           </Link>
//         </div>
//         <div >
//             <button className="logout-btn" onClick={handleLogout}>Logout</button>
//           </div>
//         <div>
//           <button className="delete-btn" onClick={handleDeleteAccount}>Delete Account</button>
//         </div>
//         {showConfirmation && (
//         <div className="confirmation-popup">
//           <p>Are you sure you want to Logout your account? This action cannot be undone.</p>
//           <button onClick={confirmLogout}>Yes</button>
//           <button onClick={cancelLogout}>No</button>
//         </div>
//       )}
//       </div>
//       {showConfirmation && (
//         <div className="confirmation-popup">
//           <p>Are you sure you want to delete your account? This action cannot be undone.</p>
//           <button onClick={confirmDelete}>Yes</button>
//           <button onClick={cancelDelete}>No</button>
//         </div>
//       )}
//     </div>
//   );
// }

return (
  <div className="user-profile">
    <br></br>
    <h2>My Profile</h2>
    <div className="user-details">
    <p><strong>Profile Photo: </strong> {imageURL && <img src={`data:image/jpeg;base64,${imageURL}`} alt="User" />}</p>
      <p><strong>Name:</strong> {user.firstname+" "+user.lastname}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone Number:</strong> {user.phonenumber}</p>
      <p><strong>Username:</strong> {user.email}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>Allergies:</strong> {user.allergies}</p>
      <p><strong>Preferences:</strong> {user.allergies}</p>
      <p><strong>Date Of Birth:</strong> {user.dateOfBirth}</p>
    </div>
    <div className="user-actions">
      <div>
        <Link to="/editprofile">
          <button className="edit-btn">Edit Profile</button>
        </Link>
      </div>
        <div>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
        <div>
        <button className="delete-btn" onClick={handleDeleteAccount}>Delete Account</button>
        </div>
      {showLogoutConfirmation && (
      <div className="confirmation-popup">
        <p>Are you sure you want to Logout your account? This action cannot be undone.</p>
        <button onClick={confirmLogout}>Yes</button>
        <button onClick={cancelLogout}>No</button>
      </div>
    )}
    </div>
    {showDeleteConfirmation && (
      <div className="confirmation-popup">
        <p>Are you sure you want to delete your account? This action cannot be undone!</p>
        <button onClick={confirmDelete}>Yes</button>
        <button onClick={cancelDelete}>No</button>
      </div>
    )}
  </div>
);
}






