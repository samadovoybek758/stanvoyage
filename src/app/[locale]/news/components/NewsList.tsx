"use client";
import CardNews from "@/components/ui/cards/CardNews";
import SectionTitle from "@/components/shared/SectionTitle";
import { useTranslations } from "next-intl";
import { useGetNewsQuery } from "@/context/api/News";

interface NewsListType {
  uuid: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
  date: string;
}

const NewsList = () => {
  const t = useTranslations("news");
  const { data } = useGetNewsQuery({});
  console.log(data);

  return (
    <section className="mb-[120px]">
      <div className="container ">
        <SectionTitle title={t("title")} />
        <ul className="grid grid-cols-4 gap-x-4 gap-y-[30px]">
          {data?.map((item: NewsListType) => (
            <CardNews key={item?.uuid} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewsList;
