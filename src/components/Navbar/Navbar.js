import React, { useState } from "react";
import { Button } from "./Button";
import "./Navbar.css";
import { MenuItems } from "./NavbarElements";
import { Link } from "react-scroll";

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
          <Link className="nav-links" to="Home" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li className="nav-links">
          <Link
            className="nav-links"
            to="Services"
            smooth={true}
            duration={1000}
          >
            Services
          </Link>
        </li>
        <li className="nav-links">
          <Link className="nav-links" to="Blog" smooth={true} duration={1000}>
            Blog
          </Link>
        </li>
        <li className="nav-links">
          <Link
            className="nav-links"
            to="Aboutus"
            smooth={true}
            duration={1000}
          >
            About Us
          </Link>
        </li>
        <li className="nav-links">
          <Link
            className="nav-links"
            to="ContactUs"
            smooth={true}
            duration={1000}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <a className="nav-links-mobile" herf="">
            Sign In
          </a>
        </li>
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
      <Button>Sign In</Button>
      <Button>Service Provider</Button>
    </nav>
  );
}

export default Navbar;
