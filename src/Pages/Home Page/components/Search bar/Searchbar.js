import "./Searchbar.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../../../utility/firebase";
import { Link as SLink } from "react-scroll";

function Searchbar() {
  const [cities, setCities] = useState({});

  useEffect(() => {
    db.ref()
      .child("Cities_suggestion")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setCities({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  let citySuggestions = [];

  const [searchtext, setSearchtext] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [resfound, setResfound] = useState(true);
  const handleChange = (e) => {
    let searchval = e.target.value;
    let suggestion = [];
    if (searchval.length > 0) {
      suggestion = citySuggestions
        .sort()
        .filter((e) => e.toLowerCase().includes(searchval.toLowerCase()));
      setResfound(suggestion.length !== 0 ? true : false);
    }
    setSuggest(suggestion);
    setSearchtext(searchval);
    console.log(searchval);
  };

  const suggestedText = (value) => {
    setSearchtext(value);
    setSuggest([]);
  };

  const getSuggestions = () => {
    if (suggest.length === 0 && searchtext !== "" && !resfound) {
      return <p>Search Content Not Found</p>;
    }

    return suggest.map((item, index) => {
      return (
        <>
          <li key={index} onClick={() => suggestedText(item)}>
            {item}
          </li>
          {index !== suggest.length - 1 && <hr />}
        </>
      );
    });
  };

  Object.keys(cities).forEach((id) => {
    citySuggestions.push(cities[id]);
  });

  return (
    <>
      <div className="wrapper">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search you'r City.."
            className="search"
            value={searchtext}
            onChange={handleChange}
          />
          <div className="autocom-box">{getSuggestions()}</div>

          <SLink to="Services" smooth={true} duration={1000}>
            <div className="icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </SLink>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
