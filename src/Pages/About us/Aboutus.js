import React from "react";
import "./Aboutus.css";
import mission1 from "../../assets/images/mission1.png";
import mission2 from "../../assets/images/mission2.png";
import mission3 from "../../assets/images/mission3.png";
import mission4 from "../../assets/images/mission4.png";

function Aboutus() {
  return (
    <>
      <div className="about">
        <div className="about_section">
          <h1 className="about_text">About US</h1>
          <p>
            Kurebuddy is a unique online healthcare aggregator platform that
            connects users to the entire
            <br />
            healthcare services providers by creatinga resourceful ecosysytem of
            service providers.
            <br />
            <br />
            Dedicated to extend the horizons of healthcare facilities and
            services beyond regional limitations and
            <br />
            make them accessible to all under one proof.
          </p>
        </div>

        <h1 className="mission_text">OUR MISSION</h1>
        <div className="mission_section">
          <p className="mission_content">
            Our mission is to bridge the gap between patients & healthcare
            service providers. <br />
            We believe in empowering our users with the most accurate,
            comprehensive, curated information and <br />
            care enabling them to make better healthcare decisions.
            <br />
          </p>
        </div>

        <h1 className="vision_text">OUR VISION</h1>
        <div className="mission_section">
          <p className="vision_content">
            our vision is to make quality healthcare affordable and accessible
            for over a billion Indians.
            <br />
            With a dedication to extending the horizons of healthcare facilities
            & services <br />
            beyond regional limitations and make them assessable to all under
            one roof.
          </p>
        </div>

        <h1 className="benifits_tittle">
          Kurebuddy <span>Benifits</span>
        </h1>
        <div className="mission-conatiner">
          <img className="mission_img" src={mission1} alt="" />
          <div className="mission-info">
            <h2 className="tittle_mission">
              Wider Reach for Doctors/Providers
            </h2>

            <span className="span_mis">
              Ability to extend healthcare access to the masses.
            </span>
            <br></br>
            <span className="span_mis">
              Acess to standardized health records for accurate diagnosis and
              treatment.
            </span>
            <br></br>
            <span className="span_mis">
              Streamlined inpatient flow for providers
            </span>
          </div>
        </div>

        <div className="mission-conatiner">
          <div className="mission-info">
            <h2 className="tittle_mission">Patient Benifits</h2>

            <span className="span_mis">
              Affordable and accessible genuine health services.
            </span>
            <br></br>

            <span className="span_mis">
              Single Platform for all healthcare services & managing health
              records.
            </span>
            <br></br>

            <span className="span_mis">
              Streamlined inpatient flow for providers
            </span>
          </div>
          <img className="mission_img" src={mission2} alt="" />
        </div>

        <div className="mission-conatiner">
          <img className="mission_img3" src={mission3} alt="" />
          <div className="mission-info">
            <h2 className="tittle_mission">
              Data Security and Fraud Preventation{" "}
            </h2>

            <span className="span_mis">
              Sensitive health data digitally secured.
            </span>
            <br></br>

            <span className="span_mis">
              Fool-proof verification of users, doctors & providers to reduce
              quackery
            </span>
            <br></br>

            <span className="span_mis">
              Streamlined inpatient flow for providers
            </span>
          </div>
        </div>
        <div className="mission-conatiner">
          <div className="mission-info">
            <h2 className="tittle_mission">Unified Benifits </h2>

            <span className="span_mis">
              Seamless interconnection of
              patients,doctors,diagnostic,lab,pharmacy
            </span>
            <br></br>
            <span>
              chains,hospitals,insurance providers and other stakeholders
            </span>
          </div>
          <img className="mission_img" src={mission4} alt="" />
        </div>
      </div>
    </>
  );
}

export default Aboutus;
