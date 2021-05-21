import React from "react";
import "./SearchResults.css";
import Searchbar from "../Home Page/components/Search bar/Searchbar";
import { useInput } from "../../context/SearchContext";

function SearchResults() {
  const { getServices, ClickedService, searchCity } = useInput();

  function handleImg() {
    if (ClickedService === "Helpline") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FHelpline.png?alt=media&token=52351238-3c31-4dc0-a204-e32e0239805a";
    }
    if (ClickedService === "Volunteer Database/Groups") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FVolunteer_Databases-Groups.png?alt=media&token=c3c7a575-3107-4323-84c8-0caedac31f88";
    }
    if (ClickedService === "Plasma/Blood") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FPlasma-Blood.png?alt=media&token=22fe1b75-d064-4042-9ebe-1462a2af3860";
    }
    if (ClickedService === "Ambulance") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FAmbulance.png?alt=media&token=3084d49d-8320-4cb5-a195-224388e8f26a";
    }
    if (ClickedService === "Teleconsultation") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FTeleconsultation.png?alt=media&token=4ca7ddef-f9e0-4b0f-ac6d-66a31487b76f";
    }
    if (ClickedService === "Testing") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FTesting.png?alt=media&token=b6eaae41-4249-4b44-a219-1ad15831a0b0";
    }
    if (ClickedService === "Covid Care at Home") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FCovid_care_at_home.png?alt=media&token=4d6dcb81-b9ad-4470-ad79-41ff325695d7";
    }
    if (ClickedService === "Food/Med Delivery") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FFood-Med_Delivery.png?alt=media&token=6a8ab98f-711d-4d83-8b0b-7ebc85d9b560";
    }
    if (ClickedService === "Oxygen") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FOxygen.png?alt=media&token=ac502d47-6bc8-4af2-a4f6-e7694a6e3061";
    }
    if (ClickedService === "Covid Medicines") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FCovid_Medicines.png?alt=media&token=26f15ac2-0c24-4f8c-90a1-7889d876f03d";
    }
    if (ClickedService === "Bereavement Services") {
      return "https://firebasestorage.googleapis.com/v0/b/findyourcare-production.appspot.com/o/Service%20icons%2FBereavenment_Services.png?alt=media&token=38b42888-657d-4f85-98be-479f2a7ef85d";
    }
  }

  // useEffect(() => {
  //   if (localStorage.getItem("clicked")) {
  //     setClickOnService(JSON.parse(localStorage.getItem("clicked")));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("clicked", JSON.stringify(clickOnService));
  // }, [clickOnService]);

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
              {ClickedService}s {searchCity && "in " + searchCity}
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
      </div>
    </>
  );
}

export default SearchResults;
