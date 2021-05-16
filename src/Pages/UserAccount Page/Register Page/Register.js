import React from "react";
import "./Register.css";
function Register() {
  return (
    <div className="userRegister">
      <div className="SignUp-with-Buttons">
        <button className="SignUpG">
          <i className="fab fa-google"></i>
          <span>Sign up with Google</span>
        </button>
        <button className="signUpF">
          <i className="fab fa-facebook-f"></i>
          <span>Sign up with Facebook</span>
        </button>
      </div>
      <form className="form" action="#">
        <div className="form_group">
          <label htmlFor="name" className="form_label">
            E-mail
          </label>
          <input
            type="email"
            className="form_input"
            placeholder="email@example.com"
            id="name"
            required
          />
        </div>
        <div className="form_group">
          <label htmlFor="password" className="form_label">
            Password
          </label>
          <input
            type="password"
            className="form_input"
            placeholder="Password"
            id="password"
            required
          />
        </div>
        <div className="form_group">
          <label htmlFor="Cpassword" className="form_label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form_input"
            placeholder="Confirm Password"
            id="Cpassword"
            required
          />
        </div>
        <button className="RegisterButton">Register</button>
      </form>
    </div>
  );
}

export default Register;
