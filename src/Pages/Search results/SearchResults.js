import React, { useEffect, useState } from "react";
// import testIMg from "../../assets/images/Ambulance.png";
import "./SearchResults.css";
import { useInput } from "../../context/SearchContext";

function SearchResults() {
  const { getServices, clickOnService, searchtext, loading } = useInput();

  function handleImg() {
    if (clickOnService === "Helpline") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FHelpline.png?alt=media&token=52351238-3c31-4dc0-a204-e32e0239805a";
    }
    if (clickOnService === "Volunteer Database/Groups") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FVolunteer_Databases-Groups.png?alt=media&token=c3c7a575-3107-4323-84c8-0caedac31f88";
    }
    if (clickOnService === "Plasma/Blood") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FPlasma-Blood.png?alt=media&token=22fe1b75-d064-4042-9ebe-1462a2af3860";
    }
    if (clickOnService === "Ambulance") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FAmbulance.png?alt=media&token=3084d49d-8320-4cb5-a195-224388e8f26a";
    }
    if (clickOnService === "Teleconsultation") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FTeleconsultation.png?alt=media&token=4ca7ddef-f9e0-4b0f-ac6d-66a31487b76f";
    }
    if (clickOnService === "Testing") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FTesting.png?alt=media&token=b6eaae41-4249-4b44-a219-1ad15831a0b0";
    }
    if (clickOnService === "Covid Care at Home") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FCovid_care_at_home.png?alt=media&token=4d6dcb81-b9ad-4470-ad79-41ff325695d7";
    }
    if (clickOnService === "Food/Med Delivery") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FFood-Med_Delivery.png?alt=media&token=6a8ab98f-711d-4d83-8b0b-7ebc85d9b560";
    }
    if (clickOnService === "Oxygen") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FOxygen.png?alt=media&token=ac502d47-6bc8-4af2-a4f6-e7694a6e3061";
    }
    if (clickOnService === "Covid Medicines") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FCovid_Medicines.png?alt=media&token=26f15ac2-0c24-4f8c-90a1-7889d876f03d";
    }
    if (clickOnService === "Bereavement Services") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FBereavenment_Services.png?alt=media&token=38b42888-657d-4f85-98be-479f2a7ef85d";
    }
  }

  return (
    <>
      {loading ? (
        <h2>Loading.....</h2>
      ) : (
        <div className="SearchResult">
          {/* <div className="SearchResult-header">
            <div className="searchbar-box">
              <Searchbar />
            </div>
            <img src={testIMg} alt="" />
          </div> */}
          <div className="searchResultHeaderContainer">
            <div className="searchResultHeader">
              {/* <img src={handleImg()} alt="" /> */}
              <h3>
                {clickOnService}s {searchtext && "in " + searchtext}
              </h3>
            </div>
            <span>Search by your city on the search bar</span>
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
        </div>
      )}
    </>
  );
}

export default SearchResults;
