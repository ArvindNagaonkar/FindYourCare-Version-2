import "./Searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link as SLink } from "react-scroll";
import { useInput } from "../../../../context/SearchContext";

function Searchbar() {
  const { searchtext, handleChange, getSuggestions } = useInput();

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
