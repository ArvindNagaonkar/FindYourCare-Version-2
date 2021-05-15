import React, { useState } from "react";
import { Button } from "./Button";
import "./Navbar.css";
import { MenuItems } from "./NavbarElements";

function Navbar() {
  const [state, setState] = useState({ Clicked: false });

  let handleClick = () => {
    setState({ Clicked: !state.Clicked });
  };

  return (
    <nav className="navbarItems">
      <h1 className="navbar-logo">
        <i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={state.Clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={state.Clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {" "}
                {item.title}{" "}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>Sign Up</Button>
      <Button>Service Provider</Button>
    </nav>
  );
}

export default Navbar;
