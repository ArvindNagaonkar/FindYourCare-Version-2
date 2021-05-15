import React from "react";
import OurmissionImg from "../../assets/images/Ourmission.jpg";
function Ourmission() {
  return (
    <div className="aboutus">
      <h1>Our Mission</h1>
      <div className="aboutus-wrapper">
        <img src={OurmissionImg} alt="" />
        <div className="aboutText-box">
          <p>
            FINDYOURCARE is on a mission make quality healthcare affordable and
            accessible for over a billion Indians. We believe in empowering our
            users with the most accurate, comprehensive and curated Information
            and care, enabling them to make batter healthcare decisions.
          </p>
        </div>
      </div>
      <a href="https://www.freepik.com/vectors/cartoon">
        Cartoon vector created by vectorjuice - www.freepik.com
      </a>
    </div>
  );
}

export default Ourmission;
