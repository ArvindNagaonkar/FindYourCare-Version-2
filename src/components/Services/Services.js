import React from "react";
import "./Services.css";
import Ambulance from "../../assets/images/Ambulance.png";
import Helpline from "../../assets/images/Helpline.png";
import Teleconsultation from "../../assets/images/Teleconsultation.png";
import Testing from "../../assets/images/Testing.png";
import Covid_care_at_home from "../../assets/images/Covid_care_at_home.png";
import Food_Med_Delivery from "../../assets/images/Food-Med_Delivery.png";
import Oxygen from "../../assets/images/Oxygen.png";
import Covid_Medicines from "../../assets/images/Covid_Medicines.png";
import Bereavenment_Services from "../../assets/images/Bereavenment_Services.png";
import Volunteer_Databases_Groups from "../../assets/images/Volunteer_Databases-Groups.png";
import Plasma_Blood from "../../assets/images/Plasma-Blood.png";

function Services() {
  return (
    <div className="sections-services" id="Services">
      <h1>Services</h1>
      <div className="services-wrapper">
        <div className="services-box">
          <img src={Helpline} alt="" />
          <span>Helpline</span>
        </div>
        <div className="services-box">
          <img src={Ambulance} alt="" />
          <span>Ambulance</span>
        </div>
        <div className="services-box">
          <img src={Teleconsultation} alt="" />
          <span>Teleconsultation</span>
        </div>
        <div className="services-box">
          <img src={Testing} alt="" />
          <span>Testing</span>
        </div>
        <div className="services-box">
          <img src={Covid_care_at_home} alt="" />
          <span>Covid Care at Home</span>
        </div>
        <div className="services-box">
          <img src={Food_Med_Delivery} alt="" />
          <span>Food/Med Delivery</span>
        </div>
        <div className="services-box">
          <img src={Oxygen} alt="" />
          <span>Oxygen</span>
        </div>{" "}
        <div className="services-box">
          <img src={Covid_Medicines} alt="" />
          <span>Covid Medicines</span>
        </div>{" "}
        <div className="services-box">
          <img src={Bereavenment_Services} alt="" />
          <span>Bereavement Services</span>
        </div>{" "}
        <div className="services-box">
          <img src={Volunteer_Databases_Groups} alt="" />
          <span>Volunteer Database/Groups</span>
        </div>{" "}
        <div className="services-box">
          <img src={Plasma_Blood} alt="" />
          <span>Plasma/Blood</span>
        </div>
      </div>
    </div>
  );
}

export default Services;
