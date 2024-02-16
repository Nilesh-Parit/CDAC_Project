import React, { useState, useEffect } from 'react';
import { Link,Navigate } from 'react-router-dom';
import UserService from '../Service/UserService';
import '../Style/AdminGetAllUsers.css';

const AdminGetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  const [isadmin, setisadmin] = useState(true);
  
  // useEffect(() => {
  //   fetchAllUsers();
  // }, []);

  // const fetchAllUsers = async () => {
  //   try {
  //     const response = await UserService.getAllUsers();
  //     setUsers(response.data);
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // };

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
        if (userData.role === "user") {
          setisadmin(false);
          return;
        }

        const response = await UserService.getAllUsers();
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
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

  const deleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await UserService.deleteUser(userId);
        setUsers(users.filter(user => user.userId !== userId));
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <div className="container">
      <h2>All Users</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            {/* Add more fields as needed */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.firstname} {user.lastname}</td>
              <td>{user.username}</td>
              {/* Add more fields as needed */}
              <td>
                <Link to={`/adminviewuser/${user.userId}`}>
                  <button className="btn btn-info">View</button>
                </Link>
                <button className="btn btn-danger" onClick={() => deleteUser(user.userId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminGetAllUsers;


