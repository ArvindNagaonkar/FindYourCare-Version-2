import "./Header.css";
import Searchbar from "../../components/Search bar/Searchbar";
function Header() {
  return (
    <>
      <header className="Header" id="Home">
        <img src="" alt=""></img>
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">FINDYOURCARE</span>
            <span className="heading-primary-sub">
              Helping you find Healthcare you deserve
            </span>
          </h1>
        </div>
      </header>
      <div className="searchbar">
        <Searchbar />
      </div>
    </>
  );
}

export default Header;
