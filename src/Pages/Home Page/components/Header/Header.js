import "./Header.css";
import Searchbar from "../../components/Search bar/Searchbar";
function Header() {
  let suggestions = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

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
        <Searchbar stateSuggetions={suggestions} />
      </div>
    </>
  );
}

export default Header;
