import React from "react";
import Searchbar from "../Home Page/components/Search bar/Searchbar";
// import { db } from "../../utility/firebase";
import testIMg from "../../assets/images/Ambulance.png";
import "./SearchResults.css";

function SearchResults() {
  //   const [services, setServices] = useState({});

  //   useEffect(() => {
  //     db.ref()
  //       .child("Services")
  //       .on("value", (snapshot) => {
  //         if (snapshot.val() != null) {
  //           setServices({
  //             ...snapshot.val(),
  //           });
  //         }
  //       });
  //   }, []);

  return (
    <div className="SearchResult">
      <div className="SearchResult-header">
        <div className="searchbar-box">
          <Searchbar />
        </div>
        <img src={testIMg} alt="" />
      </div>
      <div className="searchOut-container">
        <img src={testIMg} alt="" />
        <div className="searchOut-info">
          <span>Service name</span>
          <span>Number</span>
          <span>address</span>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
