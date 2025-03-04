"use client";
import AllHero from "@/components/shared/AllHero";
import companyImg from "../../../../../public/Images/company-hero.jpg";
import React from "react";
import CompanyFactories from "./CompanyFactories";
import Sertificate from "./CompanySertificate";
import CompanyHero from "./CompanyHero";
import { useTranslations } from "next-intl";

const CompanyScreen = () => {
  const t = useTranslations("about");
  return (
    <>
      <AllHero title={t("title")} image={companyImg} />
      <CompanyHero/>
      <Sertificate />
      <CompanyFactories />
    </>
  );
};

export default CompanyScreen;
