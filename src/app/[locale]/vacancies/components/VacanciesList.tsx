"use client";
import CardVacancies from "@/components/ui/cards/CardVacancies";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import { useGetVacansyQuery } from "@/context/api/Vacancies";
import { useTranslations } from "next-intl";

interface Item {
  uuid: string;
  title_ru: string;
  title_en: string;
  title_uz: string;
  description_ru: string;
  description_en: string;
  description_uz: string;
}
const VacanciesList = () => {
  const { data: vacancies } = useGetVacansyQuery({});
  const t = useTranslations("vacancy");
  return (
    <section className="mb-[139px]">
      <div className="container">
        <SectionTitle
          title={t("title")}
        />
        <ul className="grid grid-cols-3 gap-x-4 gap-y-[25px]">
          {vacancies?.length > 0 &&
            vacancies?.map((item: Item) => (
              <CardVacancies key={item.uuid} item={item} />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default VacanciesList;
