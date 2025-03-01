import React from "react";
import VacanciesList from "./VacanciesList";
import AllHero from "@/components/shared/AllHero";
import vacanciesImg from "../../../../../public/Images/vacancies-hero.jpg";

const VacanciesScreen = () => {
  return (
    <>
      <AllHero title="Vakansiyalar" image={vacanciesImg} />
      <VacanciesList />
    </>
  );
};

export default VacanciesScreen;
