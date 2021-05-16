import React from "react";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Aboutus from "./components/About us/Aboutus";
import Ourmission from "./components/Our mission/Ourmission";

function HomePage() {
  return (
    <>
      <Header />
      <Services />
      <Aboutus />
      <Ourmission />
    </>
  );
}

export default HomePage;
