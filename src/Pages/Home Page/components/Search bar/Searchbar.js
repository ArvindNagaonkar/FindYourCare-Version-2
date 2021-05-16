import "./Searchbar.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Searchbar({ stateSuggetions }) {
  const [searchtext, setSearchtext] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [resfound, setResfound] = useState(true);
  const handleChange = (e) => {
    let searchval = e.target.value;
    let suggestion = [];
    if (searchval.length > 0) {
      suggestion = stateSuggetions
        .sort()
        .filter((e) => e.toLowerCase().includes(searchval.toLowerCase()));
      setResfound(suggestion.length !== 0 ? true : false);
    }
    setSuggest(suggestion);
    setSearchtext(searchval);
  };

  const suggestedText = (value) => {
    console.log(value);
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
  return (
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
        <div className="icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
