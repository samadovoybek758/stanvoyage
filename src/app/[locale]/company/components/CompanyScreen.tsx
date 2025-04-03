"use client";

import React from 'react';
import AllHero from "@/components/shared/AllHero";
import companyImg from "../../../../../public/Images/stanvoyage/aboutBg.png";
import { useTranslations } from "next-intl";
import CompanyOverview from './CompanyOverview';
import CompanyTravel from './CompanyTravel';
import CompanyWorks from './CompanyWorks';
import CompanyExperts from './CompanyExperts';
import CompanyCustomer from './CompanyCustomers';
import Statistics from './Statistics';

function CompanyScreen() {

  const t = useTranslations("about");
  return (
    <div>
      <AllHero title={t("title")} image={companyImg} mbDefault={false} page='/about' />
      <CompanyOverview/>
      <CompanyTravel/>
      <CompanyWorks/>
      <CompanyExperts/>
      <CompanyCustomer/>
      <Statistics/>
    </div>
  )
}

export default CompanyScreen