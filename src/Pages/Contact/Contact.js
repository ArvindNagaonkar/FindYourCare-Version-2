import React, { useState } from "react";
import { storeDb } from "../../utility/firebase";
import "./Contact.css";
function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    storeDb
      .collection("User_Messages_From_Contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted 🚀");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="contact">
      <div className="contactDetailsContainer">
        <div className="DetailsContainer">
          <div className="conatctHeader">
            <h5>Always Get In Touch</h5>
            <h3>Our Contact Details</h3>
          </div>
          <p>
            Always Get In Touch Always Get In Touch Our Contact Details
            FindYourCare aims at helping you find some of the best Medical
            Healthcare's in India, also providing you with a wide range of
            Healthcare products & Emergency Service Facilities.
          </p>
          <div className="detailsContainer">
            <div className="contactDetails">
              <i className="fas fa-location-arrow"></i>
              <span>Mumbai, India 400 001</span>
            </div>
            <div className="contactDetails">
              <i className="far fa-envelope"></i>
              <span>info@findyourcare.com</span>
            </div>
            <div className="contactDetails">
              <i className="fas fa-phone"></i>
              <span>+91 82910 61060</span>
            </div>
          </div>
        </div>
      </div>
      <div className="contactForm">
        <div className="contactFromContainer">
          <form onSubmit={handleSubmit}>
            <div className="inputDetail">
              <label htmlFor="Full Name">Full Name:</label>
              <input
                type="text"
                placeholder="Enter your Full name"
                name="Full Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              ></input>
            </div>
            <div className="inputDetail">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              ></input>
            </div>
            <div className="inputDetail">
              <label htmlFor="message">Message:</label>
              <textarea
                placeholder="Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                cols="10"
                rows="8"
              ></textarea>
            </div>
            <div className="submitButtonContainer">
              <button type="submit" className="submitButton">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
