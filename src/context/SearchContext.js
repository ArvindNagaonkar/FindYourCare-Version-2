import React, { useContext, useEffect, useState } from "react";
import { db } from "../utility/firebase";

const InputContext = React.createContext();

export function useInput() {
  return useContext(InputContext);
}

function InputSearchProvider({ children }) {
  const [cities, setCities] = useState("");
  const [searchtext, setSearchtext] = useState("Mumbai");
  const [suggest, setSuggest] = useState([]);
  const [resfound, setResfound] = useState(true);
  const [clickOnService, setClickOnService] = useState("");

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

  Object.keys(cities).forEach((id) => {
    citySuggestions.push(cities[id]);
  });

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

  if (clickOnService !== "") {
    localStorage.setItem("save", clickOnService);
  }
  const ClickedService = localStorage.getItem("save");

  if (
    searchtext === "Agra" ||
    searchtext === "Ahmedabad" ||
    searchtext === "Bhopal" ||
    searchtext === "Chandigarh" ||
    searchtext === "Chennai" ||
    searchtext === "Dehradun" ||
    searchtext === "Delhi NCR" ||
    searchtext === "Goa" ||
    searchtext === "Guntur" ||
    searchtext === "Guwahati" ||
    searchtext === "Hyderabad" ||
    searchtext === "Indore" ||
    searchtext === "Jaipur" ||
    searchtext === "Kolkata" ||
    searchtext === "Lucknow" ||
    searchtext === "Mumbai" ||
    searchtext === "Mysore" ||
    searchtext === "Nagpur" ||
    searchtext === "Patna" ||
    searchtext === "Pune" ||
    searchtext === "Ranchi" ||
    searchtext === "Varansi" ||
    searchtext === "Vizag"
  ) {
    localStorage.setItem("search", searchtext);
  }

  const search = localStorage.getItem("search");

  // if (suggest.length === ) {
  //   localStorage.setItem("searchedText", suggest);
  //   console.log("checked");
  // }

  // const SearchedText = localStorage.getItem("searchedText");

  // console.log(SearchedText);

  // ++++++++++++++ Search Resulte ++++++++++++++++++++++

  // ++++++++++++++++++++++++ Agra +++++++++++++++++++++++
  const [Agra_Ambulance, setAgra_Ambulance] = useState({});
  const [Agra_Helpline, setAgra_Helpline] = useState({});
  const [Agra_Teleconsultation, setAgra_Teleconsultation] = useState({});
  const [Agra_Testing, setAgra_Testing] = useState({});
  const [Agra_Covid_Care_at_Home, setAgra_Covid_Care_at_Home] = useState({});
  const [Agra_Food_Delivery, setAgra_Food_Delivery] = useState({});
  const [Agra_Oxygen, setAgra_Oxygen] = useState({});
  const [Agra_Covid_Medicines, setAgra_Covid_Medicines] = useState({});
  const [Agra_Bereavement_Services, setAgra_Bereavement_Services] = useState(
    {}
  );
  const [Agra_Volunteer_database, setAgra_Volunteer_database] = useState({});
  const [Agra_Plasma_Blood, setAgra_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Agra_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAgra_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Agra_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAgra_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Agra_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAgra_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Agra_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAgra_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Agra_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAgra_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Agra_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAgra_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Agra_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAgra_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Agra_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAgra_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Agra_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAgra_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Agra_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAgra_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Agra_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAgra_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // ++++++++++++++++++++++++ Ahmedabad ++++++++++++++++++++++++++++
  const [Ahmedabad_Ambulance, setAhmedabad_Ambulance] = useState({});
  const [Ahmedabad_Helpline, setAhmedabad_Helpline] = useState({});
  const [Ahmedabad_Teleconsultation, setAhmedabad_Teleconsultation] = useState(
    {}
  );
  const [Ahmedabad_Testing, setAhmedabad_Testing] = useState({});
  const [Ahmedabad_Covid_Care_at_Home, setAhmedabad_Covid_Care_at_Home] =
    useState({});
  const [Ahmedabad_Food_Delivery, setAhmedabad_Food_Delivery] = useState({});
  const [Ahmedabad_Oxygen, setAhmedabad_Oxygen] = useState({});
  const [Ahmedabad_Covid_Medicines, setAhmedabad_Covid_Medicines] = useState(
    {}
  );
  const [Ahmedabad_Bereavement_Services, setAhmedabad_Bereavement_Services] =
    useState({});
  const [Ahmedabad_Volunteer_database, setAhmedabad_Volunteer_database] =
    useState({});
  const [Ahmedabad_Plasma_Blood, setAhmedabad_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Ahmedabad_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAhmedabad_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ahmedabad_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAhmedabad_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ahmedabad_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAhmedabad_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ahmedabad_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAhmedabad_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ahmedabad_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAhmedabad_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ahmedabad_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAhmedabad_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ahmedabad_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAhmedabad_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ahmedabad_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAhmedabad_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ahmedabad_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAhmedabad_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ahmedabad_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAhmedabad_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ahmedabad_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setAhmedabad_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Bangalore +++++++++++++++++++++++++++++++
  const [Bangalore_Ambulance, setBangalore_Ambulance] = useState({});
  const [Bangalore_Helpline, setBangalore_Helpline] = useState({});
  const [Bangalore_Teleconsultation, setBangalore_Teleconsultation] = useState(
    {}
  );
  const [Bangalore_Testing, setBangalore_Testing] = useState({});
  const [Bangalore_Covid_Care_at_Home, setBangalore_Covid_Care_at_Home] =
    useState({});
  const [Bangalore_Food_Delivery, setBangalore_Food_Delivery] = useState({});
  const [Bangalore_Oxygen, setBangalore_Oxygen] = useState({});
  const [Bangalore_Covid_Medicines, setBangalore_Covid_Medicines] = useState(
    {}
  );
  const [Bangalore_Bereavement_Services, setBangalore_Bereavement_Services] =
    useState({});
  const [Bangalore_Volunteer_database, setBangalore_Volunteer_database] =
    useState({});
  const [Bangalore_Plasma_Blood, setBangalore_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Bangalore_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBangalore_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bangalore_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBangalore_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bangalore_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBangalore_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bangalore_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBangalore_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bangalore_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBangalore_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bangalore_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBangalore_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bangalore_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBangalore_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bangalore_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBangalore_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bangalore_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBangalore_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bangalore_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBangalore_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bangalore_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBangalore_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Bhopal +++++++++++++++++++++++++++++++
  const [Bhopal_Ambulance, setBhopal_Ambulance] = useState({});
  const [Bhopal_Helpline, setBhopal_Helpline] = useState({});
  const [Bhopal_Teleconsultation, setBhopal_Teleconsultation] = useState({});
  const [Bhopal_Testing, setBhopal_Testing] = useState({});
  const [Bhopal_Covid_Care_at_Home, setBhopal_Covid_Care_at_Home] = useState(
    {}
  );
  const [Bhopal_Food_Delivery, setBhopal_Food_Delivery] = useState({});
  const [Bhopal_Oxygen, setBhopal_Oxygen] = useState({});
  const [Bhopal_Covid_Medicines, setBhopal_Covid_Medicines] = useState({});
  const [Bhopal_Bereavement_Services, setBhopal_Bereavement_Services] =
    useState({});
  const [Bhopal_Volunteer_database, setBhopal_Volunteer_database] = useState(
    {}
  );
  const [Bhopal_Plasma_Blood, setBhopal_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Bhopal_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBhopal_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bhopal_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBhopal_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bhopal_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBhopal_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bhopal_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBhopal_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bhopal_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBhopal_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bhopal_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBhopal_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bhopal_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBhopal_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bhopal_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBhopal_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bhopal_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBhopal_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bhopal_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBhopal_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Bhopal_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setBhopal_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Chandigarh +++++++++++++++++++++++++++++++

  const [Chandigarh_Ambulance, setChandigarh_Ambulance] = useState({});
  const [Chandigarh_Helpline, setChandigarh_Helpline] = useState({});
  const [Chandigarh_Teleconsultation, setChandigarh_Teleconsultation] =
    useState({});
  const [Chandigarh_Testing, setChandigarh_Testing] = useState({});
  const [Chandigarh_Covid_Care_at_Home, setChandigarh_Covid_Care_at_Home] =
    useState({});
  const [Chandigarh_Food_Delivery, setChandigarh_Food_Delivery] = useState({});
  const [Chandigarh_Oxygen, setChandigarh_Oxygen] = useState({});
  const [Chandigarh_Covid_Medicines, setChandigarh_Covid_Medicines] = useState(
    {}
  );
  const [Chandigarh_Bereavement_Services, setChandigarh_Bereavement_Services] =
    useState({});
  const [Chandigarh_Volunteer_database, setChandigarh_Volunteer_database] =
    useState({});
  const [Chandigarh_Plasma_Blood, setChandigarh_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Chandigarh_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setChandigarh_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Chandigarh_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setChandigarh_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Chandigarh_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setChandigarh_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Chandigarh_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setChandigarh_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Chandigarh_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setChandigarh_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Chandigarh_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setChandigarh_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Chandigarh_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setChandigarh_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Chandigarh_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setChandigarh_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Chandigarh_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setChandigarh_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Chandigarh_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setChandigarh_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Chandigarh_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setChandigarh_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Delhi_NCR +++++++++++++++++++++++++++++++

  const [Delhi_NCR_Ambulance, setDelhi_NCR_Ambulance] = useState({});
  const [Delhi_NCR_Helpline, setDelhi_NCR_Helpline] = useState({});
  const [Delhi_NCR_Teleconsultation, setDelhi_NCR_Teleconsultation] = useState(
    {}
  );
  const [Delhi_NCR_Testing, setDelhi_NCR_Testing] = useState({});
  const [Delhi_NCR_Covid_Care_at_Home, setDelhi_NCR_Covid_Care_at_Home] =
    useState({});
  const [Delhi_NCR_Food_Delivery, setDelhi_NCR_Food_Delivery] = useState({});
  const [Delhi_NCR_Oxygen, setDelhi_NCR_Oxygen] = useState({});
  const [Delhi_NCR_Covid_Medicines, setDelhi_NCR_Covid_Medicines] = useState(
    {}
  );
  const [Delhi_NCR_Bereavement_Services, setDelhi_NCR_Bereavement_Services] =
    useState({});
  const [Delhi_NCR_Volunteer_database, setDelhi_NCR_Volunteer_database] =
    useState({});
  const [Delhi_NCR_Plasma_Blood, setDelhi_NCR_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Delhi_NCR_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setDelhi_NCR_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Delhi_NCR_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setDelhi_NCR_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Delhi_NCR_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setDelhi_NCR_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Delhi_NCR_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setDelhi_NCR_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Delhi_NCR_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setDelhi_NCR_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Delhi_NCR_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setDelhi_NCR_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Delhi_NCR_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setDelhi_NCR_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Delhi_NCR_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setDelhi_NCR_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Delhi_NCR_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setDelhi_NCR_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Delhi_NCR_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setDelhi_NCR_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Delhi_NCR_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setDelhi_NCR_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Goa +++++++++++++++++++++++++++++++

  const [Goa_Ambulance, setGoa_Ambulance] = useState({});
  const [Goa_Helpline, setGoa_Helpline] = useState({});
  const [Goa_Teleconsultation, setGoa_Teleconsultation] = useState({});
  const [Goa_Testing, setGoa_Testing] = useState({});
  const [Goa_Covid_Care_at_Home, setGoa_Covid_Care_at_Home] = useState({});
  const [Goa_Food_Delivery, setGoa_Food_Delivery] = useState({});
  const [Goa_Oxygen, setGoa_Oxygen] = useState({});
  const [Goa_Covid_Medicines, setGoa_Covid_Medicines] = useState({});
  const [Goa_Bereavement_Services, setGoa_Bereavement_Services] = useState({});
  const [Goa_Volunteer_database, setGoa_Volunteer_database] = useState({});
  const [Goa_Plasma_Blood, setGoa_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Goa_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGoa_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Goa_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGoa_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Goa_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGoa_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Goa_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGoa_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Goa_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGoa_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Goa_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGoa_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Goa_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGoa_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Goa_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGoa_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Goa_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGoa_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Goa_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGoa_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Goa_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGoa_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Guntur +++++++++++++++++++++++++++++++

  const [Guntur_Ambulance, setGuntur_Ambulance] = useState({});
  const [Guntur_Helpline, setGuntur_Helpline] = useState({});
  const [Guntur_Teleconsultation, setGuntur_Teleconsultation] = useState({});
  const [Guntur_Testing, setGuntur_Testing] = useState({});
  const [Guntur_Covid_Care_at_Home, setGuntur_Covid_Care_at_Home] = useState(
    {}
  );
  const [Guntur_Food_Delivery, setGuntur_Food_Delivery] = useState({});
  const [Guntur_Oxygen, setGuntur_Oxygen] = useState({});
  const [Guntur_Covid_Medicines, setGuntur_Covid_Medicines] = useState({});
  const [Guntur_Bereavement_Services, setGuntur_Bereavement_Services] =
    useState({});
  const [Guntur_Volunteer_database, setGuntur_Volunteer_database] = useState(
    {}
  );
  const [Guntur_Plasma_Blood, setGuntur_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Guntur_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuntur_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guntur_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuntur_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guntur_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuntur_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guntur_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuntur_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guntur_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuntur_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guntur_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuntur_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guntur_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuntur_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guntur_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuntur_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guntur_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuntur_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guntur_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuntur_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guntur_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuntur_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Guwahati +++++++++++++++++++++++++++++++

  const [Guwahati_Ambulance, setGuwahati_Ambulance] = useState({});
  const [Guwahati_Helpline, setGuwahati_Helpline] = useState({});
  const [Guwahati_Teleconsultation, setGuwahati_Teleconsultation] = useState(
    {}
  );
  const [Guwahati_Testing, setGuwahati_Testing] = useState({});
  const [Guwahati_Covid_Care_at_Home, setGuwahati_Covid_Care_at_Home] =
    useState({});
  const [Guwahati_Food_Delivery, setGuwahati_Food_Delivery] = useState({});
  const [Guwahati_Oxygen, setGuwahati_Oxygen] = useState({});
  const [Guwahati_Covid_Medicines, setGuwahati_Covid_Medicines] = useState({});
  const [Guwahati_Bereavement_Services, setGuwahati_Bereavement_Services] =
    useState({});
  const [Guwahati_Volunteer_database, setGuwahati_Volunteer_database] =
    useState({});
  const [Guwahati_Plasma_Blood, setGuwahati_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Guwahati_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuwahati_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guwahati_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuwahati_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guwahati_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuwahati_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guwahati_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuwahati_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guwahati_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuwahati_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guwahati_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuwahati_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guwahati_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuwahati_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guwahati_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuwahati_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guwahati_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuwahati_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guwahati_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuwahati_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Guwahati_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setGuwahati_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Hyderabad +++++++++++++++++++++++++++++++

  const [Hyderabad_Ambulance, setHyderabad_Ambulance] = useState({});
  const [Hyderabad_Helpline, setHyderabad_Helpline] = useState({});
  const [Hyderabad_Teleconsultation, setHyderabad_Teleconsultation] = useState(
    {}
  );
  const [Hyderabad_Testing, setHyderabad_Testing] = useState({});
  const [Hyderabad_Covid_Care_at_Home, setHyderabad_Covid_Care_at_Home] =
    useState({});
  const [Hyderabad_Food_Delivery, setHyderabad_Food_Delivery] = useState({});
  const [Hyderabad_Oxygen, setHyderabad_Oxygen] = useState({});
  const [Hyderabad_Covid_Medicines, setHyderabad_Covid_Medicines] = useState(
    {}
  );
  const [Hyderabad_Bereavement_Services, setHyderabad_Bereavement_Services] =
    useState({});
  const [Hyderabad_Volunteer_database, setHyderabad_Volunteer_database] =
    useState({});
  const [Hyderabad_Plasma_Blood, setHyderabad_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Hyderabad_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setHyderabad_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Hyderabad_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setHyderabad_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Hyderabad_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setHyderabad_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Hyderabad_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setHyderabad_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Hyderabad_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setHyderabad_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Hyderabad_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setHyderabad_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Hyderabad_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setHyderabad_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Hyderabad_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setHyderabad_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Hyderabad_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setHyderabad_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Hyderabad_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setHyderabad_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Hyderabad_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setHyderabad_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Indore +++++++++++++++++++++++++++++++

  const [Indore_Ambulance, setIndore_Ambulance] = useState({});
  const [Indore_Helpline, setIndore_Helpline] = useState({});
  const [Indore_Teleconsultation, setIndore_Teleconsultation] = useState({});
  const [Indore_Testing, setIndore_Testing] = useState({});
  const [Indore_Covid_Care_at_Home, setIndore_Covid_Care_at_Home] = useState(
    {}
  );
  const [Indore_Food_Delivery, setIndore_Food_Delivery] = useState({});
  const [Indore_Oxygen, setIndore_Oxygen] = useState({});
  const [Indore_Covid_Medicines, setIndore_Covid_Medicines] = useState({});
  const [Indore_Bereavement_Services, setIndore_Bereavement_Services] =
    useState({});
  const [Indore_Volunteer_database, setIndore_Volunteer_database] = useState(
    {}
  );
  const [Indore_Plasma_Blood, setIndore_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Indore_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setIndore_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Indore_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setIndore_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Indore_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setIndore_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Indore_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setIndore_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Indore_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setIndore_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Indore_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setIndore_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Indore_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setIndore_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Indore_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setIndore_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Indore_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setIndore_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Indore_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setIndore_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Indore_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setIndore_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Jaipur +++++++++++++++++++++++++++++++

  const [Jaipur_Ambulance, setJaipur_Ambulance] = useState({});
  const [Jaipur_Helpline, setJaipur_Helpline] = useState({});
  const [Jaipur_Teleconsultation, setJaipur_Teleconsultation] = useState({});
  const [Jaipur_Testing, setJaipur_Testing] = useState({});
  const [Jaipur_Covid_Care_at_Home, setJaipur_Covid_Care_at_Home] = useState(
    {}
  );
  const [Jaipur_Food_Delivery, setJaipur_Food_Delivery] = useState({});
  const [Jaipur_Oxygen, setJaipur_Oxygen] = useState({});
  const [Jaipur_Covid_Medicines, setJaipur_Covid_Medicines] = useState({});
  const [Jaipur_Bereavement_Services, setJaipur_Bereavement_Services] =
    useState({});
  const [Jaipur_Volunteer_database, setJaipur_Volunteer_database] = useState(
    {}
  );
  const [Jaipur_Plasma_Blood, setJaipur_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Jaipur_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setJaipur_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Jaipur_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setJaipur_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Jaipur_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setJaipur_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Jaipur_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setJaipur_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Jaipur_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setJaipur_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Jaipur_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setJaipur_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Jaipur_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setJaipur_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Jaipur_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setJaipur_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Jaipur_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setJaipur_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Jaipur_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setJaipur_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Jaipur_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setJaipur_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Kolkata +++++++++++++++++++++++++++++++

  const [Kolkata_Ambulance, setKolkata_Ambulance] = useState({});
  const [Kolkata_Helpline, setKolkata_Helpline] = useState({});
  const [Kolkata_Teleconsultation, setKolkata_Teleconsultation] = useState({});
  const [Kolkata_Testing, setKolkata_Testing] = useState({});
  const [Kolkata_Covid_Care_at_Home, setKolkata_Covid_Care_at_Home] = useState(
    {}
  );
  const [Kolkata_Food_Delivery, setKolkata_Food_Delivery] = useState({});
  const [Kolkata_Oxygen, setKolkata_Oxygen] = useState({});
  const [Kolkata_Covid_Medicines, setKolkata_Covid_Medicines] = useState({});
  const [Kolkata_Bereavement_Services, setKolkata_Bereavement_Services] =
    useState({});
  const [Kolkata_Volunteer_database, setKolkata_Volunteer_database] = useState(
    {}
  );
  const [Kolkata_Plasma_Blood, setKolkata_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Kolkata_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setKolkata_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Kolkata_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setKolkata_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Kolkata_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setKolkata_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Kolkata_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setKolkata_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Kolkata_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setKolkata_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Kolkata_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setKolkata_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Kolkata_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setKolkata_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Kolkata_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setKolkata_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Kolkata_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setKolkata_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Kolkata_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setKolkata_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Kolkata_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setKolkata_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Lucknow +++++++++++++++++++++++++++++++

  const [Lucknow_Ambulance, setLucknow_Ambulance] = useState({});
  const [Lucknow_Helpline, setLucknow_Helpline] = useState({});
  const [Lucknow_Teleconsultation, setLucknow_Teleconsultation] = useState({});
  const [Lucknow_Testing, setLucknow_Testing] = useState({});
  const [Lucknow_Covid_Care_at_Home, setLucknow_Covid_Care_at_Home] = useState(
    {}
  );
  const [Lucknow_Food_Delivery, setLucknow_Food_Delivery] = useState({});
  const [Lucknow_Oxygen, setLucknow_Oxygen] = useState({});
  const [Lucknow_Covid_Medicines, setLucknow_Covid_Medicines] = useState({});
  const [Lucknow_Bereavement_Services, setLucknow_Bereavement_Services] =
    useState({});
  const [Lucknow_Volunteer_database, setLucknow_Volunteer_database] = useState(
    {}
  );
  const [Lucknow_Plasma_Blood, setLucknow_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Lucknow_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setLucknow_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Lucknow_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setLucknow_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Lucknow_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setLucknow_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Lucknow_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setLucknow_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Lucknow_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setLucknow_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Lucknow_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setLucknow_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Lucknow_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setLucknow_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Lucknow_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setLucknow_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Lucknow_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setLucknow_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Lucknow_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setLucknow_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Lucknow_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setLucknow_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Mumbai +++++++++++++++++++++++++++++++

  const [Mumbai_Ambulance, setMumbai_Ambulance] = useState({});
  const [Mumbai_Helpline, setMumbai_Helpline] = useState({});
  const [Mumbai_Teleconsultation, setMumbai_Teleconsultation] = useState({});
  const [Mumbai_Testing, setMumbai_Testing] = useState({});
  const [Mumbai_Covid_Care_at_Home, setMumbai_Covid_Care_at_Home] = useState(
    {}
  );
  const [Mumbai_Food_Delivery, setMumbai_Food_Delivery] = useState({});
  const [Mumbai_Oxygen, setMumbai_Oxygen] = useState({});
  const [Mumbai_Covid_Medicines, setMumbai_Covid_Medicines] = useState({});
  const [Mumbai_Bereavement_Services, setMumbai_Bereavement_Services] =
    useState({});
  const [Mumbai_Volunteer_database, setMumbai_Volunteer_database] = useState(
    {}
  );
  const [Mumbai_Plasma_Blood, setMumbai_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Mumbai_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMumbai_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mumbai_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMumbai_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mumbai_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMumbai_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mumbai_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMumbai_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mumbai_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMumbai_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mumbai_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMumbai_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mumbai_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMumbai_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mumbai_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMumbai_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mumbai_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMumbai_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mumbai_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMumbai_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mumbai_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMumbai_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Mysore +++++++++++++++++++++++++++++++

  const [Mysore_Ambulance, setMysore_Ambulance] = useState({});
  const [Mysore_Helpline, setMysore_Helpline] = useState({});
  const [Mysore_Teleconsultation, setMysore_Teleconsultation] = useState({});
  const [Mysore_Testing, setMysore_Testing] = useState({});
  const [Mysore_Covid_Care_at_Home, setMysore_Covid_Care_at_Home] = useState(
    {}
  );
  const [Mysore_Food_Delivery, setMysore_Food_Delivery] = useState({});
  const [Mysore_Oxygen, setMysore_Oxygen] = useState({});
  const [Mysore_Covid_Medicines, setMysore_Covid_Medicines] = useState({});
  const [Mysore_Bereavement_Services, setMysore_Bereavement_Services] =
    useState({});
  const [Mysore_Volunteer_database, setMysore_Volunteer_database] = useState(
    {}
  );
  const [Mysore_Plasma_Blood, setMysore_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Mysore_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMysore_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mysore_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMysore_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mysore_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMysore_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mysore_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMysore_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mysore_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMysore_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mysore_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMysore_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mysore_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMysore_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mysore_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMysore_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mysore_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMysore_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mysore_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMysore_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Mysore_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMysore_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Nagpur +++++++++++++++++++++++++++++++

  const [Nagpur_Ambulance, setNagpur_Ambulance] = useState({});
  const [Nagpur_Helpline, setNagpur_Helpline] = useState({});
  const [Nagpur_Teleconsultation, setNagpur_Teleconsultation] = useState({});
  const [Nagpur_Testing, setNagpur_Testing] = useState({});
  const [Nagpur_Covid_Care_at_Home, setNagpur_Covid_Care_at_Home] = useState(
    {}
  );
  const [Nagpur_Food_Delivery, setNagpur_Food_Delivery] = useState({});
  const [Nagpur_Oxygen, setNagpur_Oxygen] = useState({});
  const [Nagpur_Covid_Medicines, setNagpur_Covid_Medicines] = useState({});
  const [Nagpur_Bereavement_Services, setNagpur_Bereavement_Services] =
    useState({});
  const [Nagpur_Volunteer_database, setNagpur_Volunteer_database] = useState(
    {}
  );
  const [Nagpur_Plasma_Blood, setNagpur_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Nagpur_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setNagpur_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Nagpur_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setNagpur_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Nagpur_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setNagpur_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Nagpur_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setNagpur_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Nagpur_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setNagpur_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Nagpur_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setNagpur_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Nagpur_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setNagpur_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Nagpur_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setNagpur_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Nagpur_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setNagpur_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Nagpur_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setNagpur_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Nagpur_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setNagpur_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Patna +++++++++++++++++++++++++++++++

  const [Patna_Ambulance, setPatna_Ambulance] = useState({});
  const [Patna_Helpline, setPatna_Helpline] = useState({});
  const [Patna_Teleconsultation, setPatna_Teleconsultation] = useState({});
  const [Patna_Testing, setPatna_Testing] = useState({});
  const [Patna_Covid_Care_at_Home, setPatna_Covid_Care_at_Home] = useState({});
  const [Patna_Food_Delivery, setPatna_Food_Delivery] = useState({});
  const [Patna_Oxygen, setPatna_Oxygen] = useState({});
  const [Patna_Covid_Medicines, setPatna_Covid_Medicines] = useState({});
  const [Patna_Bereavement_Services, setPatna_Bereavement_Services] = useState(
    {}
  );
  const [Patna_Volunteer_database, setPatna_Volunteer_database] = useState({});
  const [Patna_Plasma_Blood, setPatna_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Patna_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPatna_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Patna_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPatna_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Patna_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPatna_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Patna_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPatna_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Patna_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPatna_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Patna_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPatna_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Patna_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPatna_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Patna_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPatna_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Patna_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPatna_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Patna_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPatna_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Patna_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPatna_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Pune +++++++++++++++++++++++++++++++

  const [Pune_Ambulance, setPune_Ambulance] = useState({});
  const [Pune_Helpline, setPune_Helpline] = useState({});
  const [Pune_Teleconsultation, setPune_Teleconsultation] = useState({});
  const [Pune_Testing, setPune_Testing] = useState({});
  const [Pune_Covid_Care_at_Home, setPune_Covid_Care_at_Home] = useState({});
  const [Pune_Food_Delivery, setPune_Food_Delivery] = useState({});
  const [Pune_Oxygen, setPune_Oxygen] = useState({});
  const [Pune_Covid_Medicines, setPune_Covid_Medicines] = useState({});
  const [Pune_Bereavement_Services, setPune_Bereavement_Services] = useState(
    {}
  );
  const [Pune_Volunteer_database, setPune_Volunteer_database] = useState({});
  const [Pune_Plasma_Blood, setPune_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Pune_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPune_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Pune_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPune_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Pune_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPune_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Pune_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPune_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Pune_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPune_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Pune_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPune_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Pune_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPune_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Pune_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPune_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Pune_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPune_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Pune_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPune_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Pune_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setPune_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Ranchi +++++++++++++++++++++++++++++++

  const [Ranchi_Ambulance, setRanchi_Ambulance] = useState({});
  const [Ranchi_Helpline, setRanchi_Helpline] = useState({});
  const [Ranchi_Teleconsultation, setRanchi_Teleconsultation] = useState({});
  const [Ranchi_Testing, setRanchi_Testing] = useState({});
  const [Ranchi_Covid_Care_at_Home, setRanchi_Covid_Care_at_Home] = useState(
    {}
  );
  const [Ranchi_Food_Delivery, setRanchi_Food_Delivery] = useState({});
  const [Ranchi_Oxygen, setRanchi_Oxygen] = useState({});
  const [Ranchi_Covid_Medicines, setRanchi_Covid_Medicines] = useState({});
  const [Ranchi_Bereavement_Services, setRanchi_Bereavement_Services] =
    useState({});
  const [Ranchi_Volunteer_database, setRanchi_Volunteer_database] = useState(
    {}
  );
  const [Ranchi_Plasma_Blood, setRanchi_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Ranchi_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setRanchi_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ranchi_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setRanchi_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ranchi_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setRanchi_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ranchi_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setRanchi_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ranchi_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setRanchi_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ranchi_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setRanchi_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ranchi_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setRanchi_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ranchi_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setRanchi_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ranchi_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setRanchi_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ranchi_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setRanchi_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Ranchi_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setRanchi_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Varansi +++++++++++++++++++++++++++++++

  const [Varansi_Ambulance, setVaransi_Ambulance] = useState({});
  const [Varansi_Helpline, setVaransi_Helpline] = useState({});
  const [Varansi_Teleconsultation, setVaransi_Teleconsultation] = useState({});
  const [Varansi_Testing, setVaransi_Testing] = useState({});
  const [Varansi_Covid_Care_at_Home, setVaransi_Covid_Care_at_Home] = useState(
    {}
  );
  const [Varansi_Food_Delivery, setVaransi_Food_Delivery] = useState({});
  const [Varansi_Oxygen, setVaransi_Oxygen] = useState({});
  const [Varansi_Covid_Medicines, setVaransi_Covid_Medicines] = useState({});
  const [Varansi_Bereavement_Services, setVaransi_Bereavement_Services] =
    useState({});
  const [Varansi_Volunteer_database, setVaransi_Volunteer_database] = useState(
    {}
  );
  const [Varansi_Plasma_Blood, setVaransi_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Varansi_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVaransi_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Varansi_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVaransi_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Varansi_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVaransi_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Varansi_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVaransi_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Varansi_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVaransi_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Varansi_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVaransi_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Varansi_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVaransi_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Varansi_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVaransi_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Varansi_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVaransi_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Varansi_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVaransi_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Varansi_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVaransi_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  // +++++++++++++++++++++++ Vizag +++++++++++++++++++++++++++++++

  const [Vizag_Ambulance, setVizag_Ambulance] = useState({});
  const [Vizag_Helpline, setVizag_Helpline] = useState({});
  const [Vizag_Teleconsultation, setVizag_Teleconsultation] = useState({});
  const [Vizag_Testing, setVizag_Testing] = useState({});
  const [Vizag_Covid_Care_at_Home, setVizag_Covid_Care_at_Home] = useState({});
  const [Vizag_Food_Delivery, setVizag_Food_Delivery] = useState({});
  const [Vizag_Oxygen, setVizag_Oxygen] = useState({});
  const [Vizag_Covid_Medicines, setVizag_Covid_Medicines] = useState({});
  const [Vizag_Bereavement_Services, setVizag_Bereavement_Services] = useState(
    {}
  );
  const [Vizag_Volunteer_database, setVizag_Volunteer_database] = useState({});
  const [Vizag_Plasma_Blood, setVizag_Plasma_Blood] = useState({});

  useEffect(() => {
    db.ref()
      .child("Vizag_Plasma_Blood")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVizag_Plasma_Blood({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Vizag_Volunteer_database")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVizag_Volunteer_database({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Vizag_Bereavement_Services")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVizag_Bereavement_Services({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Vizag_Covid_Medicines")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVizag_Covid_Medicines({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Vizag_Oxygen")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVizag_Oxygen({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Vizag_Food_Delivery")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVizag_Food_Delivery({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Vizag_Covid_Care_at_Home")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVizag_Covid_Care_at_Home({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Vizag_Testing")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVizag_Testing({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Vizag_Teleconsultation")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVizag_Teleconsultation({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Vizag_Ambulance")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVizag_Ambulance({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  useEffect(() => {
    db.ref()
      .child("Vizag_Helpline")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setVizag_Helpline({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  function getServices() {
    // +++++++++++++++++++++ Agra  +++++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Agra") {
      return Agra_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Agra") {
      return Agra_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Agra") {
      return Agra_Teleconsultation;
    }
    if (ClickedService === "Diagnostic center & lab" && search === "Agra") {
      return Agra_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Agra") {
      return Agra_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Agra") {
      return Agra_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Agra"
    ) {
      return Agra_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Agra") {
      return Agra_Covid_Medicines;
    }
    if (ClickedService === "Volunteer Database/Groups" && search === "Agra") {
      return Agra_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Agra") {
      return Agra_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Agra") {
      return Agra_Plasma_Blood;
    }

    // ++++++++++++++++++ Ahmedabad ++++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Ahmedabad") {
      return Ahmedabad_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Ahmedabad") {
      return Ahmedabad_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Ahmedabad") {
      return Ahmedabad_Teleconsultation;
    }
    if (
      ClickedService === "Diagnostic center & lab" &&
      search === "Ahmedabad"
    ) {
      return Ahmedabad_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Ahmedabad") {
      return Ahmedabad_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Ahmedabad") {
      return Ahmedabad_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Ahmedabad"
    ) {
      return Ahmedabad_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Ahmedabad") {
      return Ahmedabad_Covid_Medicines;
    }
    if (
      ClickedService === "Volunteer Database/Groups" &&
      search === "Ahmedabad"
    ) {
      return Ahmedabad_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Ahmedabad") {
      return Ahmedabad_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Ahmedabad") {
      return Ahmedabad_Plasma_Blood;
    }
    // +++++++++++++++++++++++ Bangalore +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Bangalore") {
      return Bangalore_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Bangalore") {
      return Bangalore_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Bangalore") {
      return Bangalore_Teleconsultation;
    }
    if (
      ClickedService === "Diagnostic center & lab" &&
      search === "Bangalore"
    ) {
      return Bangalore_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Bangalore") {
      return Bangalore_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Bangalore") {
      return Bangalore_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Bangalore"
    ) {
      return Bangalore_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Bangalore") {
      return Bangalore_Covid_Medicines;
    }
    if (
      ClickedService === "Volunteer Database/Groups" &&
      search === "Bangalore"
    ) {
      return Bangalore_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Bangalore") {
      return Bangalore_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Bangalore") {
      return Bangalore_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Bhopal +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Bhopal") {
      return Bhopal_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Bhopal") {
      return Bhopal_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Bhopal") {
      return Bhopal_Teleconsultation;
    }
    if (ClickedService === "Diagnostic center & lab" && search === "Bhopal") {
      return Bhopal_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Bhopal") {
      return Bhopal_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Bhopal") {
      return Bhopal_Food_Delivery;
    }
    if (ClickedService === "Oxygen" && search === "Bhopal") {
      return Bhopal_Oxygen;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Bhopal"
    ) {
      return Bhopal_Covid_Medicines;
    }
    if (ClickedService === "Volunteer Database/Groups" && search === "Bhopal") {
      return Bhopal_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Bhopal") {
      return Bhopal_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Bhopal") {
      return Bhopal_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Chandigarh +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Chandigarh") {
      return Chandigarh_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Chandigarh") {
      return Chandigarh_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Chandigarh") {
      return Chandigarh_Teleconsultation;
    }
    if (
      ClickedService === "Diagnostic center & lab" &&
      search === "Chandigarh"
    ) {
      return Chandigarh_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Chandigarh") {
      return Chandigarh_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Chandigarh") {
      return Chandigarh_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Chandigarh"
    ) {
      return Chandigarh_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Chandigarh") {
      return Chandigarh_Covid_Medicines;
    }
    if (
      ClickedService === "Volunteer Database/Groups" &&
      search === "Chandigarh"
    ) {
      return Chandigarh_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Chandigarh") {
      return Chandigarh_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Chandigarh") {
      return Chandigarh_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Delhi_NCR +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Delhi_NCR") {
      return Delhi_NCR_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Delhi_NCR") {
      return Delhi_NCR_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Delhi_NCR") {
      return Delhi_NCR_Teleconsultation;
    }
    if (
      ClickedService === "Diagnostic center & lab" &&
      search === "Delhi_NCR"
    ) {
      return Delhi_NCR_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Delhi_NCR") {
      return Delhi_NCR_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Delhi_NCR") {
      return Delhi_NCR_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Delhi_NCR"
    ) {
      return Delhi_NCR_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Delhi_NCR") {
      return Delhi_NCR_Covid_Medicines;
    }
    if (
      ClickedService === "Volunteer Database/Groups" &&
      search === "Delhi_NCR"
    ) {
      return Delhi_NCR_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Delhi_NCR") {
      return Delhi_NCR_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Delhi_NCR") {
      return Delhi_NCR_Plasma_Blood;
    }
    // +++++++++++++++++++++++ Goa +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Goa") {
      return Goa_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Goa") {
      return Goa_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Goa") {
      return Goa_Teleconsultation;
    }
    if (ClickedService === "Diagnostic center & lab" && search === "Goa") {
      return Goa_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Goa") {
      return Goa_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Goa") {
      return Goa_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Goa"
    ) {
      return Goa_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Goa") {
      return Goa_Covid_Medicines;
    }
    if (ClickedService === "Volunteer Database/Groups" && search === "Goa") {
      return Goa_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Goa") {
      return Goa_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Goa") {
      return Goa_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Guntur +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Guntur") {
      return Guntur_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Guntur") {
      return Guntur_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Guntur") {
      return Guntur_Teleconsultation;
    }
    if (ClickedService === "Diagnostic center & lab" && search === "Guntur") {
      return Guntur_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Guntur") {
      return Guntur_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Guntur") {
      return Guntur_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Guntur"
    ) {
      return Guntur_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Guntur") {
      return Guntur_Covid_Medicines;
    }
    if (ClickedService === "Volunteer Database/Groups" && search === "Guntur") {
      return Guntur_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Guntur") {
      return Guntur_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Guntur") {
      return Guntur_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Guwahati +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Guwahati") {
      return Guwahati_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Guwahati") {
      return Guwahati_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Guwahati") {
      return Guwahati_Teleconsultation;
    }
    if (ClickedService === "Diagnostic center & lab" && search === "Guwahati") {
      return Guwahati_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Guwahati") {
      return Guwahati_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Guwahati") {
      return Guwahati_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Guwahati"
    ) {
      return Guwahati_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Guwahati") {
      return Guwahati_Covid_Medicines;
    }
    if (
      ClickedService === "Volunteer Database/Groups" &&
      search === "Guwahati"
    ) {
      return Guwahati_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Guwahati") {
      return Guwahati_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Guwahati") {
      return Guwahati_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Hyderabad +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Hyderabad") {
      return Hyderabad_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Hyderabad") {
      return Hyderabad_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Hyderabad") {
      return Hyderabad_Teleconsultation;
    }
    if (
      ClickedService === "Diagnostic center & lab" &&
      search === "Hyderabad"
    ) {
      return Hyderabad_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Hyderabad") {
      return Hyderabad_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Hyderabad") {
      return Hyderabad_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Hyderabad"
    ) {
      return Hyderabad_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Hyderabad") {
      return Hyderabad_Covid_Medicines;
    }
    if (
      ClickedService === "Volunteer Database/Groups" &&
      search === "Hyderabad"
    ) {
      return Hyderabad_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Hyderabad") {
      return Hyderabad_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Hyderabad") {
      return Hyderabad_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Indore +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Indore") {
      return Indore_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Indore") {
      return Indore_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Indore") {
      return Indore_Teleconsultation;
    }
    if (ClickedService === "Diagnostic center & lab" && search === "Indore") {
      return Indore_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Indore") {
      return Indore_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Indore") {
      return Indore_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Indore"
    ) {
      return Indore_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Indore") {
      return Indore_Covid_Medicines;
    }
    if (ClickedService === "Volunteer Database/Groups" && search === "Indore") {
      return Indore_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Indore") {
      return Indore_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Indore") {
      return Indore_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Jaipur +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Jaipur") {
      return Jaipur_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Jaipur") {
      return Jaipur_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Jaipur") {
      return Jaipur_Teleconsultation;
    }
    if (ClickedService === "Diagnostic center & lab" && search === "Jaipur") {
      return Jaipur_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Jaipur") {
      return Jaipur_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Jaipur") {
      return Jaipur_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Jaipur"
    ) {
      return Jaipur_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Jaipur") {
      return Jaipur_Covid_Medicines;
    }
    if (ClickedService === "Volunteer Database/Groups" && search === "Jaipur") {
      return Jaipur_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Jaipur") {
      return Jaipur_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Jaipur") {
      return Jaipur_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Kolkata +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Kolkata") {
      return Kolkata_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Kolkata") {
      return Kolkata_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Kolkata") {
      return Kolkata_Teleconsultation;
    }
    if (ClickedService === "Diagnostic center & lab" && search === "Kolkata") {
      return Kolkata_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Kolkata") {
      return Kolkata_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Kolkata") {
      return Kolkata_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Kolkata"
    ) {
      return Kolkata_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Kolkata") {
      return Kolkata_Covid_Medicines;
    }
    if (
      ClickedService === "Volunteer Database/Groups" &&
      search === "Kolkata"
    ) {
      return Kolkata_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Kolkata") {
      return Kolkata_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Kolkata") {
      return Kolkata_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Lucknow +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Lucknow") {
      return Lucknow_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Lucknow") {
      return Lucknow_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Lucknow") {
      return Lucknow_Teleconsultation;
    }
    if (ClickedService === "Diagnostic center & lab" && search === "Lucknow") {
      return Lucknow_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Lucknow") {
      return Lucknow_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Lucknow") {
      return Lucknow_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Lucknow"
    ) {
      return Lucknow_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Lucknow") {
      return Lucknow_Covid_Medicines;
    }
    if (
      ClickedService === "Volunteer Database/Groups" &&
      search === "Lucknow"
    ) {
      return Lucknow_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Lucknow") {
      return Lucknow_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Lucknow") {
      return Lucknow_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Mumbai +++++++++++++++++++++++++++++++

    if (
      ClickedService === "Helpline" &&
      search === "Mumbai"
      //  ||
      // ClickedService === "Helpline"
    ) {
      return Mumbai_Helpline;
    }
    if (
      ClickedService === "Ambulance" &&
      search === "Mumbai"
      //  ||
      // ClickedService === "Ambulance"
    ) {
      return Mumbai_Ambulance;
    }
    if (
      ClickedService === "Teleconsultation" &&
      search === "Mumbai"
      // ||
      // ClickedService === "Teleconsultation"
    ) {
      return Mumbai_Teleconsultation;
    }
    if (
      ClickedService === "Diagnostic center & lab" &&
      search === "Mumbai"
      //   ||
      // ClickedService === "Diagnostic center & lab"
    ) {
      return Mumbai_Testing;
    }
    if (
      ClickedService === "Covid Care at Home" &&
      search === "Mumbai"
      // ||
      // ClickedService === "Covid Care at Home"
    ) {
      return Mumbai_Covid_Care_at_Home;
    }
    if (
      ClickedService === "Food Delivery" &&
      search === "Mumbai"
      // ||
      // ClickedService === "Food Delivery"
    ) {
      return Mumbai_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Mumbai"
      //    ||
      // ClickedService === "Oxygen cylinder/ oxygen concentration"
    ) {
      return Mumbai_Oxygen;
    }
    if (
      ClickedService === "Covid Medicine" &&
      search === "Mumbai"
      // ||
      // ClickedService === "Covid Medicine"
    ) {
      return Mumbai_Covid_Medicines;
    }
    if (
      ClickedService === "Volunteer Database/Groups" &&
      search === "Mumbai"
      //    ||
      // ClickedService === "Volunteer Database/Groups"
    ) {
      return Mumbai_Volunteer_database;
    }
    if (
      ClickedService === "Bereavement Services" &&
      search === "Mumbai"
      // ||
      // ClickedService === "Bereavement Services"
    ) {
      return Mumbai_Bereavement_Services;
    }
    if (
      ClickedService === "Plasma/Blood" &&
      search === "Mumbai"
      // ||
      // ClickedService === "Plasma/Blood"
    ) {
      return Mumbai_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Mysore +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Mysore") {
      return Mysore_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Mysore") {
      return Mysore_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Mysore") {
      return Mysore_Teleconsultation;
    }
    if (ClickedService === "Diagnostic center & lab" && search === "Mysore") {
      return Mysore_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Mysore") {
      return Mysore_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Mysore") {
      return Mysore_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Mysore"
    ) {
      return Mysore_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Mysore") {
      return Mysore_Covid_Medicines;
    }
    if (ClickedService === "Volunteer Database/Groups" && search === "Mysore") {
      return Mysore_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Mysore") {
      return Mysore_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Mysore") {
      return Mysore_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Nagpur +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Nagpur") {
      return Nagpur_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Nagpur") {
      return Nagpur_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Nagpur") {
      return Nagpur_Teleconsultation;
    }
    if (ClickedService === "Diagnostic center & lab" && search === "Nagpur") {
      return Nagpur_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Nagpur") {
      return Nagpur_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Nagpur") {
      return Nagpur_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Nagpur"
    ) {
      return Nagpur_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Nagpur") {
      return Nagpur_Covid_Medicines;
    }
    if (ClickedService === "Volunteer Database/Groups" && search === "Nagpur") {
      return Nagpur_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Nagpur") {
      return Nagpur_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Nagpur") {
      return Nagpur_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Patna +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Patna") {
      return Patna_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Patna") {
      return Patna_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Patna") {
      return Patna_Teleconsultation;
    }
    if (ClickedService === "Diagnostic center & lab" && search === "Patna") {
      return Patna_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Patna") {
      return Patna_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Patna") {
      return Patna_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Patna"
    ) {
      return Patna_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Patna") {
      return Patna_Covid_Medicines;
    }
    if (ClickedService === "Volunteer Database/Groups" && search === "Patna") {
      return Patna_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Patna") {
      return Patna_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Patna") {
      return Patna_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Pune +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Pune") {
      return Pune_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Pune") {
      return Pune_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Pune") {
      return Pune_Teleconsultation;
    }
    if (ClickedService === "Diagnostic center & lab" && search === "Pune") {
      return Pune_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Pune") {
      return Pune_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Pune") {
      return Pune_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Pune"
    ) {
      return Pune_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Pune") {
      return Pune_Covid_Medicines;
    }
    if (ClickedService === "Volunteer Database/Groups" && search === "Pune") {
      return Pune_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Pune") {
      return Pune_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Pune") {
      return Pune_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Ranchi +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Ranchi") {
      return Ranchi_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Ranchi") {
      return Ranchi_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Ranchi") {
      return Ranchi_Teleconsultation;
    }
    if (ClickedService === "Diagnostic center & lab" && search === "Ranchi") {
      return Ranchi_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Ranchi") {
      return Ranchi_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Ranchi") {
      return Ranchi_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Ranchi"
    ) {
      return Ranchi_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Ranchi") {
      return Ranchi_Covid_Medicines;
    }
    if (ClickedService === "Volunteer Database/Groups" && search === "Ranchi") {
      return Ranchi_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Ranchi") {
      return Ranchi_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Ranchi") {
      return Ranchi_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Varansi +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Varansi") {
      return Varansi_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Varansi") {
      return Varansi_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Varansi") {
      return Varansi_Teleconsultation;
    }
    if (
      ClickedService === "Diagnostic center & labing" &&
      search === "Varansi"
    ) {
      return Varansi_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Varansi") {
      return Varansi_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Varansi") {
      return Varansi_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Varansi"
    ) {
      return Varansi_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Varansi") {
      return Varansi_Covid_Medicines;
    }
    if (
      ClickedService === "Volunteer Database/Groups" &&
      search === "Varansi"
    ) {
      return Varansi_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Varansi") {
      return Varansi_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Varansi") {
      return Varansi_Plasma_Blood;
    }

    // +++++++++++++++++++++++ Vizag +++++++++++++++++++++++++++++++

    if (ClickedService === "Helpline" && search === "Vizag") {
      return Vizag_Helpline;
    }
    if (ClickedService === "Ambulance" && search === "Vizag") {
      return Vizag_Ambulance;
    }
    if (ClickedService === "Teleconsultation" && search === "Vizag") {
      return Vizag_Teleconsultation;
    }
    if (ClickedService === "Diagnostic center & lab" && search === "Vizag") {
      return Vizag_Testing;
    }
    if (ClickedService === "Covid Care at Home" && search === "Vizag") {
      return Vizag_Covid_Care_at_Home;
    }
    if (ClickedService === "Food Delivery" && search === "Vizag") {
      return Vizag_Food_Delivery;
    }
    if (
      ClickedService === "Oxygen cylinder/ oxygen concentration" &&
      search === "Vizag"
    ) {
      return Vizag_Oxygen;
    }
    if (ClickedService === "Covid Medicine" && search === "Vizag") {
      return Vizag_Covid_Medicines;
    }
    if (ClickedService === "Volunteer Database/Groups" && search === "Vizag") {
      return Vizag_Volunteer_database;
    }
    if (ClickedService === "Bereavement Services" && search === "Vizag") {
      return Vizag_Bereavement_Services;
    }
    if (ClickedService === "Plasma/Blood" && search === "Vizag") {
      return Vizag_Plasma_Blood;
    }
  }

  function handleClickOnService(service) {
    setClickOnService(service);
  }

  const value = {
    ClickedService,
    searchtext,
    search,
    handleChange,
    getSuggestions,
    handleClickOnService,
    getServices,
    setClickOnService,
    setSearchtext,
  };

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
}

export default InputSearchProvider;
