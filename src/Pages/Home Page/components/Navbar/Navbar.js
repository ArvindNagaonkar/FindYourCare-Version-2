import React, { useState } from "react";
import { Button } from "./Button";
import "./Navbar.css";
import { Link as Slink } from "react-scroll";
import { Link as Rlink } from "react-router-dom";

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
        <li className="nav-links">
          <Rlink style={{ textDecoration: "none", color: "white" }} to="/">
            Home
          </Rlink>
        </li>
        <li className="nav-links">
          <Slink
            className="nav-links"
            to="Services"
            smooth={true}
            duration={1000}
          >
            Services
          </Slink>
        </li>
        <li className="nav-links">
          <Slink className="nav-links" to="Blog" smooth={true} duration={1000}>
            Blog
          </Slink>
        </li>
        <li className="nav-links">
          <Slink
            className="nav-links"
            to="Aboutus"
            smooth={true}
            duration={1000}
          >
            About Us
          </Slink>
        </li>
        <li className="nav-links">
          <Slink
            className="nav-links"
            to="ContactUs"
            smooth={true}
            duration={1000}
          >
            Contact Us
          </Slink>
        </li>
        <Rlink to="/login">
          <li className="nav-links-mobile">Sign In</li>
        </Rlink>
        {/* 
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.url}
                smooth={true}
                duration={1000}
                offset={50}
              >
                {" "}
                {item.title}{" "}
              </Link>
            </li>
          );
        })} */}
      </ul>
      <Rlink to="/login">
        <Button>Sign In</Button>
      </Rlink>
      <Button>Service Provider</Button>
    </nav>
  );
}

export default Navbar;
