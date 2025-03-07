"use client";
import CardVacancies from "@/components/ui/cards/CardVacancies";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import { useGetVacansyQuery } from "@/context/api/Vacancies";
import { useTranslations } from "next-intl";
import VacanciesItemLoading from "@/components/ui/cards/VacanciesItemLoading";
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
  const {
    data: vacancies,
    isLoading,
    isFetching,
    isError,
  } = useGetVacansyQuery({});
  const t = useTranslations("vacancy");
  return (
    <section className="mb-16 sm:mb-20 md:mb-28 lg:mb-[120px]">
      <div className="container">
        {isError ? (
          <p className="text-red-500 text-center col-span-full">
            Xatolik yuz berdi! Iltimos, qayta urinib ko‘ring.
          </p>
        ) : (
          <>
            <SectionTitle title={t("title")} />
            <ul className="grid grid-cols-1 ssm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-2 ssm:gap-y-3 sm:gap-y-5 md:gap-y-[25px]">
              {isLoading || isFetching
                ? Array.from({ length: 9 }).map((_, index) => (
                    <VacanciesItemLoading key={index} />
                  ))
                : vacancies?.length > 0 &&
                  vacancies?.map((item: Item) => (
                    <CardVacancies key={item.uuid} item={item} />
                  ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default VacanciesList;
