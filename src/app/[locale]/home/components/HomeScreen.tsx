import React from "react";

import Hero from "./Hero";

import CaruselImage from "./CaruselImage";
import Countries from "./Countries";
import Locale from "./Locale";
import TravelTips from "./TravelTips";
import AboutCompany from "./AboutCompany";

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <CaruselImage/>
      <AboutCompany/>
      <Countries/>
      <Locale/>
      <TravelTips/>
    </>
  );
};

export default HomeScreen;
