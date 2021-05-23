import React from "react";
import "./SearchResults.css";
import Searchbar from "../Home Page/components/Search bar/Searchbar";
import { useInput } from "../../context/SearchContext";

function SearchResults() {
  const { getServices, ClickedService, search } = useInput();

  function handleImg() {
    if (ClickedService === "Helpline") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FHelpline.png?alt=media&token=52351238-3c31-4dc0-a204-e32e0239805a";
    }

    if (ClickedService === "Plasma/Blood") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FPlasma-Blood.png?alt=media&token=89cf302a-46d0-452a-80ab-3cb1bdc785e9";
    }
    if (ClickedService === "Ambulance") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FAmbulance.png?alt=media&token=3084d49d-8320-4cb5-a195-224388e8f26a";
    }
    if (ClickedService === "Teleconsultation") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2F63.png?alt=media&token=03d788c8-5fc1-401d-9ae4-1bb8a5a7a6f6";
    }
    if (ClickedService === "Diagnostic center & lab") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FTesting.png?alt=media&token=56ffc200-b8ad-4201-ad03-7624c730da5f";
    }
    if (ClickedService === "Covid Care at Home") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FCovid_care_at_home.png?alt=media&token=4d6dcb81-b9ad-4470-ad79-41ff325695d7";
    }
    if (ClickedService === "Food Delivery") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FFood-Med_Delivery.png?alt=media&token=6a8ab98f-711d-4d83-8b0b-7ebc85d9b560";
    }
    if (ClickedService === "Oxygen cylinder/ oxygen concentration") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2Foxygen.png?alt=media&token=91bc20f2-4675-4685-ac09-759e5609a363";
    }
    if (ClickedService === "Covid Medicine") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FCovid_Medicines.png?alt=media&token=26f15ac2-0c24-4f8c-90a1-7889d876f03d";
    }
    if (ClickedService === "Bereavement Services") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FBereavenment_Services.png?alt=media&token=38b42888-657d-4f85-98be-479f2a7ef85d";
    }
  }

  return (
    <>
      <div className="SearchResult">
        <div className="SearchResult-header">
          <div className="searchbar-box">
            <Searchbar />
          </div>
        </div>
        <div className="searchResultHeaderContainer">
          <div className="searchResultHeader">
            <img src={handleImg()} alt="" />
            <h3>
              {ClickedService}s {search && "in " + search}
            </h3>
          </div>
        </div>
        {Object.keys(getServices()).map((id) => {
          return (
            <div key={id} className="searchOut-container">
              <img src={handleImg()} alt="" />
              <div className="searchOut-info">
                <span>Name: {getServices()[id].company}</span>
                <span>Contact/Links: {getServices()[id].contactLink}</span>
              </div>
            </div>
          );
        })}
        {ClickedService === "Covid Medicine" ? (
          <a
            href="https://www.google.com/forms/about/"
            rel="noreferrer"
            target="_blank"
          >
            <button className="flottingB">Buy Medicines</button>
          </a>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SearchResults;
