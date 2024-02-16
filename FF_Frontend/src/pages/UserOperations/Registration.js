import React, { useState } from "react";
import "./Registration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";

export default function Registration() {
  const [imageFile, setImageFile] = useState(null);
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phonenumber: "",
    gender: "",
    address: "",
    preferences: "",
    allergies: "",
    dateOfBirth: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!formDetails.firstname.trim()) {
      errors.firstname = "First name is required";
    }
    if (!formDetails.lastname.trim()) {
      errors.lastname = "Last name is required";
    }
    if (!formDetails.username.trim()) {
      errors.username = "Username is required";
    }
    if (!formDetails.password.trim()) {
      errors.password = "Password is required";
    } else if (formDetails.password !== formDetails.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!formDetails.confirmPassword.trim()) {
      errors.confirmPassword = "Please confirm password";
    }
    if (!formDetails.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formDetails.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formDetails.phonenumber.trim()) {
      errors.phonenumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formDetails.phonenumber)) {
      errors.phonenumber = "Phone number should be at least 10 digits";
    }
    if (!formDetails.gender.trim()) {
      errors.gender = "Gender is required";
    }
    // if (!formDetails.address.trim()) {
    //   errors.address = "Address is required";
    // }
    if (!formDetails.dateOfBirth.trim()) {
      errors.dateOfBirth = "Date of Birth is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImageFile(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      const formData = new FormData();

      Object.keys(formDetails).forEach((key) => {
        formData.append(key, formDetails[key]);
      });

      formData.append("image", imageFile);

      UserService.addUser(formData)
        .then(() => {
          setFormDetails({
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            phonenumber: "",
            gender: "",
            // address: "",
            preferences: "",
            allergies: "",
            dateOfBirth: "",
          });
          setImageFile(null);
          navigate("/");
        })
        .catch((err) => {
          console.log("Error occurred", err);
        });
    }
  };

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
      <div className="card " id="reg-card">
        <div
          className="card-body"
          id="reg-card-body"
          style={{ marginTop: "2%" }}
        >
          <h2 className="text-center" id="regheader">
            <b>Register Yourself</b>
          </h2>
          <form
            onSubmit={handleSubmit}
            className="register-form"
            encType="multipart/form-data"
          >
            <div class="container" style={{ marginTop: "1%" }} id="reg-cont">
              {/* <div class="row">
                <div class="col-sm"> */}

              <label for="name">First Name</label>
              <input
                type="text"
                className={`form-control ${errors.firstname && "is-invalid"}`}
                id="name"
                aria-describedby="name"
                placeholder=" Enter first name"
                value={formDetails.firstname}
                onChange={(e) =>
                  setFormDetails({
                    ...formDetails,
                    firstname: e.target.value,
                  })
                }
              />
              {errors.firstname && (
                <div className="invalid-feedback">{errors.firstname}</div>
              )}
              <label for="name">Last Name</label>
              <input
                type="text"
                className={`form-control ${errors.firstname && "is-invalid"}`}
                id="name"
                aria-describedby="name"
                placeholder=" Enter last name"
                value={formDetails.lastname}
                onChange={(e) =>
                  setFormDetails({
                    ...formDetails,
                    lastname: e.target.value,
                  })
                }
              />
              {errors.lastname && (
                <div className="invalid-feedback">{errors.lastname}</div>
              )}
              <label for="dob">DOB</label>
              <input
                type="date"
                className={`form-control ${errors.dateOfBirth && "is-invalid"}`}
                id="dob"
                placeholder="Enter your DOB"
                value={formDetails.dateOfBirth}
                onChange={(e) =>
                  setFormDetails({
                    ...formDetails,
                    dateOfBirth: e.target.value,
                  })
                }
              />
              {errors.dateOfBirth && (
                <div className="invalid-feedback">{errors.dateOfBirth}</div>
              )}
              <label>Gender:</label>
              <select
                id="gender-drp"
                className={`form-select ${errors.gender && "is-invalid"}`}
                value={formDetails.gender}
                onChange={(e) =>
                  setFormDetails({ ...formDetails, gender: e.target.value })
                }
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <div className="invalid-feedback">{errors.gender}</div>
              )}
              <label for="alle">Allergies</label>
              <input
                type="text"
                className="form-control"
                id="alle"
                aria-describedby="alle"
                placeholder="Enter your allergies"
                value={formDetails.allergies}
                onChange={(e) =>
                  setFormDetails({ ...formDetails, allergies: e.target.value })
                }
              />
            </div>
            <div class="col-sm">
              <label for="email">Email ID</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="email"
                placeholder="Enter email address"
                value={formDetails.email}
                onChange={(e) =>
                  setFormDetails({ ...formDetails, email: e.target.value })
                }
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
              <label for="uname">Username</label>
              <input
                type="text"
                id="reg-uname"
                aria-describedby="uname"
                placeholder="Enter your username"
                className={`form-control ${errors.username && "is-invalid"}`}
                value={formDetails.username}
                onChange={(e) =>
                  setFormDetails({ ...formDetails, username: e.target.value })
                }
              />
              {errors.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )}
              <label for="pref">Preference</label>
              <input
                type="test"
                id="pref"
                aria-describedby="pref"
                placeholder="Enter your preference"
                className="form-control"
                value={formDetails.preferences}
                onChange={(e) =>
                  setFormDetails({
                    ...formDetails,
                    preferences: e.target.value,
                  })
                }
              />
            </div>
            <div class="col-sm">
              {" "}
              <label>Phone Number:</label>
              <input
                type="text"
                className={`form-control ${errors.phonenumber && "is-invalid"}`}
                placeholder="Enter 10 digit phone number"
                value={formDetails.phonenumber}
                onChange={(e) =>
                  setFormDetails({
                    ...formDetails,
                    phonenumber: e.target.value,
                  })
                }
              />
              {errors.phonenumber && (
                <div className="invalid-feedback">{errors.phonenumber}</div>
              )}
              {/* <label>Address:</label>
              <textarea
                className={`form-control ${errors.address && "is-invalid"}`}
                value={formDetails.address}
                onChange={(e) =>
                  setFormDetails({ ...formDetails, address: e.target.value })
                }
              />
              {errors.address && (
                <div className="invalid-feedback">{errors.address}</div>
              )} */}
              <label for="pword">Password</label>
              <input
                type="password"
                id="reg-pword"
                aria-describedby="pword"
                placeholder="Enter your password"
                className={`form-control ${errors.password && "is-invalid"}`}
                value={formDetails.password}
                onChange={(e) =>
                  setFormDetails({ ...formDetails, password: e.target.value })
                }
              />
              <label>Confirm Password:</label>
              <input
                type="password"
                className={`form-control ${
                  errors.confirmPassword && "is-invalid"
                }`}
                placeholder="Re-enter your password"
                value={formDetails.confirmPassword}
                id="reg-cnfpword"
                onChange={(e) =>
                  setFormDetails({
                    ...formDetails,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <label>Upload profile picture:</label>
              <input
                type="file"
                onChange={handleImageChange}
                className="form-control"
              />
            </div>
            <button
              type="submit"
              className="btn btn-info rounded-pill"
              id="signup"
              data-dismiss="model"
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
