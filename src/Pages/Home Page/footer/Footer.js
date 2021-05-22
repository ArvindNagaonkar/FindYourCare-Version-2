import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-heading footer-1">
          <h2>About Us</h2>
          <a href="#">Blog</a>
          <a href="#">Demo</a>
          <a href="#">Cutomers</a>
          <a href="#">Investors</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="footer-heading footer-2">
          <h2>Contact Us</h2>
          <a href="#">Jobs</a>
          <a href="#">Support</a>
          <a href="#">Contact</a>
          <a href="#">Sponsorships</a>
        </div>
        <div className="footer-heading footer-3">
          <h2>Social Media</h2>
          <a href="#">Instagram </a>
          <a href="#">Facebook</a>
          <a href="#">Youtube</a>
          <a href="#">Twitter</a>
          <a href="#">Linkedin</a>
        </div>
        <div className="footer-email-form">
          <h2>Join our newsletter</h2>
          <input
            type="email"
            placeholder="enter@example.com"
            id="footer-email"
          />
          <input type="submit" value="Sign Up" id="footer-email-btn" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
