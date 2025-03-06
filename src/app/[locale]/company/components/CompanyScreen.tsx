"use client";
import AllHero from "@/components/shared/AllHero";
import companyImg from "../../../../../public/Images/company-hero.jpg";
import React from "react";
import CompanyFactories from "./CompanyFactories";
import Sertificate from "./CompanySertificate";
import CompanyHero from "./CompanyHero";
import { useTranslations } from "next-intl";
import CompanyHistory from "./CompanyHistory";
import CompanyOverview from "./CompanyOverview";
import CompanyMission from "./CompanyMission";

const CompanyScreen = () => {
  const t = useTranslations("about");
  return (
    <>
      <AllHero title={t("title")} image={companyImg} />
      <CompanyHero/>
      <CompanyOverview/>
      <CompanyHistory/>
      <CompanyMission/>
      <Sertificate />
      <CompanyFactories />  
    </>
  );
};

export default CompanyScreen;
