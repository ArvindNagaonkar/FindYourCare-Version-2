import React, { useState, useEffect } from "react";
import "./Services.css";
import { db } from "../../../../utility/firebase";
import { Link as RLink } from "react-router-dom";
import { useInput } from "../../../../context/SearchContext";

function Services() {
  const [services, setServices] = useState({});
  const [buy, setBuy] = useState({});
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

  useEffect(() => {
    db.ref()
      .child("buySection")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBuy({
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
        {Object.keys(buy).map((id) => {
          return (
            <a key={id} href={buy[id].url} rel="noreferrer" target="_blank">
              <button className="services-box">
                <img src={buy[id].image} alt="" />
                <span>{buy[id].title}</span>
              </button>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
