import React, { useState } from "react";
import "./UserAccount.css";
import Login from "../Login Page/Login";
import LoginImg from "../../../assets/images/LoginImg.png";
import Register from "../Register Page/Register";

function UserAccount() {
  const [Clicked, Click] = useState(false);

  let handleClicked = () => {
    if (Clicked) {
      return <Login />;
    } else {
      return <Register />;
    }
  };

  let togglelogin = () => {
    if (Clicked) {
      return "Register";
    } else {
      return "Login";
    }
  };

  let togglemember = () => {
    if (Clicked) {
      return "Not a Member ? ";
    } else {
      return "Already have an account? ";
    }
  };

  return (
    <div className="Useracount">
      <div className="Useracount-Container">
        <img src={LoginImg} alt="" />
        <div className="UserForm">
          <h1>Get's started.</h1>
          <span>
            {togglemember()}
            <a
              className="login"
              onClick={() => {
                Click((Clicked) => !Clicked);
                console.log(Clicked);
              }}
            >
              {togglelogin()}
            </a>
          </span>
          {handleClicked()}
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
