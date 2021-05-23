import React, { useState } from "react";
import "./Footer.css";
import { Link as Rlink } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");

  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-heading footer-1">
          <h2>About Us</h2>
          <a
            rel="noreferrer"
            href="https://www.iafindia.com/mr-arbaaz-kadwekar/"
            target="_blank"
          >
            Blog
          </a>
          <Rlink to="/termsOfUse">Terms of Use</Rlink>
          <div className="aboutus-com">
            <i className="far fa-envelope"></i>
            <span>info@findyourcare.app</span>
          </div>
          <div className="aboutus-com">
            <i className="fas fa-phone"></i>
            <span>+91 82910 61060</span>
          </div>
        </div>
        <div className="footer-heading footer-2">
          <h2>Contact Us</h2>
          <Rlink to="/jobs" style={{ TextDecoder: "none", color: "white" }}>
            Jobs
          </Rlink>
          <Rlink to="/support" style={{ TextDecoder: "none", color: "white" }}>
            Support
          </Rlink>
          <Rlink to="/contact" style={{ TextDecoder: "none", color: "white" }}>
            Contact
          </Rlink>
        </div>
        <div className="footer-heading footer-3">
          <h2>Social Media</h2>
          <div className="Sociallink-container">
            <a
              className="Sociallink"
              href="https://www.instagram.com/findyourcare.app/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>Instagram{" "}
            </a>
          </div>
          <div className="Sociallink-container">
            <a
              className="Sociallink"
              rel="noreferrer"
              href="https://www.facebook.com/findyourcare.app.5"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>Facebook
            </a>
          </div>
          <div className="Sociallink-container">
            <a
              className="Sociallink"
              rel="noreferrer"
              href="https://twitter.com/Findyourcare1?s=09"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>Twitter
            </a>
          </div>
          <div className="Sociallink-container">
            <a
              className="Sociallink"
              rel="noreferrer"
              href="https://www.linkedin.com/showcase/findyourcare-com/"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>Linkedin
            </a>
          </div>
        </div>
        <div className="footer-email-form">
          <h2>Join our Newsletter</h2>
          <form>
            <input
              type="email"
              placeholder="enter@example.com"
              id="footer-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button id="footer-email-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
