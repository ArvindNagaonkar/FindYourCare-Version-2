import React, { useState } from "react";
import { Button } from "./Button";
import "./Navbar.css";
import { Link as Slink } from "react-scroll";
import { Link as RLink } from "react-router-dom";
import Logo from "../../../../assets/icons/Flatcomp.png";

function Navbar() {
  const [state, setState] = useState({ Clicked: false });

  let handleClick = () => {
    setState({ Clicked: !state.Clicked });
  };

  return (
    <nav className="navbarItems">
      <RLink to="/">
        <div className="navbar-logo">
          <img src={Logo} alt="" />
        </div>
      </RLink>
      <div className="menu-icon" onClick={handleClick}>
        <i className={state.Clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={state.Clicked ? "nav-menu active" : "nav-menu"}>
        <RLink to="/" style={{ textDecoration: "none" }}>
          <li className="nav-links" onClick={handleClick}>
            Home
          </li>
        </RLink>
        <li className="nav-links">
          <Slink
            onClick={handleClick}
            className="nav-links"
            to="Services"
            smooth={true}
            duration={1000}
          >
            Services
          </Slink>
        </li>
        <li className="nav-links">
          <a
            rel="noreferrer"
            href="https://www.iafindia.com/mr-arbaaz-kadwekar/"
            target="_blank"
          >
            Blog
          </a>
        </li>
        <li className="nav-links">
          <RLink onClick={handleClick} className="nav-links" to="/about-us">
            About Us
          </RLink>
        </li>
        <li className="nav-links">
          <Slink
            onClick={handleClick}
            className="nav-links"
            to="ContactUs"
            smooth={true}
            duration={1000}
          >
            Contact Us
          </Slink>
        </li>
      </ul>
      <Button>Service Provider</Button>
    </nav>
  );
}

export default Navbar;
