import React, { useState } from "react";
import "./Navbar.css";
import { Link as Slink } from "react-scroll";
import { Link as RLink } from "react-router-dom";
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
      <RLink to="/" style={{ textDecoration: "none" }}>
        <div className="navbar-logo">
          <span className="logo">Kurebuddy</span>
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
          <RLink onClick={handleClick} className="mobLink" to="/blog">
            Blog
          </RLink>
        </li>
        <li>
          <a
            rel="noreferrer"
            href="https://www.iafindia.com/mr-arbaaz-kadwekar/"
            target="_blank"
            className="mobLink"
          >
            Articles
          </a>
        </li>
        <li>
          <RLink onClick={handleClick} className="mobLink" to="/contact">
            Contact us
          </RLink>
        </li>
        <li>
          <a
            className="nav-links-mobile"
            href="https://dkcovid19-tracker.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            Covid19-Tracker
          </a>
        </li>
        <li>
          <RLink
            onClick={handleClick}
            className="nav-links-mobile"
            to="/register"
          >
            Latest Update
          </RLink>
        </li>
        <li>
          <a
            className="nav-links-mobile"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeHRvJsG98RiQ7KlnFNW3PKPBwu-RhtWEOPlTdZh4SZ0t1SMw/viewform"
            target="_blank"
            rel="noreferrer"
          >
            Service Provider
          </a>
        </li>
      </ul>
      <a
        className="navlinksBtn"
        href="https://dkcovid19-tracker.herokuapp.com/"
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
