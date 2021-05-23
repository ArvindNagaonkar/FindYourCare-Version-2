import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact">
      <div className="conatctHeader">
        <h5>Always Get In Touch</h5>
        <h3>Our Contact Details</h3>
      </div>
      <p>
        Always Get In Touch Always Get In Touch Our Contact Details FindYourCare
        aims at helping you find some of the best Medical Healthcare's in India,
        also providing you with a wide range of Healthcare products & Emergency
        Service Facilities.
      </p>
      <div className="detailsContainer">
        <div className="contactDetails">
          <i class="fas fa-location-arrow"></i>
          <span>Mumbai, India 400 001</span>
        </div>
        <div>
          <i class="far fa-envelope"></i>
          <span>info@indyourcare.app</span>
        </div>
        <div>
          <i class="fas fa-phone"></i>
          <span>+91 82910 61060</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
