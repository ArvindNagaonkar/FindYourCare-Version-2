import React, { useState } from "react";
import { Link as Rlink } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <li>
          <a
            className="dropdown-link"
            rel="noreferrer"
            href="https://www.iafindia.com/mr-arbaaz-kadwekar/"
            target="_blank"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            className="dropdown-link"
            rel="noreferrer"
            href="https://www.iafindia.com/mr-arbaaz-kadwekar/"
            target="_blank"
          >
            Articles
          </a>
        </li>
        <li>
          <Rlink
            className="dropdown-link"
            to="/contact"
            onClick={() => setClick(false)}
          >
            Contact us
          </Rlink>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
