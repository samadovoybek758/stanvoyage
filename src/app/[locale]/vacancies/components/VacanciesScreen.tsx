import React from "react";
import VacanciesList from "./VacanciesList";
import AllHero from "@/components/shared/AllHero";
import vacanciesImg from "../../../../../public/Images/vacancies-hero.jpg";
import { useTranslations } from "next-intl";

const VacanciesScreen = () => {
  const t = useTranslations("vacancy");
  return (
    <>
      <AllHero title={t("title")} image={vacanciesImg} />
      <VacanciesList />
    </>
  );
};

export default VacanciesScreen;
