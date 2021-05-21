import React from "react";
import OurmissionImg from "../../../../assets/images/15.png";
import "./Ourmission.css";
function Ourmission() {
  return (
    <div className="Ourmission">
      <h1>Our Mission</h1>
      <div className="Ourmission-wrapper">
        <img src={OurmissionImg} alt="" />
        <div className="OurmissionText-box">
          <p>
            FINDYOURCARE is on a mission make quality healthcare affordable and
            accessible for over a billion Indians. We believe in empowering our
            users with the most accurate, comprehensive and curated Information
            and care, enabling them to make batter healthcare decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ourmission;
