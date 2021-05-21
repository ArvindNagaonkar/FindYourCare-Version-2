import React, { useState, useEffect } from "react";
import "./Services.css";
import { db } from "../../../../utility/firebase";
import { Link as RLink } from "react-router-dom";
import { useInput } from "../../../../context/SearchContext";

function Services() {
  const [services, setServices] = useState({});
  const { handleClickOnService } = useInput();

  useEffect(() => {
    db.ref()
      .child("Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setServices({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  return (
    <div className="sections-services" id="Services">
      <h1>Services</h1>
      <div className="services-wrapper">
        {Object.keys(services).map((id) => {
          return (
            <RLink
              to="/search-result"
              style={{ textDecoration: "none" }}
              key={id}
              onClick={() => handleClickOnService(services[id].title)}
            >
              <button key={id} className="services-box">
                <img src={services[id].image} alt="" />
                <span>{services[id].title}</span>
              </button>
            </RLink>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
