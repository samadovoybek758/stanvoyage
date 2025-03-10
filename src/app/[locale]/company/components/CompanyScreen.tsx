"use client";
import AllHero from "@/components/shared/AllHero";
import companyImg from "../../../../../public/Images/company-hero.jpg";
import React from "react";
import CompanyFactories from "./CompanyFactories";
import Sertificate from "./CompanySertificate";
import { useTranslations } from "next-intl";
import CompanyHistory from "./CompanyHistory";
import CompanyOverview from "./CompanyOverview";
import CompanyMission from "./CompanyMission";
import CompanyStatistics from "./CompanyStatistics";
import CompanyVideo from "./CompanyVideo";

const CompanyScreen = () => {
  const t = useTranslations("about");
  return (
    <>
      <AllHero title={t("title")} image={companyImg} />
      <CompanyVideo />
      <CompanyOverview />
      <CompanyHistory />
      <CompanyMission />
      <CompanyStatistics />
      <Sertificate />
      <CompanyFactories />
    </>
  );
};

export default CompanyScreen;
