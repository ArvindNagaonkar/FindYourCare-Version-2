import React, { useState } from "react";
import "./Navbar.css";
import { Link as Slink } from "react-scroll";
import { Link as RLink } from "react-router-dom";
import Logo from "../../../../assets/icons/Flatcomp.png";
import Dropdown from "./Dropdown";

function Navbar() {
  const [state, setState] = useState({ Clicked: false });
  const [dropdown, setDropdown] = useState(false);

  let handleClick = () => {
    setState({ Clicked: !state.Clicked });
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
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
        <li
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="nav-links"
        >
          <RLink onClick={handleClick} className="nav-links" to="/about-us">
            About Us <i className="fas fa-chevron-circle-down"></i>
          </RLink>
          {dropdown && <Dropdown />}
        </li>
        <li>
          <RLink onClick={handleClick} className="mobLink" to="/about-us">
            Blog
          </RLink>
        </li>
        <li>
          <RLink onClick={handleClick} className="mobLink" to="/about-us">
            Artical
          </RLink>
        </li>
        <li>
          <RLink onClick={handleClick} className="mobLink" to="/about-us">
            Contact us
          </RLink>
        </li>
        <li>
          <RLink
            onClick={handleClick}
            className="nav-links-mobile"
            to="/about-us"
          >
            Covid19-Tracker
          </RLink>
        </li>
        <li>
          <RLink
            onClick={handleClick}
            className="nav-links-mobile"
            to="/about-us"
          >
            Latest Update
          </RLink>
        </li>
        <li>
          <RLink
            onClick={handleClick}
            className="nav-links-mobile"
            to="/about-us"
          >
            Latest Update
          </RLink>
        </li>
      </ul>
      <a
        className="navlinksBtn"
        href="https://www.google.com/forms/about/"
        target="_blank"
        rel="noreferrer"
      >
        Covid19-Tracker
      </a>
      <RLink className="navlinksBtn" to="/register">
        Latest Update
      </RLink>
      <a
        className="navlinksBtn"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeHRvJsG98RiQ7KlnFNW3PKPBwu-RhtWEOPlTdZh4SZ0t1SMw/viewform"
        target="_blank"
        rel="noreferrer"
      >
        Service Provider
      </a>
    </nav>
  );
}

export default Navbar;
