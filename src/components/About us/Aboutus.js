import React from "react";
import "./Aboutus.css";
import AboutusImg from "../../assets/images/About us.jpg";
function Aboutus() {
  return (
    <div className="aboutus" id="Aboutus">
      <h1>About Us</h1>
      <div className="aboutus-wrapper">
        <img src={AboutusImg} alt="" />

        <div className="aboutText-box">
          <p>
            FINDYOURCARE is a unique online healthcare aggregator platform that
            connects users to the entire healthcare services providers by
            creating a resourceful ecosystem of serivce providers.
          </p>
          <p>
            Dedicated to extend the horizons of heathcare facilities and
            services beyond regional limitations and make them accessible to all
            under one roof.
          </p>
        </div>
      </div>
      <a href="https://www.freepik.com/vectors/business">
        Business vector created by pikisuperstar - www.freepik.com
      </a>
    </div>
  );
}

export default Aboutus;
