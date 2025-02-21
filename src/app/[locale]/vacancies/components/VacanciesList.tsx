import CardVacancies from "@/components/ui/cards/CardVacancies";
import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";

const VacanciesList = () => {
  return (
    <section className="mb-[139px]">
      <div className="container">
        <SectionTitle title="Vakansiyalar" buttonName="Filter" />
        <ul className="grid grid-cols-3 gap-x-4 gap-y-[25px]">
          {Array.from({ length: 9 }).map((_, index) => (
            <CardVacancies key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default VacanciesList;
