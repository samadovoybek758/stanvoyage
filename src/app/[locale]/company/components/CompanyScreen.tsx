import AllHero from "@/components/shared/AllHero";
import companyImg from "../../../../../public/Images/company-hero.jpg";
import React from "react";
import CompanyFactories from "./CompanyFactories";
import Sertificate from "./CompanySertificate";

const CompanyScreen = () => {
  return (
    <>
      <AllHero title="Biz haqimizda" image={companyImg} />
      <Sertificate />
      <CompanyFactories />
    </>
  );
};

export default CompanyScreen;
