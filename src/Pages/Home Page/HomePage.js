import React from "react";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Aboutus from "./components/About us/Aboutus";
import Ourmission from "./components/Our mission/Ourmission";
import { FooterContainer } from "./components/Footer/containers/footer";

function HomePage() {
  return (
    <>
      <Header />
      <Services />
      <Aboutus />
      <Ourmission />
      <FooterContainer />
    </>
  );
}

export default HomePage;
