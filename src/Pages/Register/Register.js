import React, { useState } from "react";
import { storeDb } from "../../utility/firebase";

import "./Register.css";
function Register() {
  const [fisrtName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [gender, setGender] = useState();
  const [birthdate, setBirthdate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    storeDb
      .collection("Registered_Users")
      .add({
        fisrtName: fisrtName,
        lastName: lastName,
        email: email,
        PhoneNumber: phoneNumber,
        gender: gender,
        birthdate: birthdate,
      })
      .then(() => {
        alert("You are successfully Registered 🌞");
      })
      .catch((error) => {
        alert(error.message);
      });

    setFirstName("");
    setEmail("");
    setLastName("");
    setPhoneNumber("");
    setGender("");
  };

  return (
    <div className="contactForm">
      <div className="RcontactFromContainer">
        <form onSubmit={handleSubmit}>
          <div className="inputDetail">
            <label htmlFor="First Name">First Name:</label>
            <input
              type="text"
              placeholder="Enter your First Name"
              name="First Name"
              value={fisrtName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
            ></input>
          </div>
          <div className="inputDetail">
            <label htmlFor="Last Name">Last Name:</label>
            <input
              type="text"
              placeholder="Enter your Last Name"
              name="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            ></input>
          </div>
          <div className="inputDetail">
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            ></input>
          </div>
          <div className="inputDetail">
            <label htmlFor="Phone number">Phone Number:</label>
            <input
              type="number"
              placeholder="Enter your Phonen Number"
              name="Phone number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              required
            ></input>
          </div>
          <div className="inputDetail">
            <label htmlFor="Birthdate">Birth Date:</label>
            <input
              type="date"
              placeholder="DD/MM/YYYY"
              name="Birthdate"
              value={birthdate}
              onChange={(e) => {
                setBirthdate(e.target.value);
              }}
              required
            ></input>
          </div>
          <div className="inputDetail">
            <label htmlFor="Gender">Gender:</label>
            <input
              type="text"
              placeholder="Enter your Gender"
              name="Gender"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
              required
            ></input>
          </div>
          <div className="submitButtonContainer">
            <button type="submit" className="submitButton">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
