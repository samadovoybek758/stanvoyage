"use client";
import CardNews from "@/components/ui/cards/CardNews";
import SectionTitle from "@/components/shared/SectionTitle";
import { useTranslations } from "next-intl";

const NewsList = () => {
  const t = useTranslations("news");
  return (
    <section className="mb-[120px]">
      <div className="container ">
        <SectionTitle title={t("title")} />
        <ul className="grid grid-cols-4 gap-x-4 gap-y-[30px]">
          {Array.from({ length: 12 }).map((_, index) => (
            <CardNews key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewsList;
