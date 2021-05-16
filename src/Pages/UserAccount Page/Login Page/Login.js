import React from "react";
import "../Register Page/Register.css";
import "./Login.css";

function Login() {
  return (
    <div className="LoginUser">
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
      <form className="from" action="#">
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
        <button className="RegisterButton">Log in</button>
      </form>
    </div>
  );
}

export default Login;
