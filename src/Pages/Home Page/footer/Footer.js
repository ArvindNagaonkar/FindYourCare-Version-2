import React, { useState } from "react";
import "./Footer.css";
import { Link as Rlink } from "react-router-dom";
import { storeDb } from "../../../utility/firebase";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    storeDb
      .collection("Newslatter_Subscribers")
      .add({
        email: email,
      })
      .then(() => {
        alert("You are successfully joined our newsletter 👍");
      })
      .catch((error) => {
        alert(error.message);
      });

    setEmail("");
  };

  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer-heading footer-1">
          <h2>About Us</h2>
          <Rlink to="/blog">Blog</Rlink>
          <Rlink to="/terms-of-Use">Terms of Use</Rlink>
          <Rlink to="/privacy-policy">Privacy Policy</Rlink>
          <div className="aboutus-com">
            <i className="far fa-envelope"></i>
            <span>info@Kurebuddy.com</span>
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
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="enter@example.com"
              id="footer-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button id="footer-email-btn">Subscribe</button>
          </form>
          <div className="copyrightInput">
            <span>
              Copyright <i className="fas fa-copyright"></i> 2021 -All Rights
              Reserved - Kurebuddy
            </span>
          </div>
          <div className="copyrightInput">
            <span>
              {" "}
              Template & Developed by{" "}
              <a
                href="https://www.linkedin.com/in/arvind-nagaonkar-956692202/"
                className="dev-link"
                rel="noreferrer"
                target="_blank"
              >
                Arvind Nagaonkar
              </a>
            </span>
          </div>
        </div>
        <div className="copyright">
          <span>
            Copyright <i className="fas fa-copyright"></i> 2021 -All Rights
            Reserved - Kurebuddy.com
          </span>
        </div>
      </div>
      <div className="copyright">
        <span>
          {" "}
          Template & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/arvind-nagaonkar-956692202/"
            className="dev-link"
            rel="noreferrer"
            target="_blank"
          >
            Arvind Nagaonkar
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
